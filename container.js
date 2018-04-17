/** Require local modules */
const child = require('./child');
const text = require('./text');

/**
 * @class Container
 * @extends Child
 * @added v0.1.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering a container of HTML elements.
 */
class Container extends child.Child {
  /**
   * @signature new Container([data])
   * @added v0.1.0
   * @param data Object
   * @returns Container
   * @description Returns a new [Container] instance, initializing with any key/value pairs provided in `data` with keys 
   * that match setter method names.
   */
  constructor(data = {}) {
    super(data);
      
    this.allowedContent(data.allowedContent || []);
    this.content(data.content || []);
  }
  
  /**
   * Allowed content getter/setter.
   * @signature allowedContent() Get the allowed content
   * @signature allowedContent(object[Array]) Set the allowed content as (object[Array])
   * @return This object for call chaining
   */
  allowedContent(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._allowedContent;
    
    /** Setter */
    else if ( typeof arg1 == 'object' && arg1.constructor.name == 'Array' )
      this._allowedContent = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`${this.constructor.name}.content(): Invalid signature (${typeof arg1}[${arg1.constructor.name}]).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Content getter/setter.
   * @signature content() Get the content
   * @signature content(object[Array]) Set the content as (object[Array])
   * @return This object for call chaining
   */
  content(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._content;
    
    /** Setter */
    else if ( typeof arg1 == 'object' && arg1.constructor.name == 'Array' )
      this._content = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`${this.constructor.name}.content(): Invalid signature (${typeof arg1}[${arg1.constructor.name}]).`);
    
    /** Set parent for all items */
    const parent = this;
    
    this._content.forEach((item) => {
      if ( typeof item != 'function' )
        item.parent(parent);
    });
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Prepend HTML element or string to content.
   * @signature content(mixed) Add (mixed) to beginning of content
   * @return This object for call chaining
   */
  prepend(arg1) {
    /** Setter */
    if ( typeof arg1 == 'object' && ( this.allowedContent().length === 0 || this.allowedContent().indexOf(arg1.constructor.name) !== -1 ) )
      this._content.unshift(arg1);
    else if ( typeof arg1 == 'function' && ( this.allowedContent().length === 0 || this.allowedContent().indexOf('Function') !== -1 ) )
      this._content.unshift(arg1);
    
    /** Handle errors */
    else
      throw new TypeError(`${this.constructor.name}.prepend(): Invalid signature (${typeof arg1}[${arg1.constructor.name}]).`);
    
    /** Set parent */
    if ( typeof arg1 != 'function' )
      arg1.parent(this);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Append HTML element or string to content.
   * @signature content(mixed) Add (mixed) to content
   * @return This object for call chaining
   */
  append(arg1) {
    /** Setter */
    if ( typeof arg1 == 'object' && ( this.allowedContent().length === 0 || this.allowedContent().indexOf(arg1.constructor.name) !== -1 ) )
      this._content.push(arg1);
    else if ( typeof arg1 == 'function' && ( this.allowedContent().length === 0 || this.allowedContent().indexOf('Function') !== -1 ) )
      this._content.push(arg1);
    
    /** Handle errors */
    else
      throw new TypeError(`${this.constructor.name}.append(): Invalid signature (${typeof arg1}[${arg1.constructor.name}]).`);
    
    /** Set parent */
    if ( typeof arg1 != 'function' )
      arg1.parent(this);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Append text to content.
   * @signature text(string|number) Append text as (string|number) to content
   * @return This object for call chaining
   */
  text(arg1) {
    /** Add text if string */
    if ( typeof arg1 == 'string' || typeof arg1 == 'number' )
      this.append(new text.Text().text(arg1.toString()));
    
    /** Handle errors */
    else
      throw new TypeError(`${this.constructor.name}.text(): Invalid signature (${typeof arg1}).`);

    /** Allow for call chaining */
    return this;
  }
  
  /**
   * @signature render(indent) 
   * @added v0.1.0
   * @param indent number
   * @return string Rendered HTML
   * @description Render this element with `indent` spaces of indentation before each line.
   */
  render(indent = 0) {
    let markup = '';
    
    this.content().forEach((content) => {
      if ( typeof content == 'function' ) {
        markup += ' '.repeat(indent) + '$( document ).ready(() => {\n';
        markup += ' '.repeat(indent) + content.toString().split('\n').slice(1, -1).join('\n' + ' '.repeat(indent + 2)) + '\n';
        markup += ' '.repeat(indent) + '});\n';
      } else if ( this.constructor.name == 'TextArea' || this.constructor.name == 'PreformattedText' ) {
        markup += content.render(0);
      } else {
        markup += content.render(indent);
        
        if ( content.constructor.name == 'Text' )
          markup += `\n`;
      }
    });

    return markup;
  }
}

module.exports.Container = Container;

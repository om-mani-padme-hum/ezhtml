/** Require local modules */
const child = require('./child');
const text = require('./text');

/**
 * @class ezhtml.Container
 * @extends Child
 * @added v0.1.0
 * @updated v0.2.0
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
   * @signature allowedContent()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns Array
   * @description Gets an [Array] of [string] objects containing class names of elements that are allowed to be added as
   * content in this container.  An empty [Array] allows all elements to be added.
   *
   * @signature allowedContent(classArray)
   * @added v0.1.0
   * @updated v0.2.0
   * @param classArray Array
   * @returns this
   * @throws TypeError if `classArray` is not a valid [Array]
   * @description Sets an [Array] of [string] objects containing class names of elements that are allowed to be added as
   * content in this container.  An empty [Array] allows all elements to be added.
   */
  allowedContent(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._allowedContent;

    /** Setter */
    else if ( typeof arg1 == 'object' && arg1.constructor.name == 'Array' )
      this._allowedContent = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.allowedContent(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.allowedContent(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }
  
  /**
   * @signature content()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns Array
   * @description Gets an [Array] of potentially mixed [string], [function], and [Element] extending objects that make up
   * the content of this container.  The members of the [Array] represent only the direct child descendents of this object,
   * while those children may also have their own content, etc.
   *
   * @signature content(contentArray)
   * @added v0.1.0
   * @updated v0.2.0
   * @param contentArray Array
   * @returns this
   * @throws TypeError if `contentArray` is not a valid [Array]
   * @description Sets an [Array] of potentially mixed [string], [function], and [Element] extending objects that make up
   * the content of this container.  The members of the [Array] represent only the direct child descendents of this object,
   * while those children may also have their own content, etc.
   */
  content(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._content;
    
    /** Setter */
    else if ( typeof arg1 == 'object' && arg1.constructor.name == 'Array' )
      this._content = arg1; 
    
    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.content(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.content(${arg1.constructor.name}): Invalid signature.`);
    
    /** Set parent for all items */
    const parent = this;
    
    this._content.forEach((item) => {
      if ( typeof item != 'function' )
        item.parent(parent);
    });
    
    /** Allow for call chaining */
    return this;
  }
  
  /*
   * @signature prepend(content)
   * @added v0.1.0
   * @updated v0.2.0
   * @param content string|function|Element
   * @returns this
   * @throws TypeError if `content` is not a valid [String] or [Function] or [Element] extending object
   * @description Prepends `content` to the beginning of the content array.
   */
  prepend(arg1) {
    /** Setter */
    if ( typeof arg1 == 'object' && ( this.allowedContent().length === 0 || this.allowedContent().indexOf(arg1.constructor.name) !== -1 ) )
      this._content.unshift(arg1);
    else if ( typeof arg1 == 'function' && ( this.allowedContent().length === 0 || this.allowedContent().indexOf('Function') !== -1 ) )
      this._content.unshift(arg1);
    
    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.content(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.content(${arg1.constructor.name}): Invalid signature.`);
    
    /** Set parent */
    if ( typeof arg1 != 'function' )
      arg1.parent(this);
    
    /** Allow for call chaining */
    return this;
  }
  
  /*
   * @signature append(content)
   * @added v0.1.0
   * @updated v0.2.0
   * @param content string|function|Element
   * @returns this
   * @throws TypeError if `content` is not a valid [String] or [Function] or [Element] extending object
   * @description Appends `content` to the end of the content array.
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
  
  /*
   * @signature text(text)
   * @added v0.1.0
   * @updated v0.2.0
   * @param text string
   * @returns this
   * @throws TypeError if `text` is not a valid [string]
   * @description Appends plain `text` to the end of the content array.
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

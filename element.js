/** Require local modules */
const child = require('./child');

/**
 * @class Element
 * @extends Child
 * @added v0.1.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML elements.
 */
class Element extends child.Child {
  /**
   * @signature new Element([data])
   * @added v0.1.0
   * @param data Object
   * @returns Element
   * @description Returns a new [Element] instance, initializing with any key/value pairs provided in `data` with keys 
   * that match setter method names.
   */
  constructor(data = {}) {
    super(data);
    
    this.attributes(data.attributes || []);
    this.classes(data.classes || '');
    this.id(data.id || '');
    this.style(data.style || '');
    this.tag(data.tag || '');
    this.title(data.title || '');
  }
  
  /**
   * Helper method for adding a class.
   * @signature addClass(string) Add class (string) to classes
   * @return This object for call chaining
   */
  addClass(arg1) {
    const classes = arg1.split(' ');
    
    /** Add class to classes if it doesn't already exist */
    classes.forEach((classx) => {
      if ( typeof arg1 == 'string' ) {
        if ( !this._classes.split(' ').includes(classx) )
          this._classes = this._classes.concat(` ${classx}`).trim(); 
      }
      
      /** Handle errors */
      else {
        throw new TypeError(`${this.constructor.name}.addClass(): Invalid signature (${typeof arg1}).`);
      }
    });
                    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Attributes getter/setter.
   * @signature attributes() Get the attributes
   * @signature attributes(object[Array]) Set the attributes as (object[Array])
   * @return This object for call chaining
   */
  attributes(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._attributes;
    
    /** Setter */
    else if ( typeof arg1 == 'object' && arg1.constructor.name == 'Array' )
      this._attributes = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`${this.constructor.name}.attributes(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Helper method for getting/setting attributes.
   * @signature attr(string) Get the attribute with key (string)
   * @signature attr(string, string|number|boolean) Set the attribute with key (string) as (string|number|boolean)
   * @return This object for call chaining
   */
  attr(arg1, arg2) {
    /** Getter */
    if ( arg2 === undefined ) {
      return this._attributes.find((attribute) => {
        return attribute.key == arg1;
      });
    }
    
    /** Setter */
    else if ( typeof arg1 == 'string' && ( typeof arg2 == 'string' || typeof arg2 == 'number' || typeof arg2 == 'boolean' ) ) {
      this._attributes.push({ key: arg1, val: arg2 });
    }
    
    /** Handle errors */
    else {
      throw new TypeError(`${this.constructor.name}.attr(): Invalid signature (${typeof arg1}, ${typeof arg2}).`);
    }
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Classes getter/setter.
   * @signature classes() Get the classes
   * @signature classes(string) Set the classes as (string)
   * @return This object for call chaining
   */
  classes(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._classes;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._classes = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`${this.constructor.name}.classes(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * ID getter/setter.
   * @signature id() Get the ID
   * @signature id(string) Set the ID as (string)
   * @return This object for call chaining
   */
  id(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._id;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._id = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`${this.constructor.name}.id(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Helper method for removing a class.
   * @signature removeClass(string) Remove class (string) from classes
   * @return This object for call chaining
   */
  removeClass(arg1) {
    /** Remove class from classes if it doesn't already exist */
    if ( typeof arg1 == 'string' ) {
      if ( this._classes.split(' ').includes(arg1) )
        this._classes = this._classes.replace(new RegExp(`\\b${arg1}\\b`, 'gi'), ' ').replace(/[\s]+/, ' ').trim(); 
    }
    
    /** Handle errors */
    else {
      throw new TypeError(`${this.constructor.name}.removeClass(): Invalid signature (${typeof arg1}).`);
    }
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Style getter/setter.
   * @signature style() Get the style
   * @signature style(string) Set the style as (string)
   * @return This object for call chaining
   */
  style(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._style;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._style = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`${this.constructor.name}.style(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Tag getter/setter.
   * @signature tag() Get the tag
   * @signature tag(string) Set the tag as (string)
   * @return This object for call chaining
   */
  tag(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._tag;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._tag = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`${this.constructor.name}.tag(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Title getter/setter.
   * @signature title() Get the title
   * @signature title(string) Set the title as (string)
   * @return This object for call chaining
   */
  title(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._title;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._title = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`${this.constructor.name}.title(): Invalid signature (${typeof arg1}).`);
    
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
    if ( this.classes().length > 0 )
      this.attr('class', this.classes());
  
    if ( this.id().length > 0 )
      this.attr('id', this.id());
    
    if ( this.style().length > 0 )
      this.attr('style', this.style());
    
    if ( this.title().length > 0 )
      this.attr('title', this.title());
    
    let markup = ' '.repeat(indent) + `<${this.tag()}`;
    
    this.attributes().forEach((attribute) => {
      if ( typeof attribute.val == 'boolean' && attribute.val )
        markup += ` ${attribute.key}`;
      else
        markup += ` ${attribute.key}='${attribute.val}'`;
    });
    
    markup += `>`;
    
    if ( this.constructor.name != 'TextArea' && this.constructor.name != 'PreformattedText' )
      markup += `\n`;
    
    return markup;
  }
}

module.exports.Element = Element;
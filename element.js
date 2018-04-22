/** Require local modules */
const child = require('./child');

/**
 * @class ezhtml.Element
 * @extends Child
 * @added v0.1.0
 * @updated v0.2.0
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
    this.lang(data.lang || '');
    this.style(data.style || '');
    this.tag(data.tag || '');
    this.title(data.title || '');
  }
  
  /**
   * @signature addClass(class)
   * @added v0.1.0
   * @updated v0.2.0
   * @param class string
   * @returns this
   * @description Adds a new CSS class to the element.
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
      else if ( arg1 === null ) {
        throw new TypeError(`${this.constructor.name}.open(null): Invalid signature.`);
      } else {
        throw new TypeError(`${this.constructor.name}.open(${arg1.constructor.name}): Invalid signature.`);
      }
    });
                    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * @signature attributes()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns Array
   * @description Gets the [Array] of key/value pairs that comproises the attributes of this element.
   *
   * @signature attributes(attributeArray)
   * @added v0.1.0
   * @updated v0.2.0
   * @param attributeArray Array
   * @returns this
   * @throws TypeError if `attributeArray` is not a valid [Array]
   * @description Sets the [Array] of key/value pairs that comproises the attributes of this element.
   */
  attributes(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._attributes;

    /** Setter */
    else if ( typeof arg1 == 'object' && arg1.constructor.name == 'Array' )
      this._attributes = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.attributes(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.attributes(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }
  
  /**
   * @signature attr(key, value)
   * @added v0.1.0
   * @updated v0.2.0
   * @param key string
   * @param value string|number|boolean
   * @returns this
   * @description Add a new key/value attribute to the element.
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
    else if ( arg1 === null && arg2 === null ) {
      throw new TypeError(`${this.constructor.name}.attributes(null, null): Invalid signature.`);
    } else if ( arg2 === null ) {
      throw new TypeError(`${this.constructor.name}.attributes(${arg1.constructor.name}, null): Invalid signature.`);
    } else {
      throw new TypeError(`${this.constructor.name}.attributes(${arg1.constructor.name}, ${arg2.constructor.name}): Invalid signature.`);
    }
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * @signature classes()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns Array
   * @description Gets the [Array] of CSS classes applied to this element.
   *
   * @signature classes(classArray)
   * @added v0.1.0
   * @updated v0.2.0
   * @param classArray Array
   * @returns this
   * @throws TypeError if `classArray` is not a valid [Array]
   * @description Sets the [Array] of CSS classes applied to this element.
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
   * @signature id()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the id attribute of the element.
   *
   * @signature id(elementId)
   * @added v0.1.0
   * @updated v0.2.0
   * @param elementId string
   * @returns this
   * @throws TypeError if `elementId` is not a valid [string]
   * @description Sets the id attribute of the element.
   */
  id(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._id;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._id = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.id(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.id(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }
  
  /**
   * @signature lang()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the primary language of the element’s contents and for any of the element’s attributes 
   * that contain text. Its value must be a valid BCP 47 language tag, or the empty string.
   *
   * @signature lang(tag)
   * @added v0.1.0
   * @updated v0.2.0
   * @param tag string
   * @returns this
   * @throws TypeError if `tag` is not a valid [string]
   * @description Sets the primary language of the element’s contents and for any of the element’s attributes 
   * that contain text. Its value must be a valid BCP 47 language tag, or the empty string.
   */
  lang(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._lang;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._lang= arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.lang(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.lang(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }
  
  /**
   * @signature removeClass(class)
   * @added v0.1.0
   * @updated v0.2.0
   * @param class string
   * @returns this
   * @description Removes a CSS class from the element.
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
   * @signature style()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the list of styles in the style attribute of the element.
   *
   * @signature style(styleList)
   * @added v0.1.0
   * @updated v0.2.0
   * @param styleList string
   * @returns this
   * @throws TypeError if `styleList` is not a valid [string]
   * @description Sets the list of styles in the style attribute of the element.
   */
  style(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._style;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._style = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.style(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.style(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature tag()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the tag attribute of the element.
   *
   * @signature tag(tag)
   * @added v0.1.0
   * @updated v0.2.0
   * @param tag string
   * @returns this
   * @throws TypeError if `tag` is not a valid [string]
   * @description Sets the tag attribute of the element.
   */
  tag(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._tag;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._tag = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.tag(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.tag(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature title()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the title attribute of the element.
   *
   * @signature title(text)
   * @added v0.1.0
   * @updated v0.2.0
   * @param text string
   * @returns this
   * @throws TypeError if `text` is not a valid [string]
   * @description Sets the title attribute of the element.
   */
  title(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._title;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._title = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.title(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.title(${arg1.constructor.name}): Invalid signature.`);

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
    
    if ( this.lang().length > 0 )
      this.attr('lang', this.lang());
    
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
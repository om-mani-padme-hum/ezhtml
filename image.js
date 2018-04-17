/** Require local modules */
const element = require('./element');

/**
 * @class Image
 * @extends Element
 * @added v0.1.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML image elements.
 */
class Image extends element.Element {
  /**
   * @signature new Image([data])
   * @added v0.1.0
   * @param data Object
   * @returns Image
   * @description Returns a new [Image] instance, initializing with any key/value pairs provided in `data` with keys 
   * that match setter method names.
   */
  constructor(data = {}) {
    super(data);
    
    this.alt(data.alt || '');
    this.crossorigin(data.crossorigin || '');
    this.height(data.src || 0);
    this.ismap(data.ismap || false);
    this.longdesc(data.longdesc || '');
    this.sizes(data.sizes || '');
    this.src(data.src || '');
    this.srcset(data.srcset || '');
    this.usemap(data.usemap || '');
    this.width(data.src || 0);
  }
  
  /**
   * Alternate text getter/setter.
   * @signature alt() Get the alternate text
   * @signature alt(string) Set the alternate text as (string)
   * @return This object for call chaining
   */
  alt(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._alt;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._alt = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Image.alt(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Cross origin getter/setter.
   * @signature crossorigin() Get the cross origin
   * @signature crossorigin(string) Set the cross origin as (string)
   * @return This object for call chaining
   */
  crossorigin(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._crossorigin;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._crossorigin = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Image.crossorigin(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Height getter/setter.
   * @signature height() Get the height
   * @signature height(number) Set the height as (number)
   * @return This object for call chaining
   */
  height(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._height;
    
    /** Setter */
    else if ( typeof arg1 == 'number' )
      this._height = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Image.height(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Is map boolean getter/setter.
   * @signature ismap() Get the is map boolean
   * @signature ismap(boolean) Set the is map boolean as (boolean)
   * @return This object for call chaining
   */
  ismap(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._ismap;
    
    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._ismap = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Image.ismap(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Long description getter/setter.
   * @signature longdesc() Get the long description
   * @signature longdesc(string) Set the long description as (string)
   * @return This object for call chaining
   */
  longdesc(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._longdesc;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._longdesc = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Image.longdesc(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Sizes getter/setter.
   * @signature sizes() Get the sizes
   * @signature sizes(string) Set the sizes as (string)
   * @return This object for call chaining
   */
  sizes(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._sizes;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._sizes = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Image.sizes(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Source getter/setter.
   * @signature src() Get the source
   * @signature src(string) Set the source as (string)
   * @return This object for call chaining
   */
  src(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._src;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._src = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Image.src(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Source set getter/setter.
   * @signature srcset() Get the source set
   * @signature srcset(string) Set the source set as (string)
   * @return This object for call chaining
   */
  srcset(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._srcset;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._srcset = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Image.srcset(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Use map getter/setter.
   * @signature usemap() Get the use map
   * @signature usemap(string) Set the use map as (string)
   * @return This object for call chaining
   */
  usemap(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._usemap;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._usemap = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Image.usemap(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Width getter/setter.
   * @signature width() Get the width
   * @signature width(number) Set the width as (number)
   * @return This object for call chaining
   */
  width(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._width;
    
    /** Setter */
    else if ( typeof arg1 == 'number' )
      this._width = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Image.width(): Invalid signature (${typeof arg1}).`);
    
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
  render(indent) {
    if ( this.alt().length > 0 )
      this.attr('alt', this.alt());
    
    if ( this.crossorigin().length > 0 )
      this.attr('crossorigin', this.crossorigin());
    
    if ( this.longdesc().length > 0 )
      this.attr('longdesc', this.longdesc());
    
    if ( this.sizes().length > 0 )
      this.attr('sizes', this.sizes());
    
    if ( this.src().length > 0 )
      this.attr('src', this.src());
    
    if ( this.srcset().length > 0 )
      this.attr('srcset', this.srcset());
    
    if ( this.width() > 0 )
      this.attr('width', this.width());
    
    if ( this.height() > 0 )
      this.attr('height', this.height());
    
    if ( this.usemap().length > 0 )
      this.attr('usemap', this.usemap());
    
    if ( this.ismap() )
      this.attr('ismap', true);
    
    this.tag('img');
    
    return super.render(indent);
  }
}

module.exports.Image = Image;

/** Require local modules */
const element = require('./element');

/**
 * @class Area
 * @extends Element
 * @added v0.1.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML area elements.
 */
class Area extends element.Element {
  /**
   * @signature new Area([data])
   * @added v0.1.0
   * @param data Object
   * @returns Area
   * @description Returns a new [Area] instance, initializing with any key/value pairs provided in `data` with keys 
   * that match setter method names.
   */
  constructor(data = {}) {
    super(data);
    
    this.alt(data.alt || '');
    this.coords(data.coords || '');
    this.download(data.download || '');
    this.href(data.href || '');
    this.hreflang(data.hreflang || '');
    this.media(data.media || '');
    this.rel(data.rel || '');
    this.shape(data.shape || '');
    this.target(data.target || '');
    this.type(data.type || '');
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
      throw new TypeError(`Area.alt(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Coordinates getter/setter.
   * @signature coords() Get the coordinates
   * @signature coords(string) Set the coordinates as (string)
   * @return This object for call chaining
   */
  coords(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._coords;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._coords = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Area.coords(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Download filename getter/setter.
   * @signature download() Get the download filename
   * @signature download(string) Set the download filename as (string)
   * @return This object for call chaining
   */
  download(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._download;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._download = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Area.download(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Hyperlink reference getter/setter.
   * @signature href() Get the hyperlink reference
   * @signature href(string) Set the hyperlink reference as (string)
   * @return This object for call chaining
   */
  href(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._href;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._href = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Area.href(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Hyperlink language getter/setter.
   * @signature hreflang() Get the hyperlink language
   * @signature hreflang(string) Set the hyperlink language as (string)
   * @return This object for call chaining
   */
  hreflang(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._hreflang;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._hreflang = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Area.hreflang(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Media getter/setter.
   * @signature media() Get the media
   * @signature media(string) Set the media as (string)
   * @return This object for call chaining
   */
  media(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._media;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._media = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Area.media(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Relationship getter/setter.
   * @signature rel() Get the relationship
   * @signature rel(string) Set the relationship as (string)
   * @return This object for call chaining
   */
  rel(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._rel;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._rel = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Area.rel(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Shape getter/setter.
   * @signature shape() Get the shape
   * @signature shape(string) Set the shape as (string)
   * @return This object for call chaining
   */
  shape(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._shape;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._shape = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Area.shape(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Target getter/setter.
   * @signature target() Get the target
   * @signature target(string) Set the target as (string)
   * @return This object for call chaining
   */
  target(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._target;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._target = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Area.target(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Type getter/setter.
   * @signature type() Get the type
   * @signature type(string) Set the type as (string)
   * @return This object for call chaining
   */
  type(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._type;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._type = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Area.type(): Invalid signature (${typeof arg1}).`);
    
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
    
    if ( this.coords().length > 0 )
      this.attr('coords', this.coords());
    
    if ( this.download().length > 0 )
      this.attr('download', this.download());
    
    if ( this.href().length > 0 )
      this.attr('href', this.href());
    
    if ( this.hreflang().length > 0 )
      this.attr('hreflang', this.hreflang());
    
    if ( this.media().length > 0 )
      this.attr('media', this.media());
    
    if ( this.rel().length > 0 )
      this.attr('rel', this.rel());
    
    if ( this.shape().length > 0 )
      this.attr('shape', this.shape());
    
    if ( this.target().length > 0 )
      this.attr('target', this.target());
    
    if ( this.type().length > 0 )
      this.attr('type', this.type());
    
    this.tag('area');
    
    return super.render(indent);
  }
}

module.exports.Area = Area;

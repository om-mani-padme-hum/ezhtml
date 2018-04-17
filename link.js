/** Require local modules */
const element = require('./element');

/**
 * @class Link
 * @extends Element
 * @added v0.1.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML link elements.
 */
class Link extends element.Element {
  /**
   * @signature new Link([data])
   * @added v0.1.0
   * @param data Object
   * @returns Link
   * @description Returns a new [Link] instance, initializing with any key/value pairs provided in `data` with keys 
   * that match setter method names.
   */
  constructor(data = {}) {
    super(data);
    
    this.crossorigin(data.crossorigin || '');
    this.href(data.href || '');
    this.hreflang(data.hreflang || '');
    this.media(data.media || '');
    this.rel(data.rel || '');
    this.sizes(data.sizes || '');
    this.type(data.type || '');
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
      throw new TypeError(`Link.crossorigin(): Invalid signature (${typeof arg1}).`);
    
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
      throw new TypeError(`Link.href(): Invalid signature (${typeof arg1}).`);
    
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
      throw new TypeError(`Link.hreflang(): Invalid signature (${typeof arg1}).`);
    
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
      throw new TypeError(`Link.media(): Invalid signature (${typeof arg1}).`);
    
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
      throw new TypeError(`Link.rel(): Invalid signature (${typeof arg1}).`);
    
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
      throw new TypeError(`Link.sizes(): Invalid signature (${typeof arg1}).`);
    
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
      throw new TypeError(`Link.type(): Invalid signature (${typeof arg1}).`);
    
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
    if ( this.crossorigin().length > 0 )
      this.attr('crossorigin', this.crossorigin());
    
    if ( this.href().length > 0 )
      this.attr('href', this.href());
    
    if ( this.hreflang().length > 0 )
      this.attr('hreflang', this.hreflang());
    
    if ( this.media().length > 0 )
      this.attr('media', this.media());
    
    if ( this.rel().length > 0 )
      this.attr('rel', this.rel());
    
    if ( this.sizes().length > 0 )
      this.attr('sizes', this.sizes());
    
    if ( this.type().length > 0 )
      this.attr('type', this.type());
    
    this.tag('link');
    
    return super.render(indent);
  }
}

module.exports.Link = Link;

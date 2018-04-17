/** Require local modules */
const element = require('./element');

/**
 * @class Source
 * @extends Element
 * @added v0.1.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML source elements.
 */
class Source extends element.Element {
  /**
   * @signature new Source([data])
   * @added v0.1.0
   * @param data Object
   * @returns Source
   * @description Returns a new [Source] instance, initializing with any key/value pairs provided in `data` with keys 
   * that match setter method names.
   */
  constructor(data = {}) {
    super(data);
    
    this.media(data.media || '');
    this.sizes(data.sizes || '');
    this.src(data.src || '');
    this.srcset(data.srcset || '');
    this.type(data.type || '');
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
      throw new TypeError(`Source.media(): Invalid signature (${typeof arg1}).`);
    
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
      throw new TypeError(`Source.sizes(): Invalid signature (${typeof arg1}).`);
    
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
      throw new TypeError(`Source.src(): Invalid signature (${typeof arg1}).`);
    
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
      throw new TypeError(`Source.srcset(): Invalid signature (${typeof arg1}).`);
    
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
      throw new TypeError(`Source.type(): Invalid signature (${typeof arg1}).`);
    
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
    if ( this.media().length > 0 )
      this.attr('media', this.media());
    
    if ( this.sizes().length > 0 )
      this.attr('sizes', this.sizes());
    
    if ( this.src().length > 0 )
      this.attr('src', this.src());
    
    if ( this.srcset().length > 0 )
      this.attr('srcset', this.srcset());
    
    if ( this.type().length > 0 )
      this.attr('type', this.type());
    
    this.tag('source');
    
    return super.render(indent);
  }
}

module.exports.Source = Source;

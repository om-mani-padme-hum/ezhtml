/** Require local modules */
const element = require('./element');

/**
 * @class Track
 * @extends Element
 * @added v0.1.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML track elements.
 */
class Track extends element.Element {
  /**
   * @signature new Track([data])
   * @added v0.1.0
   * @param data Object
   * @returns Track
   * @description Returns a new [Track] instance, initializing with any key/value pairs provided in `data` with keys 
   * that match setter method names.
   */
  constructor(data = {}) {
    super(data);
    
    this.default(data.default || false);
    this.kind(data.kind || '');
    this.label(data.label || '');
    this.src(data.src || '');
    this.srclang(data.srclang || '');
  }
  
  /**
   * Default boolean getter/setter.
   * @signature default() Get the default boolean
   * @signature default(boolean) Set the default boolean as (boolean)
   * @return This object for call chaining
   */
  default(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._default;
    
    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._default = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Track.default(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Kind getter/setter.
   * @signature kind() Get the kind
   * @signature kind(string) Set the kind as (string)
   * @return This object for call chaining
   */
  kind(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._kind;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._kind = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Track.kind(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Label getter/setter.
   * @signature label() Get the label
   * @signature label(string) Set the label as (string)
   * @return This object for call chaining
   */
  label(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._label;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._label = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Track.label(): Invalid signature (${typeof arg1}).`);
    
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
      throw new TypeError(`Track.src(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Source language getter/setter.
   * @signature srclang() Get the source language
   * @signature srclang(string) Set the source language as (string)
   * @return This object for call chaining
   */
  srclang(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._srclang;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._srclang = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Track.srclang(): Invalid signature (${typeof arg1}).`);
    
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
    if ( this.kind().length > 0 )
      this.attr('kind', this.kind());
    
    if ( this.sizes().length > 0 )
      this.attr('sizes', this.sizes());
    
    if ( this.src().length > 0 )
      this.attr('src', this.src());
    
    if ( this.srclang().length > 0 )
      this.attr('srclang', this.srclang());
    
    if ( this.default() )
      this.attr('default', true);
    
    this.tag('track');
    
    return super.render(indent);
  }
}

module.exports.Track = Track;

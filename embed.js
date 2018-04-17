/** Require local modules */
const element = require('./element');

/**
 * @class Embed
 * @extends ContainerElement
 * @added v0.1.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML embed elements.
 */
class Embed extends element.Element {
  /**
   * @signature new Embed([data])
   * @added v0.1.0
   * @param data Object
   * @returns Embed
   * @description Returns a new [Embed] instance, initializing with any key/value pairs provided in `data` with keys 
   * that match setter method names.
   */
  constructor(data = {}) {
    super(data);
    
    this.height(data.height || 0);
    this.src(data.src || '');
    this.type(data.type || '');
    this.width(data.width || 0);
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
      throw new TypeError(`Embed.height(): Invalid signature (${typeof arg1}).`);
    
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
      throw new TypeError(`Embed.src(): Invalid signature (${typeof arg1}).`);
    
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
      throw new TypeError(`Embed.type(): Invalid signature (${typeof arg1}).`);
    
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
      throw new TypeError(`Embed.width(): Invalid signature (${typeof arg1}).`);
    
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
    if ( this.height() > 0 )
      this.attr('height', this.height());
    
    if ( this.src().length > 0 )
      this.attr('src', this.src());
    
    if ( this.type().length > 0 )
      this.attr('type', this.type());
    
    if ( this.width() > 0 )
      this.attr('width', this.width());
    
    this.tag('embed');
    
    return super.render(indent);
  }
}

module.exports.Embed = Embed;

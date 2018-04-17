/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class Style
 * @extends ContainerElement
 * @added v0.1.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML style elements.
 */
class Style extends containerElement.ContainerElement {
  /**
   * @signature new Style([data])
   * @added v0.1.0
   * @param data Object
   * @returns Style
   * @description Returns a new [Style] instance, initializing with any key/value pairs provided in `data` with keys 
   * that match setter method names.
   */
  constructor(data = {}) {    
    super(data);
    
    this.allowedContent(['Text']);
    this.media(data.media || '');
    this.scoped(data.scoped || false);
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
      throw new TypeError(`Style.media(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Scoped boolean getter/setter.
   * @signature scoped() Get the scoped boolean
   * @signature scoped(boolean) Set the scoped boolean as (boolean)
   * @return This object for call chaining
   */
  scoped(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._scoped;
    
    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._scoped = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Style.scoped(): Invalid signature (${typeof arg1}).`);
    
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
      throw new TypeError(`Style.type(): Invalid signature (${typeof arg1}).`);
    
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
    
    if ( this.type().length > 0 )
      this.attr('type', this.type());

    if ( this.scoped() )
      this.attr('scoped', true);
    
    this.tag('style');
    
    return super.render(indent);
  }
}

module.exports.Style = Style;

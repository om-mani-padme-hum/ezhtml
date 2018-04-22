/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class ezhtml.Style
 * @extends ContainerElement
 * @added v0.1.0
 * @updated v0.2.0
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
   * @signature media()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the media device that the linked document is optimized for.
   *
   * @signature media(device)
   * @added v0.1.0
   * @updated v0.2.0
   * @param device string
   * @returns this
   * @throws TypeError if `device` is not a valid [string]
   * @description Sets the media device that the linked document is optimized for.
   */
  media(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._media;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._media = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.media(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.media(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature scoped()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns boolean
   * @description Gets a boolean indicating whether the styles only apply to this element's parent element and that 
   * element's child elements (not the entire document).  At the time of v0.2.0, this is only supported by Firefox.
   *
   * @signature scoped(flag)
   * @added v0.1.0
   * @updated v0.2.0
   * @param flag boolean
   * @returns this
   * @throws TypeError if `flag` is not a valid [boolean]
   * @description Sets a boolean indicating whether the styles only apply to this element's parent element and that 
   * element's child elements (not the entire document).  At the time of v0.2.0, this is only supported by Firefox.
   */
  scoped(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._scoped;

    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._scoped = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.scoped(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.scoped(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature type()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the media type of the style.
   *
   * @signature type(type)
   * @added v0.1.0
   * @updated v0.2.0
   * @param type string
   * @returns this
   * @throws TypeError if `type` is not a valid [string]
   * @description Sets the media type of the style.
   */
  type(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._type;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._type = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.type(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.type(${arg1.constructor.name}): Invalid signature.`);

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

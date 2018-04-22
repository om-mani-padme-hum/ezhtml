/** Require local modules */
const element = require('./element');

/**
 * @class ezhtml.Link
 * @extends Element
 * @added v0.1.0
 * @updated v0.2.0
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
   * @signature crossorigin()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets whether to allow links from third-party sites that allow cross-origin access, can be `anonymous` or `use-credentials`.
   *
   * @signature crossorigin(type)
   * @added v0.1.0
   * @updated v0.2.0
   * @param type string
   * @returns this
   * @throws TypeError if `type` is not a valid [string]
   * @description Sets whether to allow links from third-party sites that allow cross-origin access, can be `anonymous` or `use-credentials`.
   */
  crossorigin(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._crossorigin;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._crossorigin = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.crossorigin(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.crossorigin(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature href()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the URL of the linked document.
   *
   * @signature href(url)
   * @added v0.1.0
   * @updated v0.2.0
   * @param url string
   * @returns this
   * @throws TypeError if `url` is not a valid [string]
   * @description Sets the URL of the linked document.
   */
  href(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._href;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._href = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.href(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.href(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature hreflang()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the language of the linked document.
   *
   * @signature hreflang(lang)
   * @added v0.1.0
   * @updated v0.2.0
   * @param lang string
   * @returns this
   * @throws TypeError if `lang` is not a valid [string]
   * @description Sets the language of the linked document.
   */
  hreflang(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._hreflang;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._hreflang = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.hreflang(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.hreflang(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
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
   * @signature rel()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the relationship between the current document and the linked document.  This value is equired.
   *
   * @signature rel(relationship)
   * @added v0.1.0
   * @updated v0.2.0
   * @param relationship string
   * @returns this
   * @throws TypeError if `relationship` is not a valid [string]
   * @description Sets the relationship between the current document and the linked document.  This value is equired.
   */
  rel(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._rel;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._rel = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.rel(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.rel(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature sizes()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the size of the icon, only for rel `icon`.
   *
   * @signature sizes(size)
   * @added v0.1.0
   * @updated v0.2.0
   * @param size string
   * @returns this
   * @throws TypeError if `size` is not a valid [string]
   * @description Sets the size of the icon, only for rel `icon`.
   */
  sizes(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._sizes;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._sizes = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.sizes(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.sizes(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature type()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the media type of the linked document.
   *
   * @signature type(media)
   * @added v0.1.0
   * @updated v0.2.0
   * @param media string
   * @returns this
   * @throws TypeError if `media` is not a valid [string]
   * @description Sets the media type of the linked document.
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

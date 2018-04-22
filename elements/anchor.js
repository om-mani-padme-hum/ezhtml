/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class ezhtml.Anchor
 * @extends ContainerElement
 * @added v0.1.0
 * @updated v0.2.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML anchor elements.
 */
class Anchor extends containerElement.ContainerElement {
  /**
   * @signature new Anchor([data])
   * @added v0.1.0
   * @param data Object
   * @returns Anchor
   * @description Returns a new [Anchor] instance, initializing with any key/value pairs provided in `data` with keys 
   * that match setter method names.
   */
  constructor(data = {}) {
    super(data);
    
    this.download(data.download || '');
    this.href(data.href || '');
    this.hreflang(data.hreflang || '');
    this.media(data.media || '');
    this.rel(data.rel || '');
    this.target(data.target || '');
    this.type(data.type || '');
  }
  
  /**
   * @signature download()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the filename of the file that should be downloaded upon clicking this link.
   *
   * @signature download(filename)
   * @added v0.1.0
   * @updated v0.2.0
   * @param filename string
   * @returns this
   * @throws TypeError if `filename` is not a valid [string]
   * @description Sets the filename of the file that should be downloaded upon clicking this link.
   */
  download(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._download;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._download = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.download(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.download(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature href()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the url the link goes to.
   *
   * @signature href(url)
   * @added v0.1.0
   * @updated v0.2.0
   * @param url string
   * @returns this
   * @throws TypeError if `url` is not a valid [string]
   * @description Sets the url the link goes to.
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
   * @description Gets the relationship between the current document and the linked document.
   *
   * @signature rel(relationship)
   * @added v0.1.0
   * @updated v0.2.0
   * @param relationship string
   * @returns this
   * @throws TypeError if `relationship` is not a valid [string]
   * @description Sets the relationship between the current document and the linked document.
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
   * @signature target()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the method used to open the linked document.
   *
   * @signature target(method)
   * @added v0.1.0
   * @updated v0.2.0
   * @param method string
   * @returns this
   * @throws TypeError if `method` is not a valid [string]
   * @description Sets the method used to open the linked document.
   */
  target(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._target;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._target = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.target(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.target(${arg1.constructor.name}): Invalid signature.`);

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
    
    if ( this.target().length > 0 )
      this.attr('target', this.target());
    
    if ( this.type().length > 0 )
      this.attr('type', this.type());

    this.tag('a');
    
    return super.render(indent);
  }
}

module.exports.Anchor = Anchor;

/** Require local modules */
const element = require('./element');

/**
 * @class ezhtml.Source
 * @extends Element
 * @added v0.1.0
 * @added v0.2.0
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
   * @signature media()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets a valid media query that would normally be defined in a CSS.
   *
   * @signature media(query)
   * @added v0.1.0
   * @updated v0.2.0
   * @param query string
   * @returns this
   * @throws TypeError if `query` is not a valid [string]
   * @description Sets a valid media query that would normally be defined in a CSS.
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
   * @signature sizes()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the image sizes for different page layouts.
   *
   * @signature sizes(sizes)
   * @added v0.1.0
   * @updated v0.2.0
   * @param sizes string
   * @returns this
   * @throws TypeError if `sizes` is not a valid [string]
   * @description Sets the image sizes for different page layouts.
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
   * @signature src()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the URL of the media file, required when used in an [Audio] or [Source] element.
   *
   * @signature src(url)
   * @added v0.1.0
   * @updated v0.2.0
   * @param url string
   * @returns this
   * @throws TypeError if `url` is not a valid [string]
   * @description Sets the URL of the media file, required when used in an [Audio] or [Source] element.
   */
  src(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._src;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._src = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.src(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.src(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature srcset()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the URLs of the image to use in different situations.
   *
   * @signature srcset(urls)
   * @added v0.1.0
   * @updated v0.2.0
   * @param urls string
   * @returns this
   * @throws TypeError if `urls` is not a valid [string]
   * @description Sets the URLs of the image to use in different situations.
   */
  srcset(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._srcset;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._srcset = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.srcset(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.srcset(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature type()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the MIME-type of the resource.
   *
   * @signature type(type)
   * @added v0.1.0
   * @updated v0.2.0
   * @param type string
   * @returns this
   * @throws TypeError if `type` is not a valid [string]
   * @description Sets the MIME-type of the resource.
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

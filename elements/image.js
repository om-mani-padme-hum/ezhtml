/** Require local modules */
const element = require('./element');

/**
 * @class ezhtml.Image
 * @extends Element
 * @added v0.1.0
 * @updated v0.2.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML image elements.
 */
class Image extends element.Element {
  /**
   * @signature new Image([data])
   * @added v0.1.0
   * @param data Object
   * @returns Image
   * @description Returns a new [Image] instance, initializing with any key/value pairs provided in `data` with keys 
   * that match setter method names.
   */
  constructor(data = {}) {
    super(data);
    
    this.alt(data.alt || '');
    this.crossorigin(data.crossorigin || '');
    this.height(data.src || 0);
    this.ismap(data.ismap || false);
    this.longdesc(data.longdesc || '');
    this.sizes(data.sizes || '');
    this.src(data.src || '');
    this.srcset(data.srcset || '');
    this.usemap(data.usemap || '');
    this.width(data.src || 0);
  }
  
  /**
   * @signature alt()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the alternate text for the image.
   *
   * @signature alt(text)
   * @added v0.1.0
   * @updated v0.2.0
   * @param text string
   * @returns this
   * @throws TypeError if `text` is not a valid [string]
   * @description Sets the alternate text for the image.
   */
  alt(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._alt;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._alt = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.alt(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.alt(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature crossorigin()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets whether to allow images from third-party sites that allow cross-origin access to be used with canvas, can be `anonymous` or `use-credentials`.
   *
   * @signature crossorigin(type)
   * @added v0.1.0
   * @updated v0.2.0
   * @param type string
   * @returns this
   * @throws TypeError if `type` is not a valid [string]
   * @description Sets whether to allow images from third-party sites that allow cross-origin access to be used with canvas, can be `anonymous` or `use-credentials`.
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
   * @signature height()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns number
   * @description Gets the height of the image in pixels.
   *
   * @signature height(pixels)
   * @added v0.1.0
   * @updated v0.2.0
   * @param pixels number
   * @returns this
   * @throws TypeError if `pixels` is not a valid [number]
   * @description Sets the height of the image in pixels.
   */
  height(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._height;

    /** Setter */
    else if ( typeof arg1 == 'number' )
      this._height = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.height(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.height(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature ismap()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns boolean
   * @description Gets a boolean indicating whether this is a server-side image map.
   *
   * @signature ismap(flag)
   * @added v0.1.0
   * @updated v0.2.0
   * @param flag boolean
   * @returns this
   * @throws TypeError if `flag` is not a valid [boolean]
   * @description Sets a boolean indicating whether this is a server-side image map.
   */
  ismap(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._ismap;

    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._ismap = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.ismap(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.ismap(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature longdesc()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets a URL to a document with a long description of the image.
   *
   * @signature longdesc(url)
   * @added v0.1.0
   * @updated v0.2.0
   * @param url string
   * @returns this
   * @throws TypeError if `url` is not a valid [string]
   * @description Sets a URL to a document with a long description of the image.
   */
  longdesc(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._longdesc;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._longdesc = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.longdesc(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.longdesc(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature sizes()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets any specific image sizes for different page layouts.
   *
   * @signature sizes(device)
   * @added v0.1.0
   * @updated v0.2.0
   * @param device string
   * @returns this
   * @throws TypeError if `device` is not a valid [string]
   * @description Sets any specific image sizes for different page layouts.
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
   * @description Gets the URL of the image.
   *
   * @signature src(url)
   * @added v0.1.0
   * @updated v0.2.0
   * @param url string
   * @returns this
   * @throws TypeError if `url` is not a valid [string]
   * @description Sets the URL of the image.
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
   * @signature usemap()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the ID of a [Map] element that should be used as a client-side iamge map.
   *
   * @signature usemap(method)
   * @added v0.1.0
   * @updated v0.2.0
   * @param method string
   * @returns this
   * @throws TypeError if `method` is not a valid [string]
   * @description Sets the ID of a [Map] element that should be used as a client-side iamge map.
   */
  usemap(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._usemap;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._usemap = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.usemap(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.usemap(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature width()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns number
   * @description Gets the width of the image in pixels.
   *
   * @signature width(pixels)
   * @added v0.1.0
   * @updated v0.2.0
   * @param pixels number
   * @returns this
   * @throws TypeError if `pixels` is not a valid [number]
   * @description Sets the width of the image in pixels.
   */
  width(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._width;

    /** Setter */
    else if ( typeof arg1 == 'number' )
      this._width = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.width(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.width(${arg1.constructor.name}): Invalid signature.`);

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
    
    if ( this.crossorigin().length > 0 )
      this.attr('crossorigin', this.crossorigin());
    
    if ( this.longdesc().length > 0 )
      this.attr('longdesc', this.longdesc());
    
    if ( this.sizes().length > 0 )
      this.attr('sizes', this.sizes());
    
    if ( this.src().length > 0 )
      this.attr('src', this.src());
    
    if ( this.srcset().length > 0 )
      this.attr('srcset', this.srcset());
    
    if ( this.width() > 0 )
      this.attr('width', this.width());
    
    if ( this.height() > 0 )
      this.attr('height', this.height());
    
    if ( this.usemap().length > 0 )
      this.attr('usemap', this.usemap());
    
    if ( this.ismap() )
      this.attr('ismap', true);
    
    this.tag('img');
    
    return super.render(indent);
  }
}

module.exports.Image = Image;

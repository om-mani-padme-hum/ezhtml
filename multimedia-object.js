/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class ezhtml.MultimediaObject
 * @extends ContainerElement
 * @added v0.1.0
 * @updated v0.2.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML multimedia object elements.
 */
class MultimediaObject extends containerElement.ContainerElement {
  /**
   * @signature new MultimediaObject([data])
   * @added v0.1.0
   * @param data Object
   * @returns MultimediaObject
   * @description Returns a new [MultimediaObject] instance, initializing with any key/value pairs provided in `data` with keys 
   * that match setter method names.
   */
  constructor(data = {}) {
    super(data);
    
    this.allowedContent(['Text', 'Param']);
    this.data(data.data || '');
    this.form(data.form || '');
    this.height(data.height || 0);
    this.name(data.name || '');
    this.type(data.type || '');
    this.usemap(data.usemap || '');
    this.width(data.width || 0);
  }
  
  /**
   * @signature data()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the URL of the resource to be used by the object.
   *
   * @signature data(url)
   * @added v0.1.0
   * @updated v0.2.0
   * @param url string
   * @returns this
   * @throws TypeError if `url` is not a valid [string]
   * @description Sets the URL of the resource to be used by the object.
   */
  data(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._data;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._data = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.data(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.data(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature form()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the id of the form that this object belongs to.
   *
   * @signature form(formId)
   * @added v0.1.0
   * @updated v0.2.0
   * @param formId string
   * @returns this
   * @throws TypeError if `formId` is not a valid [string]
   * @description Sets the id of the form that this object belongs to.
   */
  form(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._form;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._form = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.form(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.form(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature height()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns number
   * @description Gets the height of the object in pixels.
   *
   * @signature height(pixels)
   * @added v0.1.0
   * @updated v0.2.0
   * @param pixels number
   * @returns this
   * @throws TypeError if `pixels` is not a valid [number]
   * @description Sets the height of the object in pixels.
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
   * @signature name()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the name of the object.
   *
   * @signature name(name)
   * @added v0.1.0
   * @updated v0.2.0
   * @param name string
   * @returns this
   * @throws TypeError if `name` is not a valid [string]
   * @description Sets the name of the object.
   */
  name(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._name;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._name = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.name(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.name(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature type()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the media type of data specified in the data attribute.
   *
   * @signature type(type)
   * @added v0.1.0
   * @updated v0.2.0
   * @param type string
   * @returns this
   * @throws TypeError if `type` is not a valid [string]
   * @description Sets the media type of data specified in the data attribute.
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
   * @signature usemap()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the ID of a [Map] element that should be used as a client-side iamge map.
   *
   * @signature usemap(map)
   * @added v0.1.0
   * @updated v0.2.0
   * @param map string
   * @returns this
   * @throws TypeError if `map` is not a valid [string]
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
   * @description Gets the width of the object in pixels.
   *
   * @signature width(pixels)
   * @added v0.1.0
   * @updated v0.2.0
   * @param pixels number
   * @returns this
   * @throws TypeError if `pixels` is not a valid [number]
   * @description Sets the width of the object in pixels.
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
    if ( this.data().length > 0 )
      this.attr('data', this.data());
    
    if ( this.form().length > 0 )
      this.attr('form', this.form());
    
    if ( this.height() > 0 )
      this.attr('height', this.height());
    
    if ( this.name().length > 0 )
      this.attr('name', this.name());
    
    if ( this.type().length > 0 )
      this.attr('type', this.type());
    
    if ( this.usemap().length > 0 )
      this.attr('usemap', this.usemap());
    
    if ( this.width() > 0 )
      this.attr('width', this.width());
    
    this.tag('object');
    
    return super.render(indent);
  }
}

module.exports.MultimediaObject = MultimediaObject;

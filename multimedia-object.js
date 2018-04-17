/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class MultimediaObject
 * @extends ContainerElement
 * @added v0.1.0
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
   * Data getter/setter.
   * @signature data() Get the data
   * @signature data(string) Set the data as (string)
   * @return This object for call chaining
   */
  data(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._data;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._data = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`MultimediaObject.data(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Form getter/setter.
   * @signature form() Get the form
   * @signature form(string) Set the form as (string)
   * @return This object for call chaining
   */
  form(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._form;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._form = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`MultimediaObject.form(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
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
      throw new TypeError(`MultimediaObject.height(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Name getter/setter.
   * @signature name() Get the name
   * @signature name(string) Set the name as (string)
   * @return This object for call chaining
   */
  name(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._name;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._name = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`MultimediaObject.name(): Invalid signature (${typeof arg1}).`);
    
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
      throw new TypeError(`MultimediaObject.type(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Use map name getter/setter.
   * @signature usemap() Get the use map name
   * @signature usemap(string) Set the use map name as (string)
   * @return This object for call chaining
   */
  usemap(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._usemap;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._usemap = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`MultimediaObject.usemap(): Invalid signature (${typeof arg1}).`);
    
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
      throw new TypeError(`MultimediaObject.width(): Invalid signature (${typeof arg1}).`);
    
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

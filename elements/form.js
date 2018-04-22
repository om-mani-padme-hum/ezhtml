/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class ezhtml.Form
 * @extends ContainerElement
 * @added v0.1.0
 * @updated v0.2.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML form elements.
 */
class Form extends containerElement.ContainerElement {
  /**
   * @signature new Form([data])
   * @added v0.1.0
   * @param data Object
   * @returns Form
   * @description Returns a new [Form] instance, initializing with any key/value pairs provided in `data` with keys 
   * that match setter method names.
   */
  constructor(data = {}) {
    super(data);
    
    this.acceptCharset(data.acceptCharset || '');
    this.action(data.action || '');
    this.autocomplete(data.autocomplete || '');
    this.enctype(data.enctype || '');
    this.method(data.method || '');
    this.name(data.name || '');
    this.novalidate(data.novalidate || false);
    this.target(data.target || '');
  }
  
  /**
   * @signature acceptCharset()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the character encodings that are to be used for the form submission.
   *
   * @signature acceptCharset(charset)
   * @added v0.1.0
   * @updated v0.2.0
   * @param charset string
   * @returns this
   * @throws TypeError if `charset` is not a valid [string]
   * @description Sets the character encodings that are to be used for the form submission.
   */
  acceptCharset(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._acceptCharset;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._acceptCharset = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.acceptCharset(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.acceptCharset(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature action()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the URL of the document that this form submit its data to.
   *
   * @signature action(url)
   * @added v0.1.0
   * @updated v0.2.0
   * @param url string
   * @returns this
   * @throws TypeError if `url` is not a valid [string]
   * @description Sets the URL of the document that this form submit its data to.
   */
  action(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._action;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._action = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.action(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.action(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature autocomplete()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets a flag inicating whether the browser should enable autocomplete for this form, can be `on` or `off`.
   *
   * @signature autocomplete(flag)
   * @added v0.1.0
   * @updated v0.2.0
   * @param flag string
   * @returns this
   * @throws TypeError if `flag` is not a valid [string]
   * @description Sets a flag inicating whether the browser should enable autocomplete for this form, can be `on` or `off`.
   */
  autocomplete(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._autocomplete;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._autocomplete = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.autocomplete(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.autocomplete(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature enctype()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the encoding used to send the form data to the server, can be `application/x-www-form-urlencoded`, 
   * `multipart/form-data`, or `text/plain`.
   *
   * @signature enctype(enctype)
   * @added v0.1.0
   * @updated v0.2.0
   * @param enctype string
   * @returns this
   * @throws TypeError if `enctype` is not a valid [string]
   * @description Sets the encoding used to send the form data to the server, can be `application/x-www-form-urlencoded`, 
   * `multipart/form-data`, or `text/plain`.
   */
  enctype(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._enctype;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._enctype = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.enctype(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.enctype(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature method()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the HTTP method used to send the data.
   *
   * @signature method(method)
   * @added v0.1.0
   * @updated v0.2.0
   * @param method string
   * @returns this
   * @throws TypeError if `method` is not a valid [string]
   * @description Sets the HTTP method used to send the data.
   */
  method(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._method;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._method = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.method(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.method(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature name()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the name of the form.
   *
   * @signature name(name)
   * @added v0.1.0
   * @updated v0.2.0
   * @param name string
   * @returns this
   * @throws TypeError if `name` is not a valid [string]
   * @description Sets the name of the form.
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
   * @signature novalidate()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns boolean
   * @description Gets a boolean indicating whether the form-data should not be validated on submission.
   *
   * @signature novalidate(flag)
   * @added v0.1.0
   * @updated v0.2.0
   * @param flag boolean
   * @returns this
   * @throws TypeError if `flag` is not a valid [boolean]
   * @description Sets a boolean indicating whether the form-data should not be validated on submission.
   */
  novalidate(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._novalidate;

    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._novalidate = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.novalidate(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.novalidate(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature target()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets where to display the response after submitting the form, can be `_blank`, `_self`, `_parent`, or `_top`.
   *
   * @signature target(target)
   * @added v0.1.0
   * @updated v0.2.0
   * @param target string
   * @returns this
   * @throws TypeError if `target` is not a valid [string]
   * @description Sets where to display the response after submitting the form, can be `_blank`, `_self`, `_parent`, or `_top`.
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
   * @signature render(indent) 
   * @added v0.1.0
   * @param indent number
   * @return string Rendered HTML
   * @description Render this element with `indent` spaces of indentation before each line.
   */
  render(indent) {
    if ( this.acceptCharset().length > 0 )
      this.attr('accept-charset', this.acceptCharset());
    
    if ( this.action().length > 0 )
      this.attr('action', this.action());
    
    if ( this.autocomplete().length > 0 )
      this.attr('autocomplete', this.autocomplete());
    
    if ( this.enctype().length > 0 )
      this.attr('enctype', this.enctype());
    
    if ( this.method().length > 0 )
      this.attr('method', this.method());
    
    if ( this.name().length > 0 )
      this.attr('name', this.name());
    
    if ( this.target().length > 0 )
      this.attr('target', this.target());

    if ( this.novalidate() )
      this.attr('novalidate', true);
    
    this.tag('form');
    
    return super.render(indent);
  }
}

module.exports.Form = Form;

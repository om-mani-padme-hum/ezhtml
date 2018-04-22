/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class ezhtml.Button
 * @extends ContainerElement
 * @added v0.1.0
 * @updated v0.2.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML button elements.
 */
class Button extends containerElement.ContainerElement {
  /**
   * @signature new Button([data])
   * @added v0.1.0
   * @param data Object
   * @returns Button
   * @description Returns a new [Button] instance, initializing with any key/value pairs provided in `data` with keys 
   * that match setter method names.
   */
  constructor(data = {}) {
    super(data);
    
    this.allowedContent(['Text', 'Span', 'Badge']);
    this.autofocus(data.autofocus || false);
    this.disabled(data.disabled || false);
    this.form(data.form || '');
    this.formaction(data.formaction || '');
    this.formenctype(data.formenctype || '');
    this.formmethod(data.formmethod || '');
    this.formnovalidate(data.formnovalidate || false);
    this.formtarget(data.formtarget || '');
    this.name(data.name || '');
    this.type(data.type || '');
    this.value(data.value || '');
  }
  
  /**
   * @signature autofocus()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns boolean
   * @description Gets a boolean indicating whether the button should automatically get focus when the page loads.
   *
   * @signature autofocus(flag)
   * @added v0.1.0
   * @updated v0.2.0
   * @param flag boolean
   * @returns this
   * @throws TypeError if `flag` is not a valid [boolean]
   * @description Sets a boolean indicating whether the button should automatically get focus when the page loads.
   */
  autofocus(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._autofocus;

    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._autofocus = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.autofocus(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.autofocus(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature disabled()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns boolean
   * @description Gets a boolean indicating whether the button should be disabled.
   *
   * @signature disabled(flag)
   * @added v0.1.0
   * @updated v0.2.0
   * @param flag boolean
   * @returns this
   * @throws TypeError if `flag` is not a valid [boolean]
   * @description Sets a boolean indicating whether the button should be disabled.
   */
  disabled(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._disabled;

    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._disabled = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.disabled(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.disabled(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature form()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the ID of the form that the button belongs to.
   *
   * @signature form(formId)
   * @added v0.1.0
   * @updated v0.2.0
   * @param formId string
   * @returns this
   * @throws TypeError if `formId` is not a valid [string]
   * @description Sets the ID of the form that the button belongs to.
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
   * @signature formaction()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets where to send the form-data when a form is submitted, only for type="submit".
   *
   * @signature formaction(action)
   * @added v0.1.0
   * @updated v0.2.0
   * @param action string
   * @returns this
   * @throws TypeError if `action` is not a valid [string]
   * @description Sets where to send the form-data when a form is submitted, only for type="submit".
   */
  formaction(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._formaction;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._formaction = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.formaction(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.formaction(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature formenctype()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets how the form-data should be encoded before sending it to a server, only for type="submit".
   *
   * @signature formenctype(enctype)
   * @added v0.1.0
   * @updated v0.2.0
   * @param enctype string
   * @returns this
   * @throws TypeError if `enctype` is not a valid [string]
   * @description Sets how the form-data should be encoded before sending it to a server, only for type="submit".
   */
  formenctype(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._formenctype;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._formenctype = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.formenctype(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.formenctype(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature formmethod()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the HTTP method used to send the data, only for type="submit".
   *
   * @signature formmethod(method)
   * @added v0.1.0
   * @updated v0.2.0
   * @param method string
   * @returns this
   * @throws TypeError if `method` is not a valid [string]
   * @description Sets the HTTP method used to send the data, only for type="submit".
   */
  formmethod(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._formmethod;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._formmethod = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.formmethod(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.formmethod(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature formnovalidate()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns boolean
   * @description Gets a boolean indicating whether the form-data should not be validated on submission, only for type="submit".
   *
   * @signature formnovalidate(flag)
   * @added v0.1.0
   * @updated v0.2.0
   * @param flag boolean
   * @returns this
   * @throws TypeError if `flag` is not a valid [boolean]
   * @description Sets a boolean indicating whether the form-data should not be validated on submission, only for type="submit".
   */
  formnovalidate(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._formnovalidate;

    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._formnovalidate = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.formnovalidate(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.formnovalidate(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature formtarget()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets where to display the response after submitting the form, only for type="submit".
   *
   * @signature formtarget(target)
   * @added v0.1.0
   * @updated v0.2.0
   * @param target string
   * @returns this
   * @throws TypeError if `target` is not a valid [string]
   * @description Sets where to display the response after submitting the form, only for type="submit".
   */
  formtarget(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._formtarget;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._formtarget = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.formtarget(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.formtarget(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature name()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the name of the button.
   *
   * @signature name(name)
   * @added v0.1.0
   * @updated v0.2.0
   * @param name string
   * @returns this
   * @throws TypeError if `name` is not a valid [string]
   * @description Sets the name of the button.
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
   * @description Gets the button type.
   *
   * @signature type(flag)
   * @added v0.1.0
   * @updated v0.2.0
   * @param flag string
   * @returns this
   * @throws TypeError if `flag` is not a valid [string]
   * @description Sets the button type.
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
   * @signature value()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the initial button value.
   *
   * @signature value(flag)
   * @added v0.1.0
   * @updated v0.2.0
   * @param flag string
   * @returns this
   * @throws TypeError if `flag` is not a valid [string]
   * @description Sets the initial button value.
   */
  value(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._value;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._value = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.value(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.value(${arg1.constructor.name}): Invalid signature.`);

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
    if ( this.form().length > 0 )
      this.attr('form', this.form());
    
    if ( this.formaction().length > 0 )
      this.attr('formaction', this.formaction());
    
    if ( this.formenctype().length > 0 )
      this.attr('formenctype', this.formenctype());
    
    if ( this.formmethod().length > 0 )
      this.attr('formmethod', this.formmethod());
    
    if ( this.formtarget().length > 0 )
      this.attr('formtarget', this.formtarget());
    
    if ( this.name().length > 0 )
      this.attr('name', this.name());
    
    if ( this.type().length > 0 )
      this.attr('type', this.type());
    
    if ( this.value().length > 0 )
      this.attr('value', this.value());
    
    if ( this.autofocus() )
      this.attr('autofocus', true);
    
    if ( this.disabled() )
      this.attr('disabled', true);
    
    if ( this.formnovalidate() )
      this.attr('formnovalidate', true);
    
    this.tag('button');
    
    return super.render(indent);
  }
}

module.exports.Button = Button;

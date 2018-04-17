/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class Button
 * @extends ContainerElement
 * @added v0.1.0
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
   * Auto-focus boolean getter/setter.
   * @signature autofocus() Get the auto-focus boolean
   * @signature autofocus(boolean) Set the auto-focus boolean as (boolean)
   * @return This object for call chaining
   */
  autofocus(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._autofocus;
    
    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._autofocus = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Button.autofocus(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Disabled boolean getter/setter.
   * @signature disabled() Get the disabled boolean
   * @signature disabled(boolean) Set the disabled boolean as (boolean)
   * @return This object for call chaining
   */
  disabled(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._disabled;
    
    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._disabled = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Button.disabled(): Invalid signature (${typeof arg1}).`);
    
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
      throw new TypeError(`Button.form(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Form action getter/setter.
   * @signature formaction() Get the form action
   * @signature formaction(string) Set the form action as (string)
   * @return This object for call chaining
   */
  formaction(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._formaction;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._formaction = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Button.formaction(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Form encoding type getter/setter.
   * @signature formenctype() Get the form encoding type
   * @signature formenctype(string) Set the form encoding type as (string)
   * @return This object for call chaining
   */
  formenctype(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._formenctype;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._formenctype = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Button.formenctype(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Form method getter/setter.
   * @signature formmethod() Get the form method
   * @signature formmethod(string) Set the form method as (string)
   * @return This object for call chaining
   */
  formmethod(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._formmethod;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._formmethod = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Button.formmethod(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Form no-validate boolean getter/setter.
   * @signature formnovalidate() Get the form no-validate boolean
   * @signature formnovalidate(boolean) Set the form no-validate boolean as (boolean)
   * @return This object for call chaining
   */
  formnovalidate(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._formnovalidate;
    
    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._formnovalidate = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Button.formnovalidate(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Form target getter/setter.
   * @signature formtarget() Get the form target
   * @signature formtarget(string) Set the form target as (string)
   * @return This object for call chaining
   */
  formtarget(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._formtarget;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._formtarget = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Button.formtarget(): Invalid signature (${typeof arg1}).`);
    
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
      throw new TypeError(`Button.name(): Invalid signature (${typeof arg1}).`);
    
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
      throw new TypeError(`Button.type(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Value getter/setter.
   * @signature value() Get the value
   * @signature value(string) Set the value as (string)
   * @return This object for call chaining
   */
  value(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._value;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._value = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Button.value(): Invalid signature (${typeof arg1}).`);
    
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

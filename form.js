/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class Form
 * @extends ContainerElement
 * @added v0.1.0
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
   * Accept charset getter/setter.
   * @signature acceptCharset() Get the accept charset
   * @signature acceptCharset(string) Set the accept charset as (string)
   * @return This object for call chaining
   */
  acceptCharset(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._acceptCharset;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._acceptCharset = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Form.acceptCharset(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Action getter/setter.
   * @signature action() Get the action
   * @signature action(string) Set the action as (string)
   * @return This object for call chaining
   */
  action(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._action;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._action = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Form.action(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Autocomplete setting getter/setter.
   * @signature autocomplete() Get the autocomplete setting
   * @signature autocomplete(string) Set the autocomplete setting as (string)
   * @return This object for call chaining
   */
  autocomplete(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._autocomplete;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._autocomplete = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Form.autocomplete(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Encoding type getter/setter.
   * @signature enctype() Get the encoding type
   * @signature enctype(string) Set the encoding type as (string)
   * @return This object for call chaining
   */
  enctype(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._enctype;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._enctype = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Form.enctype(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Method getter/setter.
   * @signature method() Get the method
   * @signature method(string) Set the method as (string)
   * @return This object for call chaining
   */
  method(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._method;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._method = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Form.method(): Invalid signature (${typeof arg1}).`);
    
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
      throw new TypeError(`Form.name(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * No-validate boolean getter/setter.
   * @signature novalidate() Get the no-validate boolean
   * @signature novalidate(boolean) Set the no-validate boolean as (boolean)
   * @return This object for call chaining
   */
  novalidate(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._novalidate;
    
    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._novalidate = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Form.novalidate(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Target getter/setter.
   * @signature target() Get the target
   * @signature target(string) Set the target as (string)
   * @return This object for call chaining
   */
  target(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._target;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._target = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Form.target(): Invalid signature (${typeof arg1}).`);
    
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

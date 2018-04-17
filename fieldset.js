/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class FieldSet
 * @extends ContainerElement
 * @added v0.1.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML field set elements.
 */
class FieldSet extends containerElement.ContainerElement {
  /**
   * @signature new FieldSet([data])
   * @added v0.1.0
   * @param data Object
   * @returns FieldSet
   * @description Returns a new [FieldSet] instance, initializing with any key/value pairs provided in `data` with keys 
   * that match setter method names.
   */
  constructor(data = {}) {
    super(data);
    
    this.disabled(data.disabled || false);
    this.form(data.form || '');
    this.name(data.name || '');
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
      throw new TypeError(`FieldSet.disabled(): Invalid signature (${typeof arg1}).`);
    
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
      throw new TypeError(`FieldSet.form(): Invalid signature (${typeof arg1}).`);
    
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
      throw new TypeError(`FieldSet.name(): Invalid signature (${typeof arg1}).`);
    
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
    
    if ( this.name().length > 0 )
      this.attr('name', this.name());
    
    if ( this.disabled() )
      this.attr('disabled', true);
    
    this.tag('fieldset');
    
    return super.render(indent);
  }
}

module.exports.FieldSet = FieldSet;

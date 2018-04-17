/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class Option
 * @extends ContainerElement
 * @added v0.1.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML option elements.
 */
class Option extends containerElement.ContainerElement {
  /**
   * @signature new Option([data])
   * @added v0.1.0
   * @param data Object
   * @returns Option
   * @description Returns a new [Option] instance, initializing with any key/value pairs provided in `data` with keys 
   * that match setter method names.
   */
  constructor(data = {}) {
    super(data);
    
    this.allowedContent(['Text']);
    this.disabled(data.disabled || false);
    this.label(data.label || '');
    this.selected(data.selected || false);
    this.value(data.value || '');
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
      throw new TypeError(`Option.disabled(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Label getter/setter.
   * @signature label() Get the label
   * @signature label(string) Set the label as (string)
   * @return This object for call chaining
   */
  label(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._label;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._label = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Option.label(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Selected boolean getter/setter.
   * @signature selected() Get the selected boolean
   * @signature selected(boolean) Set the selected boolean as (boolean)
   * @return This object for call chaining
   */
  selected(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._selected;
    
    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._selected = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Option.selected(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Value getter/setter.
   * @signature value() Get the value
   * @signature value(string|number) Set the value as (string|number)
   * @return This object for call chaining
   */
  value(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._value;
    
    /** Setter */
    else if ( typeof arg1 == 'string' || typeof arg1 == 'number' )
      this._value = arg1.toString(); 
    
    /** Handle errors */
    else
      throw new TypeError(`Option.value(): Invalid signature (${typeof arg1}).`);
    
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
    if ( this.disabled() )
      this.attr('disabled', true);
                  
    if ( this.label().length > 0 )
      this.attr('label', this.label());
    
    if ( this.selected() )
      this.attr('selected', true);
    
    this.attr('value', this.value());

    this.tag('option');
    
    return super.render(indent);
  }
}

module.exports.Option = Option;

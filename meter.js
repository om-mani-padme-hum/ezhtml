/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class Meter
 * @extends ContainerElement
 * @added v0.1.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML meter elements.
 */
class Meter extends containerElement.ContainerElement {
  /**
   * @signature new Meter([data])
   * @added v0.1.0
   * @param data Object
   * @returns Meter
   * @description Returns a new [Meter] instance, initializing with any key/value pairs provided in `data` with keys 
   * that match setter method names.
   */
  constructor(data = {}) {
    super(data);
    
    this.form(data.form || '');
    this.high(data.high || -1);
    this.low(data.low || -1);
    this.max(data.max || -1);
    this.min(data.min || -1);
    this.optimum(data.optimum || -1);
    this.value(data.value || 0);
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
      throw new TypeError(`Meter.form(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * High getter/setter.
   * @signature high() Get the high
   * @signature high(number) Set the high as (number)
   * @return This object for call chaining
   */
  high(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._high;
    
    /** Setter */
    else if ( typeof arg1 == 'number' )
      this._high = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Meter.high(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Low getter/setter.
   * @signature low() Get the low
   * @signature low(number) Set the low as (number)
   * @return This object for call chaining
   */
  low(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._low;
    
    /** Setter */
    else if ( typeof arg1 == 'number' )
      this._low = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Meter.low(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Max value getter/setter.
   * @signature max() Get the max value
   * @signature max(number) Set the max value as (number)
   * @return This object for call chaining
   */
  max(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._max;
    
    /** Setter */
    else if ( typeof arg1 == 'number' )
      this._max = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Meter.max(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Min value getter/setter.
   * @signature min() Get the min value
   * @signature min(number) Set the min value as (number)
   * @return This object for call chaining
   */
  min(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._min;
    
    /** Setter */
    else if ( typeof arg1 == 'number' )
      this._min = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Meter.min(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Step getter/setter.
   * @signature optimum() Get the optimum
   * @signature optimum(number) Set the optimum as (number)
   * @return This object for call chaining
   */
  optimum(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._optimum;
    
    /** Setter */
    else if ( typeof arg1 == 'number' )
      this._optimum = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Meter.optimum(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Value getter/setter.
   * @signature value() Get the value
   * @signature value(number) Set the value as (number)
   * @return This object for call chaining
   */
  value(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._value;
    
    /** Setter */
    else if ( typeof arg1 == 'number' )
      this._value = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Meter.value(): Invalid signature (${typeof arg1}).`);
    
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
    
    if ( this.high() != -1 )
      this.attr('high', this.high());
    
    if ( this.low() != -1 )
      this.attr('low', this.low());
    
    if ( this.max() != -1 )
      this.attr('max', this.max());
    
    if ( this.min() != -1 )
      this.attr('min', this.min());
    
    if ( this.optimum() != -1 )
      this.attr('optimum', this.optimum());
    
    this.attr('value', this.value());
    
    this.tag('meter');
    
    return super.render(indent);
  }
}

module.exports.Meter = Meter;

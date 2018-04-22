/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class ezhtml.Meter
 * @extends ContainerElement
 * @added v0.1.0
 * @updated v0.2.0
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
   * @signature form()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the id of the form that this meter belongs to.
   *
   * @signature form(formId)
   * @added v0.1.0
   * @updated v0.2.0
   * @param formId string
   * @returns this
   * @throws TypeError if `formId` is not a valid [string]
   * @description Sets the id of the form that this meter belongs to.
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
   * @signature high()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns number
   * @description Gets the range that is considered to be a high value.
   *
   * @signature high(value)
   * @added v0.1.0
   * @updated v0.2.0
   * @param value number
   * @returns this
   * @throws TypeError if `value` is not a valid [number]
   * @description Sets the range that is considered to be a high value.
   */
  high(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._high;

    /** Setter */
    else if ( typeof arg1 == 'number' )
      this._high = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.high(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.high(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature low()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns number
   * @description Gets the range that is considered to be a low value.
   *
   * @signature low(value)
   * @added v0.1.0
   * @updated v0.2.0
   * @param value number
   * @returns this
   * @throws TypeError if `value` is not a valid [number]
   * @description Sets the range that is considered to be a low value.
   */
  low(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._low;

    /** Setter */
    else if ( typeof arg1 == 'number' )
      this._low = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.low(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.low(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature max()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns number
   * @description Gets the maximum value of the range.
   *
   * @signature max(value)
   * @added v0.1.0
   * @updated v0.2.0
   * @param value number
   * @returns this
   * @throws TypeError if `value` is not a valid [number]
   * @description Sets the maximum value of the range.
   */
  max(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._max;

    /** Setter */
    else if ( typeof arg1 == 'number' )
      this._max = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.max(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.max(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature min()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns number
   * @description Gets the minimum value of the range.
   *
   * @signature min(value)
   * @added v0.1.0
   * @updated v0.2.0
   * @param value number
   * @returns this
   * @throws TypeError if `value` is not a valid [number]
   * @description Sets the minimum value of the range.
   */
  min(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._min;

    /** Setter */
    else if ( typeof arg1 == 'number' )
      this._min = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.min(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.min(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature optimum()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns number
   * @description Gets the optimal value for the gauge.
   *
   * @signature optimum(value)
   * @added v0.1.0
   * @updated v0.2.0
   * @param value number
   * @returns this
   * @throws TypeError if `value` is not a valid [number]
   * @description Sets the optimal value for the gauge.
   */
  optimum(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._optimum;

    /** Setter */
    else if ( typeof arg1 == 'number' )
      this._optimum = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.optimum(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.optimum(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature value()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns number
   * @description Gets the current value of the gauge.
   *
   * @signature value(value)
   * @added v0.1.0
   * @updated v0.2.0
   * @param value number
   * @returns this
   * @throws TypeError if `value` is not a valid [number]
   * @description Sets the current value of the gauge.
   */
  value(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._value;

    /** Setter */
    else if ( typeof arg1 == 'number' )
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

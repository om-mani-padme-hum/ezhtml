/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class Progress
 * @extends ContainerElement
 * @added v0.1.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML progress elements.
 */
class Progress extends containerElement.ContainerElement {
  /**
   * @signature new Progress([data])
   * @added v0.1.0
   * @param data Object
   * @returns Progress
   * @description Returns a new [Progress] instance, initializing with any key/value pairs provided in `data` with keys 
   * that match setter method names.
   */
  constructor(data = {}) {
    super(data);
    
    this.max(data.max || -1);
    this.value(data.value || -1);
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
      throw new TypeError(`Progress.max(): Invalid signature (${typeof arg1}).`);
    
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
      throw new TypeError(`Progress.value(): Invalid signature (${typeof arg1}).`);
    
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
    if ( this.max() != -1 )
      this.attr('max', this.max());
    
    if ( this.value() != -1 )
      this.attr('value', this.value());
    
    this.tag('progress');
    
    return super.render(indent);
  }
}

module.exports.Progress = Progress;

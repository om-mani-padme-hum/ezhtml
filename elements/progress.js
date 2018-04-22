/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class ezhtml.Progress
 * @extends ContainerElement
 * @added v0.1.0
 * @updated v0.2.0
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
   * @signature max()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns number
   * @description Gets the maximum value of the progress bar.
   *
   * @signature max(value)
   * @added v0.1.0
   * @updated v0.2.0
   * @param value number
   * @returns this
   * @throws TypeError if `value` is not a valid [number]
   * @description Sets the maximum value of the progress bar.
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
   * @signature value()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns number
   * @description Gets the current value of the progress bar.
   *
   * @signature value(value)
   * @added v0.1.0
   * @updated v0.2.0
   * @param value number
   * @returns this
   * @throws TypeError if `value` is not a valid [number]
   * @description Sets the current value of the progress bar.
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
    if ( this.max() != -1 )
      this.attr('max', this.max());
    
    if ( this.value() != -1 )
      this.attr('value', this.value());
    
    this.tag('progress');
    
    return super.render(indent);
  }
}

module.exports.Progress = Progress;

/** Require local modules */
const element = require('./element');

/**
 * @class ezhtml.Param
 * @extends Element
 * @added v0.1.0
 * @updated v0.2.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML paran elements.
 */
class Param extends element.Element {
  /**
   * @signature new Param([data])
   * @added v0.1.0
   * @param data Object
   * @returns Param
   * @description Returns a new [Param] instance, initializing with any key/value pairs provided in `data` with keys 
   * that match setter method names.
   */
  constructor(data = {}) {
    super(data);
    
    this.name(data.name || '');
    this.value(data.value || '');
  }
  
  /**
   * @signature name()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the name of this parameter.
   *
   * @signature name(name)
   * @added v0.1.0
   * @updated v0.2.0
   * @param name string
   * @returns this
   * @throws TypeError if `name` is not a valid [string]
   * @description Sets the name of this parameter.
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
   * @signature value()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the value of this parameter.
   *
   * @signature value(value)
   * @added v0.1.0
   * @updated v0.2.0
   * @param value string|number
   * @returns this
   * @throws TypeError if `value` is not a valid [string] or [number]
   * @description Sets the value of this parameter.
   */
  value(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._value;

    /** Setter */
    else if ( typeof arg1 == 'string' || typeof arg1 == 'number' )
      this._value = arg1.toString();

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
    if ( this.name().length > 0 )
      this.attr('name', this.name());
    
    if ( this.value().length > 0 )
      this.attr('value', this.value());
    
    this.tag('param');
    
    return super.render(indent);
  }
}

module.exports.Param = Param;

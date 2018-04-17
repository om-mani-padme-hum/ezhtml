/** Require local modules */
const element = require('./element');

/**
 * @class Param
 * @extends Element
 * @added v0.1.0
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
      throw new TypeError(`Param.name(): Invalid signature (${typeof arg1}).`);
    
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
      throw new TypeError(`Param.value(): Invalid signature (${typeof arg1}).`);
    
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

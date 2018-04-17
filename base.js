/** Require local modules */
const element = require('./element');

/**
 * @class Base
 * @extends Element
 * @added v0.1.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML base elements.
 */
class Base extends element.Element {
  /**
   * @signature new Base([data])
   * @added v0.1.0
   * @param data Object
   * @returns Base
   * @description Returns a new [Base] instance, initializing with any key/value pairs provided in `data` with keys 
   * that match setter method names.
   */
  constructor(data = {}) {    
    this.href(data.href || '');
    this.target(data.target || '');
  }
  
  /**
   * Hyperlink reference getter/setter.
   * @signature href() Get the hyperlink reference
   * @signature href(string) Set the hyperlink reference as (string)
   * @return This object for call chaining
   */
  href(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._href;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._href = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Base.href(): Invalid signature (${typeof arg1}).`);
    
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
      throw new TypeError(`Base.target(): Invalid signature (${typeof arg1}).`);
    
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
    if ( this.href().length > 0 )
      this.attr('href', this.href());
    
    if ( this.target().length > 0 )
      this.attr('target', this.target());
    
    this.tag('base');
    
    return super.render(indent);
  }
}

module.exports.Base = Base;

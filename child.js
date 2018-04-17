/**
 * @class Child 
 * @added v0.1.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for storing basic HTML element data.
 */
class Child {
  /**
   * @signature new Child([data])
   * @added v0.1.0
   * @param data Object
   * @returns Child
   * @description Returns a new [Child] instance, initializing with any key/value pairs provided in `data` with keys 
   * that match setter method names.
   */
  constructor(data = {}) {
    this.parent(data.parent || null);
  }
  
  /**
   * Parent getter/setter.
   * @signature parent() Get the parent
   * @signature parent(object|null) Set the parent as (object|null)
   * @return This object for call chaining
   */
  parent(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._parent;
    
    /** Setter */
    else if ( typeof arg1 == 'object' || arg1 === null )
      this._parent = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`${this.constructor.name}.parent(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
}

module.exports.Child = Child;

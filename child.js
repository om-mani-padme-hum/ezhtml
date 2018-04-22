/**
 * @class ezhtml.Child 
 * @added v0.1.0
 * @updated v0.2.0
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
   * @signature parent()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns Container
   * @description Gets the parent container.
   *
   * @signature parent(container)
   * @added v0.1.0
   * @updated v0.2.0
   * @param container Container
   * @returns this
   * @throws TypeError if `container` is not null or a valid [Container]
   * @description Sets the parent container.
   */
  parent(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._parent;

    /** Setter */
    else if ( arg1 === null || typeof arg1 == 'object' )
      this._parent = arg1;

    /** Handle errors */
    else
      throw new TypeError(`${this.constructor.name}.parent(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }
}

module.exports.Child = Child;

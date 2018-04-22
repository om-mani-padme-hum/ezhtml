/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class ezhtml.ListItem
 * @extends ContainerElement
 * @added v0.1.0
 * @updated v0.2.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML list item elements.
 */
class ListItem extends containerElement.ContainerElement {
  /**
   * @signature new ListItem([data])
   * @added v0.1.0
   * @param data Object
   * @returns ListItem
   * @description Returns a new [ListItem] instance, initializing with any key/value pairs provided in `data` with keys 
   * that match setter method names.
   */
  constructor(data = {}) {
    super(data);
    
    this.value(data.value || 0);
  }
  
  /**
   * @signature value()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns number
   * @description Gets the value of the list item number that will be incremented from here on, only for list items in 
   * [OrderedList] elements.
   *
   * @signature value(value)
   * @added v0.1.0
   * @updated v0.2.0
   * @param value number
   * @returns this
   * @throws TypeError if `value` is not a valid [number]
   * @description Sets the value of the list item number that will be incremented from here on, only for list items in 
   * [OrderedList] elements.
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
    if ( this.value() > 0 )
      this.attr('value', this.value());
    
    this.tag('li');
    
    return super.render(indent);
  }
}

module.exports.ListItem = ListItem;

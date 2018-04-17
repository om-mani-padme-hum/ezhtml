/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class ListItem
 * @extends ContainerElement
 * @added v0.1.0
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
    
    this.value(data.value || '');
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
      throw new TypeError(`ListItem.value(): Invalid signature (${typeof arg1}).`);
    
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
    if ( this.value().length > 0 )
      this.attr('value', this.value());
    
    this.tag('li');
    
    return super.render(indent);
  }
}

module.exports.ListItem = ListItem;

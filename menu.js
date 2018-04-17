/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class Menu
 * @extends ContainerElement
 * @added v0.1.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML menu elements.
 */
class Menu extends containerElement.ContainerElement {
  /**
   * @signature new Menu([data])
   * @added v0.1.0
   * @param data Object
   * @returns Menu
   * @description Returns a new [Menu] instance, initializing with any key/value pairs provided in `data` with keys 
   * that match setter method names.
   */
  constructor(data = {}) {
    super(data);
    
    this.label(data.label || '');
    this.type(data.type || '');
  }
  
  /**
   * Label getter/setter.
   * @signature label() Get the label
   * @signature label(string) Set the label as (string)
   * @return This object for call chaining
   */
  label(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._label;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._label = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Menu.label(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Type getter/setter.
   * @signature type() Get the type
   * @signature type(string) Set the type as (string)
   * @return This object for call chaining
   */
  type(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._type;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._type = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Menu.type(): Invalid signature (${typeof arg1}).`);
    
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
    if ( this.label().length > 0 )
      this.attr('label', this.label());
    
    if ( this.type().length > 0 )
      this.attr('type', this.type());
    
    this.tag('menu');
    
    return super.render(indent);
  }
}

module.exports.Menu = Menu;

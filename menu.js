/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class ezhtml.Menu
 * @extends ContainerElement
 * @added v0.1.0
 * @updated v0.2.0
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
   * @signature label()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the name of the menu, as shown to the user.
   *
   * @signature label(text)
   * @added v0.1.0
   * @updated v0.2.0
   * @param text string
   * @returns this
   * @throws TypeError if `text` is not a valid [string]
   * @description Sets the name of the menu, as shown to the user.
   */
  label(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._label;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._label = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.label(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.label(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }
  
  /**
   * @signature type()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the type of menu, can be `list`, `toolbar`, `context`.
   *
   * @signature type(type)
   * @added v0.1.0
   * @updated v0.2.0
   * @param type string
   * @returns this
   * @throws TypeError if `type` is not a valid [string]
   * @description Sets the type of menu, can be `list`, `toolbar`, `context`.
   */
  type(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._type;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._type = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.type(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.type(${arg1.constructor.name}): Invalid signature.`);

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

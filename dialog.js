/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class ezhtml.Dialog
 * @extends ContainerElement
 * @added v0.1.0
 * @updated v0.2.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML dialog elements.
 */
class Dialog extends containerElement.ContainerElement {
  /**
   * @signature new Dialog([data])
   * @added v0.1.0
   * @param data Object
   * @returns Dialog
   * @description Returns a new [Dialog] instance, initializing with any key/value pairs provided in `data` with keys 
   * that match setter method names.
   */
  constructor(data = {}) {
    super(data);
    
    this.open(data.open || false);
  }
  
  /**
   * @signature open()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns boolean
   * @description Gets a boolean indicating whether the dialog should already be open when the page loads.
   *
   * @signature open(flag)
   * @added v0.1.0
   * @updated v0.2.0
   * @param flag boolean
   * @returns this
   * @throws TypeError if `flag` is not a valid [boolean]
   * @description Sets a boolean indicating whether the dialog should already be open when the page loads.
   */
  open(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._open;

    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._open = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.open(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.open(${arg1.constructor.name}): Invalid signature.`);

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
    if ( this.open() )
      this.attr('open', true);
    
    this.tag('dialog');
    
    return super.render(indent);
  }
}

module.exports.Dialog = Dialog;

/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class Dialog
 * @extends ContainerElement
 * @added v0.1.0
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
   * Open boolean getter/setter.
   * @signature open() Get the open boolean
   * @signature open(boolean) Set the open boolean as (boolean)
   * @return This object for call chaining
   */
  open(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._open;
    
    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._open = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Dialog.open(): Invalid signature (${typeof arg1}).`);
    
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

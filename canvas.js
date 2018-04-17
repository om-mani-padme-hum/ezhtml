/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class Canvas
 * @extends ContainerElement
 * @added v0.1.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML canvas elements.
 */
class Canvas extends containerElement.ContainerElement {
  /**
   * @signature new Canvas([data])
   * @added v0.1.0
   * @param data Object
   * @returns Canvas
   * @description Returns a new [Canvas] instance, initializing with any key/value pairs provided in `data` with keys 
   * that match setter method names.
   */
  constructor(data = {}) {
    super(data);
    
    this.allowedContent(['Text']);
    this.height(data.height || 0);
    this.width(data.width || 0);
  }
  
  /**
   * Height getter/setter.
   * @signature height() Get the height
   * @signature height(number) Set the height as (number)
   * @return This object for call chaining
   */
  height(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._height;
    
    /** Setter */
    else if ( typeof arg1 == 'number' )
      this._height = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Canvas.height(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Width getter/setter.
   * @signature width() Get the width
   * @signature width(number) Set the width as (number)
   * @return This object for call chaining
   */
  width(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._width;
    
    /** Setter */
    else if ( typeof arg1 == 'number' )
      this._width = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Canvas.width(): Invalid signature (${typeof arg1}).`);
    
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
    if ( this.height() > 0 )
      this.attr('height', this.height());
    
    if ( this.width() > 0 )
      this.attr('width', this.width());
    
    this.tag('canvas');
    
    return super.render(indent);
  }
}

module.exports.Canvas = Canvas;

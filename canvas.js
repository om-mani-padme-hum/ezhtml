/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class ezhtml.Canvas
 * @extends ContainerElement
 * @added v0.1.0
 * @updated v0.2.0
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
   * @signature height()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns number
   * @description Gets the height of the canvas in pixels.
   *
   * @signature height(pixels)
   * @added v0.1.0
   * @updated v0.2.0
   * @param pixels number
   * @returns this
   * @throws TypeError if `pixels` is not a valid [number]
   * @description Sets the height of the canvas in pixels.
   */
  height(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._height;

    /** Setter */
    else if ( typeof arg1 == 'number' )
      this._height = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.height(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.height(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature width()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns number
   * @description Gets the width of the canvas in pixels.
   *
   * @signature width(pixels)
   * @added v0.1.0
   * @updated v0.2.0
   * @param pixels number
   * @returns this
   * @throws TypeError if `pixels` is not a valid [number]
   * @description Sets the width of the canvas in pixels.
   */
  width(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._width;

    /** Setter */
    else if ( typeof arg1 == 'number' )
      this._width = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.width(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.width(${arg1.constructor.name}): Invalid signature.`);

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

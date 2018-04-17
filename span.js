/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class Span
 * @extends ContainerElement
 * @added v0.1.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML span elements.
 */
class Span extends containerElement.ContainerElement {
  /**
   * @signature new Span([data])
   * @added v0.1.0
   * @param data Object
   * @returns Span
   * @description Returns a new [Span] instance, initializing with any key/value pairs provided in `data` with keys 
   * that match setter method names.
   */
  constructor(data = {}) {
    super(data);
  }
  
  /**
   * @signature render(indent) 
   * @added v0.1.0
   * @param indent number
   * @return string Rendered HTML
   * @description Render this element with `indent` spaces of indentation before each line.
   */
  render(indent) {
    this.tag('span');
    
    return super.render(indent);
  }
}

module.exports.Span = Span;

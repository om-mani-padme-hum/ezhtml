/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class ezhtml.Figure
 * @extends ContainerElement
 * @added v0.1.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML figure elements.
 */
class Figure extends containerElement.ContainerElement {
  /**
   * @signature new Figure([data])
   * @added v0.1.0
   * @param data Object
   * @returns Figure
   * @description Returns a new [Figure] instance, initializing with any key/value pairs provided in `data` with keys 
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
    this.tag('figure');
    
    return super.render(indent);
  }
}

module.exports.Figure = Figure;

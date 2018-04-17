/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class Bold
 * @extends ContainerElement
 * @added v0.1.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML bold elements.
 */
class Bold extends containerElement.ContainerElement {
  /**
   * @signature new Bold([data])
   * @added v0.1.0
   * @param data Object
   * @returns Bold
   * @description Returns a new [Bold] instance, initializing with any key/value pairs provided in `data` with keys 
   * that match setter method names.
   */
  constructor(data = {}) {
    super(data);
    
    this.allowedContent(['Text']);
  }
  
  /**
   * @signature render(indent) 
   * @added v0.1.0
   * @param indent number
   * @return string Rendered HTML
   * @description Render this element with `indent` spaces of indentation before each line.
   */
  render(indent) {
    this.tag('b');
    
    return super.render(indent);
  }
}

module.exports.Bold = Bold;

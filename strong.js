/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class ezhtml.Strong
 * @extends ContainerElement
 * @added v0.1.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML strong elements.
 */
class Strong extends containerElement.ContainerElement {
  /**
   * @signature new Strong([data])
   * @added v0.1.0
   * @param data Object
   * @returns Strong
   * @description Returns a new [Strong] instance, initializing with any key/value pairs provided in `data` with keys 
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
    this.tag('strong');
    
    return super.render(indent);
  }
}

module.exports.Strong = Strong;

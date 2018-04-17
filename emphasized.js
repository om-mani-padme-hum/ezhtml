/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class Emphasized
 * @extends ContainerElement
 * @added v0.1.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML emphasized elements.
 */
class Emphasized extends containerElement.ContainerElement {
  /**
   * @signature new Emphasized([data])
   * @added v0.1.0
   * @param data Object
   * @returns Emphasized
   * @description Returns a new [Emphasized] instance, initializing with any key/value pairs provided in `data` with keys 
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
    this.tag('em');
    
    return super.render(indent);
  }
}

module.exports.Emphasized = Emphasized;

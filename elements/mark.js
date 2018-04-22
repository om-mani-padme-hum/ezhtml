/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class ezhtml.Mark
 * @extends ContainerElement
 * @added v0.1.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML mark elements.
 */
class Mark extends containerElement.ContainerElement {
  /**
   * @signature new Mark([data])
   * @added v0.1.0
   * @param data Object
   * @returns Mark
   * @description Returns a new [Mark] instance, initializing with any key/value pairs provided in `data` with keys 
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
    this.tag('mark');
    
    return super.render(indent);
  }
}

module.exports.Mark = Mark;

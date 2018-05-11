/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class ezhtml.Template
 * @extends ContainerElement
 * @added v0.1.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML template elements.
 */
class Template extends containerElement.ContainerElement {
  /**
   * @signature new Template([data])
   * @added v0.1.0
   * @param data Object
   * @returns Template
   * @description Returns a new [Template] instance, initializing with any key/value pairs provided in `data` with keys 
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
    this.tag('template');
    
    return super.render(indent);
  }
}

module.exports.Template = Template;
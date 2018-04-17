/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class Definition
 * @extends ContainerElement
 * @added v0.1.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML definition elements.
 */
class Definition extends containerElement.ContainerElement {
  /**
   * @signature new Definition([data])
   * @added v0.1.0
   * @param data Object
   * @returns Definition
   * @description Returns a new [Definition] instance, initializing with any key/value pairs provided in `data` with keys 
   * that match setter method names.
   */
  constructor(data = {}) {
    super(data);
    
    this.allowedContent(['Text', 'Abbreviation']);
  }
  
  /**
   * @signature render(indent) 
   * @added v0.1.0
   * @param indent number
   * @return string Rendered HTML
   * @description Render this element with `indent` spaces of indentation before each line.
   */
  render(indent) {
    this.tag('dfn');
    
    return super.render(indent);
  }
}

module.exports.Definition = Definition;

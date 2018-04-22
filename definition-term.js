/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class ezhtml.DefinitionTerm
 * @extends ContainerElement
 * @added v0.1.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML definition term elements.
 */
class DefinitionTerm extends containerElement.ContainerElement {
  /**
   * @signature new DefinitionTerm[data])
   * @added v0.1.0
   * @param data Object
   * @returns DefinitionTerm
   * @description Returns a new [DefinitionTerm] instance, initializing with any key/value pairs provided in `data` with keys 
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
    this.tag('dt');
    
    return super.render(indent);
  }
}

module.exports.DefinitionTerm = DefinitionTerm;

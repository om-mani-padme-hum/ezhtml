/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class ezhtml.DefinitionDescription
 * @extends ContainerElement
 * @added v0.1.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML definition description elements.
 */
class DefinitionDescription extends containerElement.ContainerElement {
  /**
   * @signature new DefinitionDescription([data])
   * @added v0.1.0
   * @param data Object
   * @returns DefinitionDescription
   * @description Returns a new [DefinitionDescription] instance, initializing with any key/value pairs provided in `data` with keys 
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
    this.tag('dd');
    
    return super.render(indent);
  }
}

module.exports.DefinitionDescription = DefinitionDescription;

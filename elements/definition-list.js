/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class ezhtml.DefinitionList
 * @extends ContainerElement
 * @added v0.1.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML definition list elements.
 */
class DefinitionList extends containerElement.ContainerElement {
  /**
   * @signature new DefinitionList([data])
   * @added v0.1.0
   * @param data Object
   * @returns DefinitionList
   * @description Returns a new [DefinitionList] instance, initializing with any key/value pairs provided in `data` with keys 
   * that match setter method names.
   */
  constructor(data = {}) {
    super(data);
    
    this.allowedContent(['DefinitionDescription', 'DefinitionTerm']);
  }
  
  /**
   * @signature render(indent) 
   * @added v0.1.0
   * @param indent number
   * @return string Rendered HTML
   * @description Render this element with `indent` spaces of indentation before each line.
   */
  render(indent) {
    this.tag('dl');
    
    return super.render(indent);
  }
}

module.exports.DefinitionList = DefinitionList;

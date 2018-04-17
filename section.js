/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class Section
 * @extends ContainerElement
 * @added v0.1.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML section elements.
 */
class Section extends containerElement.ContainerElement {
  /**
   * @signature new Section([data])
   * @added v0.1.0
   * @param data Object
   * @returns Section
   * @description Returns a new [Section] instance, initializing with any key/value pairs provided in `data` with keys 
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
    this.tag('section');
    
    return super.render(indent);
  }
}

module.exports.Section = Section;

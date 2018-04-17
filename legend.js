/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class Legend
 * @extends ContainerElement
 * @added v0.1.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML legend elements.
 */
class Legend extends containerElement.ContainerElement {
  /**
   * @signature new Legend([data])
   * @added v0.1.0
   * @param data Object
   * @returns Legend
   * @description Returns a new [Legend] instance, initializing with any key/value pairs provided in `data` with keys 
   * that match setter method names.
   */
  constructor(data = {}) {
    super(data);
    
    this.allowedContent(['Text', 'Span', 'Anchor']);
  }
  
  /**
   * @signature render(indent) 
   * @added v0.1.0
   * @param indent number
   * @return string Rendered HTML
   * @description Render this element with `indent` spaces of indentation before each line.
   */
  render(indent) {
    this.tag('legend');
    
    return super.render(indent);
  }
}

module.exports.Legend = Legend;

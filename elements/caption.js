/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class ezhtml.Caption
 * @extends ContainerElement
 * @added v0.1.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML caption elements.
 */
class Caption extends containerElement.ContainerElement {
  /**
   * @signature new Caption([data])
   * @added v0.1.0
   * @param data Object
   * @returns Caption
   * @description Returns a new [Caption] instance, initializing with any key/value pairs provided in `data` with keys 
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
    this.tag('caption');
    
    return super.render(indent);
  }
}

module.exports.Caption = Caption;

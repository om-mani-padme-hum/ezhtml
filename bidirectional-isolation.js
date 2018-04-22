/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class ezhtml.BidirectionalIsolation
 * @extends ContainerElement
 * @added v0.1.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML bi-directional isolation elements.
 */
class BidirectionalIsolation extends containerElement.ContainerElement {
  /**
   * @signature new BidirectionalIsolation([data])
   * @added v0.1.0
   * @param data Object
   * @returns BidirectionalIsolation
   * @description Returns a new [BidirectionalIsolation] instance, initializing with any key/value pairs provided in `data` with 
   * keys that match setter method names.
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
    this.tag('bdi');
    
    return super.render(indent);
  }
}

module.exports.BidirectionalIsolation = BidirectionalIsolation;

/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class Sample
 * @extends ContainerElement
 * @added v0.1.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML sample elements.
 */
class Sample extends containerElement.ContainerElement {
  /**
   * @signature new Sample([data])
   * @added v0.1.0
   * @param data Object
   * @returns Sample
   * @description Returns a new [Sample] instance, initializing with any key/value pairs provided in `data` with keys 
   * that match setter method names.
   */
  constructor(data = {}) {
    super(data);
    
    this.allowedContent(['Text', 'Span', 'Keyboard']);
  }
  
  /**
   * @signature render(indent) 
   * @added v0.1.0
   * @param indent number
   * @return string Rendered HTML
   * @description Render this element with `indent` spaces of indentation before each line.
   */
  render(indent) {
    this.tag('sample');
    
    return super.render(indent);
  }
}

module.exports.Sample = Sample;

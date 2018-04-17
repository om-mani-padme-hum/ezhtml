/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class Head
 * @extends ContainerElement
 * @added v0.1.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML head elements.
 */
class Head extends containerElement.ContainerElement {
  /**
   * @signature new Head([data])
   * @added v0.1.0
   * @param data Object
   * @returns Head
   * @description Returns a new [Head] instance, initializing with any key/value pairs provided in `data` with keys 
   * that match setter method names.
   */
  constructor(data = {}) {
    super(data);
    
    this.allowedContent(['Title', 'Script', 'Link', 'Meta', 'Style', 'Base', 'NoScript']);
  }
  
  /**
   * @signature render(indent) 
   * @added v0.1.0
   * @param indent number
   * @return string Rendered HTML
   * @description Render this element with `indent` spaces of indentation before each line.
   */
  render(indent) {
    this.tag('head');
    
    return super.render(indent);
  }
}

module.exports.Head = Head;

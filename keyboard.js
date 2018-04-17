/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class Keyboard
 * @extends ContainerElement
 * @added v0.1.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML keyboard elements.
 */
class Keyboard extends containerElement.ContainerElement {
  /**
   * @signature new Keyboard([data])
   * @added v0.1.0
   * @param data Object
   * @returns Keyboard
   * @description Returns a new [Keyboard] instance, initializing with any key/value pairs provided in `data` with keys 
   * that match setter method names.
   */
  constructor(data = {}) {
    super(data);
    
    this.allowedContent(['Text', 'Keyboard']);
  }
  
  /**
   * @signature render(indent) 
   * @added v0.1.0
   * @param indent number
   * @return string Rendered HTML
   * @description Render this element with `indent` spaces of indentation before each line.
   */
  render(indent) {
    this.tag('kbd');
    
    return super.render(indent);
  }
}

module.exports.Keyboard = Keyboard;

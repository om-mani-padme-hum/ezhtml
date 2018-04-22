/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class ezhtml.Address
 * @extends ContainerElement
 * @added v0.1.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML address elements.
 */
class Address extends containerElement.ContainerElement {
  /**
   * @signature new Address([data])
   * @added v0.1.0
   * @param data Object
   * @returns Address
   * @description Returns a new [Address] instance, initializing with any key/value pairs provided in `data` with keys 
   * that match setter method names.
   */
  constructor(data = {}) {
    super(data);
    
    this.allowedContent(['Text', 'LineBreak', 'Anchor']);
  }
  
  /**
   * @signature render(indent) 
   * @added v0.1.0
   * @param indent number
   * @return string Rendered HTML
   * @description Render this element with `indent` spaces of indentation before each line.
   */
  render(indent) {
    this.tag('address');
    
    return super.render(indent);
  }
}

module.exports.Address = Address;

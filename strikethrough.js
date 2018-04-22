/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class ezhtml.Strikethrough
 * @extends ContainerElement
 * @added v0.1.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML strikethrough elements.
 */
class Strikethrough extends containerElement.ContainerElement {
  /**
   * @signature new Strikethrough([data])
   * @added v0.1.0
   * @param data Object
   * @returns Strikethrough
   * @description Returns a new [Strikethrough] instance, initializing with any key/value pairs provided in `data` with keys 
   * that match setter method names.
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
    this.tag('s');
    
    return super.render(indent);
  }
}

module.exports.Strikethrough = Strikethrough;

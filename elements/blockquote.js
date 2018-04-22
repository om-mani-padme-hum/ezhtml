/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class ezhtml.Blockquote
 * @extends ContainerElement
 * @added v0.1.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML blockquote elements.
 */
class Blockquote extends containerElement.ContainerElement {
  /**
   * @signature new Blockquote([data])
   * @added v0.1.0
   * @param data Object
   * @returns Blockquote
   * @description Returns a new [Blockquote] instance, initializing with any key/value pairs provided in `data` with keys 
   * that match setter method names.
   */
  constructor(data = {}) {
    super(data);

    this.allowedContent(['Text', 'Paragraph']);
  }
  
  /**
   * @signature render(indent) 
   * @added v0.1.0
   * @param indent number
   * @return string Rendered HTML
   * @description Render this element with `indent` spaces of indentation before each line.
   */
  render(indent) {
    this.tag('blockquote');
    
    return super.render(indent);
  }
}

module.exports.Blockquote = Blockquote;

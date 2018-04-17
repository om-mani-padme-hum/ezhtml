/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class PreformattedText
 * @extends ContainerElement
 * @added v0.1.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML preformatted text elements.
 */
class PreformattedText extends containerElement.ContainerElement {
  /**
   * @signature new PreformattedText([data])
   * @added v0.1.0
   * @param data Object
   * @returns PreformattedText
   * @description Returns a new [PreformattedText] instance, initializing with any key/value pairs provided in `data` with keys 
   * that match setter method names.
   */
  constructor(data = {}) {
    super(data);
    
    this.allowedContent(['Heading', 'Text', 'Code', 'Keyboard', 'Sample']);
  }
  
  /**
   * @signature render(indent) 
   * @added v0.1.0
   * @param indent number
   * @return string Rendered HTML
   * @description Render this element with `indent` spaces of indentation before each line.
   */
  render(indent) {
    this.tag('pre');
    
    return super.render(indent);
  }
}

module.exports.PreformattedText = PreformattedText;

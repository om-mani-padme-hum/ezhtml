/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class ezhtml.HTML
 * @extends ContainerElement
 * @added v0.1.0
 * @updated v0.2.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML HTML elements.
 */
class HTML extends containerElement.ContainerElement {
  /**
   * @signature new HTML([data])
   * @added v0.1.0
   * @param data Object
   * @returns HTML
   * @description Returns a new [HTML] instance, initializing with any key/value pairs provided in `data` with keys 
   * that match setter method names.
   */
  constructor(data = {}) {
    super(data);
    
    this.allowedContent(['Head', 'Body']);
  }
  
  /**
   * @signature render(indent) 
   * @added v0.1.0
   * @param indent number
   * @return string Rendered HTML
   * @description Render this element with `indent` spaces of indentation before each line.
   */
  render(indent = 0) {    
    this.tag('html');
    
    return '<!DOCTYPE html>\n' + super.render(indent);
  }
}

module.exports.HTML = HTML;

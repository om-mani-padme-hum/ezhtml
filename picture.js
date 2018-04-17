/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class Picture
 * @extends ContainerElement
 * @added v0.1.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML picture elements.
 */
class Picture extends containerElement.ContainerElement {
  /**
   * @signature new Picture([data])
   * @added v0.1.0
   * @param data Object
   * @returns Picture
   * @description Returns a new [Picture] instance, initializing with any key/value pairs provided in `data` with keys 
   * that match setter method names.
   */
  constructor(data = {}) {
    super(data);
    
    this.allowedContent(['Source', 'Image']);
  }
  
  /**
   * @signature render(indent) 
   * @added v0.1.0
   * @param indent number
   * @return string Rendered HTML
   * @description Render this element with `indent` spaces of indentation before each line.
   */
  render(indent) {
    this.tag('picture');
    
    return super.render(indent);
  }
}

module.exports.Picture = Picture;

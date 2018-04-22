/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class ezhtml.Nav
 * @extends Element
 * @added v0.1.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML nav elements.
 */
class Nav extends containerElement.ContainerElement {
  /**
   * @signature new Nav([data])
   * @added v0.1.0
   * @param data Object
   * @returns Nav
   * @description Returns a new [Nav] instance, initializing with any key/value pairs provided in `data` with keys 
   * that match setter method names.
   */
  constructor(data = {}) {
    super(data);
  }
  
  /**
   * @signature render(indent) 
   * @added v0.1.0
   * @param indent number
   * @return string Rendered HTML
   * @description Render this element with `indent` spaces of indentation before each line.
   */
  render(indent) {
    this.tag('nav');
    
    return super.render(indent);
  }
}

module.exports.Nav = Nav;

/** Require local modules */
const element = require('./element');

/**
 * @class ezhtml.HorizontalRule
 * @extends Element
 * @added v0.1.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML horizontal rule elements.
 */
class HorizontalRule extends element.Element {
  /**
   * @signature new HorizontalRule([data])
   * @added v0.1.0
   * @param data Object
   * @returns HorizontalRule
   * @description Returns a new [HorizontalRule] instance, initializing with any key/value pairs provided in `data` with keys 
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
    this.tag('hr');
    
    return super.render(indent);
  }
}

module.exports.HorizontalRule = HorizontalRule;

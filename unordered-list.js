/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class UnorderedList
 * @extends ContainerElement
 * @added v0.1.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML unordered list elements.
 */
class UnorderedList extends containerElement.ContainerElement {
  /**
   * @signature new UnorderedList([data])
   * @added v0.1.0
   * @param data Object
   * @returns UnorderedList
   * @description Returns a new [UnorderedList] instance, initializing with any key/value pairs provided in `data` with keys 
   * that match setter method names.
   */
  constructor(data = {}) {
    super(data);
    
    this.allowedContent(['ListItem']);
  }
  
  /**
   * @signature render(indent) 
   * @added v0.1.0
   * @param indent number
   * @return string Rendered HTML
   * @description Render this element with `indent` spaces of indentation before each line.
   */
  render(indent) {
    this.tag('ul');
    
    return super.render(indent);
  }
}

module.exports.UnorderedList = UnorderedList;

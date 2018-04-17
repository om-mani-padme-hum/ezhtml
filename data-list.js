/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class DataList
 * @extends ContainerElement
 * @added v0.1.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML data list elements.
 */
class DataList extends containerElement.ContainerElement {
  /**
   * @signature new DataList([data])
   * @added v0.1.0
   * @param data Object
   * @returns DataList
   * @description Returns a new [DataList] instance, initializing with any key/value pairs provided in `data` with keys 
   * that match setter method names.
   */
  constructor(data = {}) {
    super(data);
    
    this.allowedContent(['Option']);
  }
  
  /**
   * @signature render(indent) 
   * @added v0.1.0
   * @param indent number
   * @return string Rendered HTML
   * @description Render this element with `indent` spaces of indentation before each line.
   */
  render(indent) {
    this.tag('datalist');
    
    return super.render(indent);
  }
}

module.exports.DataList = DataList;

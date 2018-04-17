/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class Table
 * @extends ContainerElement
 * @added v0.1.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML table elements.
 */
class Table extends containerElement.ContainerElement {
  /**
   * @signature new Table([data])
   * @added v0.1.0
   * @param data Object
   * @returns Table
   * @description Returns a new [Table] instance, initializing with any key/value pairs provided in `data` with keys 
   * that match setter method names.
   */
  constructor(data = {}) {
    super(data);
    
    this.allowedContent(['TableHead', 'TableBody', 'TableFooter', 'TableRow', 'Caption', 'ColumnGroup']);
  }
  
  /**
   * @signature render(indent) 
   * @added v0.1.0
   * @param indent number
   * @return string Rendered HTML
   * @description Render this element with `indent` spaces of indentation before each line.
   */
  render(indent) {
    this.tag('table');
    
    return super.render(indent);
  }
}

module.exports.Table = Table;

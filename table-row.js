/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class ezhtml.TableRow
 * @extends ContainerElement
 * @added v0.1.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML table row elements.
 */
class TableRow extends containerElement.ContainerElement {
  /**
   * @signature new TableRow([data])
   * @added v0.1.0
   * @param data Object
   * @returns TableRow
   * @description Returns a new [TableRow] instance, initializing with any key/value pairs provided in `data` with keys 
   * that match setter method names.
   */
  constructor(data = {}) {
    super(data);
    
    this.allowedContent(['TableHeader', 'TableData']);
  }
  
  /**
   * @signature render(indent) 
   * @added v0.1.0
   * @param indent number
   * @return string Rendered HTML
   * @description Render this element with `indent` spaces of indentation before each line.
   */
  render(indent) {
    this.tag('tr');
    
    return super.render(indent);
  }
}

module.exports.TableRow = TableRow;

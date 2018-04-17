/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class TableBody
 * @extends ContainerElement
 * @added v0.1.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML table body elements.
 */
class TableBody extends containerElement.ContainerElement {
  /**
   * @signature new TableBody([data])
   * @added v0.1.0
   * @param data Object
   * @returns TableBody
   * @description Returns a new [TableBody] instance, initializing with any key/value pairs provided in `data` with keys 
   * that match setter method names.
   */
  constructor(data = {}) {
    super(data);
    
    this.allowedContent(['TableRow']);
  }
  
  /**
   * @signature render(indent) 
   * @added v0.1.0
   * @param indent number
   * @return string Rendered HTML
   * @description Render this element with `indent` spaces of indentation before each line.
   */
  render(indent) {
    this.tag('tbody');
    
    return super.render(indent);
  }
}

module.exports.TableBody = TableBody;

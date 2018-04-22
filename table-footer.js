/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class ezhtml.TableFooter
 * @extends ContainerElement
 * @added v0.1.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML table footer elements.
 */
class TableFooter extends containerElement.ContainerElement {
  /**
   * @signature new TableFooter([data])
   * @added v0.1.0
   * @param data Object
   * @returns TableFooter
   * @description Returns a new [TableFooter] instance, initializing with any key/value pairs provided in `data` with keys 
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
    this.tag('tfoot');
    
    return super.render(indent);
  }
}

module.exports.TableFooter = TableFooter;

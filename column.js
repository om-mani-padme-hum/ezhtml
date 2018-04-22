/** Require local modules */
const element = require('./element');

/**
 * @class ezhtml.Column
 * @extends Element
 * @added v0.1.0
 * @updated v0.2.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML column elements.
 */
class Column extends element.Element {
  /**
   * @signature new Column([data])
   * @added v0.1.0
   * @param data Object
   * @returns Column
   * @description Returns a new [Column] instance, initializing with any key/value pairs provided in `data` with keys 
   * that match setter method names.
   */
  constructor(data = {}) {
    super(data);
    
    this.span(data.span || 0);
  }
  
  /**
   * @signature span()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns number
   * @description Gets the number of columns this column spans.
   *
   * @signature span(columns)
   * @added v0.1.0
   * @updated v0.2.0
   * @param columns number
   * @returns this
   * @throws TypeError if `columns` is not a valid [number]
   * @description Sets the number of columns this column spans.
   */
  span(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._span;

    /** Setter */
    else if ( typeof arg1 == 'number' )
      this._span = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.span(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.span(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }
  
  /**
   * @signature render(indent) 
   * @added v0.1.0
   * @param indent number
   * @return string Rendered HTML
   * @description Render this element with `indent` spaces of indentation before each line.
   */
  render(indent) {
    if ( this.span() > 0 )
      this.attr('span', this.span());
    
    this.tag('col');
    
    return super.render(indent);
  }
}

module.exports.Column = Column;

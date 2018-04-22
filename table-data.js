/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class ezhtml.TableData
 * @extends ContainerElement
 * @added v0.1.0
 * @updated v0.2.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML table data elements.
 */
class TableData extends containerElement.ContainerElement {
  /**
   * @signature new TableData([data])
   * @added v0.1.0
   * @param data Object
   * @returns TableData
   * @description Returns a new [TableData] instance, initializing with any key/value pairs provided in `data` with keys 
   * that match setter method names.
   */
  constructor(data = {}) {
    super(data);
    
    this.colspan(data.colspan || 0);
    this.headers(data.headers || '');
    this.rowspan(data.rowspan || 0);
  }
  
  /**
   * @signature colspan()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns number
   * @description Gets the number of columns the cell should span.
   *
   * @signature colspan(span)
   * @added v0.1.0
   * @updated v0.2.0
   * @param span number
   * @returns this
   * @throws TypeError if `span` is not a valid [number]
   * @description Sets the number of columns the cell should span.
   */
  colspan(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._colspan;

    /** Setter */
    else if ( typeof arg1 == 'number' )
      this._colspan = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.colspan(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.colspan(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature headers()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets one or more header cells a cell is related to.
   *
   * @signature headers(headers)
   * @added v0.1.0
   * @updated v0.2.0
   * @param headers string
   * @returns this
   * @throws TypeError if `headers` is not a valid [string]
   * @description Sets one or more header cells a cell is related to.
   */
  headers(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._headers;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._headers = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.headers(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.headers(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature rowspan()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns number
   * @description Gets the number of rows the cell should span.
   *
   * @signature rowspan(span)
   * @added v0.1.0
   * @updated v0.2.0
   * @param span number
   * @returns this
   * @throws TypeError if `span` is not a valid [number]
   * @description Sets the number of rows the cell should span.
   */
  rowspan(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._rowspan;

    /** Setter */
    else if ( typeof arg1 == 'number' )
      this._rowspan = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.rowspan(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.rowspan(${arg1.constructor.name}): Invalid signature.`);

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
    if ( this.colspan() > 0 )
      this.attr('colspan', this.colspan());
    
    if ( this.headers().length > 0 )
      this.attr('headers', this.headers());
    
    if ( this.rowspan() > 0 )
      this.attr('rowspan', this.rowspan());
    
    this.tag('td');
    
    return super.render(indent);
  }
}

module.exports.TableData = TableData;

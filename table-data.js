/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class TableData
 * @extends ContainerElement
 * @added v0.1.0
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
   * Colspan getter/setter.
   * @signature colspan() Get the colspan
   * @signature colspan(number) Set the colspan as (number)
   * @return This object for call chaining
   */
  colspan(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._colspan;
    
    /** Setter */
    else if ( typeof arg1 == 'number' )
      this._colspan = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`TableData.colspan(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Headers getter/setter.
   * @signature headers() Get the headers
   * @signature headers(string) Set the headers as (string)
   * @return This object for call chaining
   */
  headers(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._headers;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._headers = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`TableData.headers(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Rowspan getter/setter.
   * @signature rowspan() Get the rowspan
   * @signature rowspan(number) Set the rowspan as (number)
   * @return This object for call chaining
   */
  rowspan(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._rowspan;
    
    /** Setter */
    else if ( typeof arg1 == 'number' )
      this._rowspan = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`TableData.rowspan(): Invalid signature (${typeof arg1}).`);
    
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

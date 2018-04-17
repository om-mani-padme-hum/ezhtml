/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class TableHeader
 * @extends ContainerElement
 * @added v0.1.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML table header elements.
 */
class TableHeader extends containerElement.ContainerElement {
  /**
   * @signature new TableHeader([data])
   * @added v0.1.0
   * @param data Object
   * @returns TableHeader
   * @description Returns a new [TableHeader] instance, initializing with any key/value pairs provided in `data` with keys 
   * that match setter method names.
   */
  constructor(data = {}) {
    super(data);
    
    this.abbr(data.abbr || '');
    this.colspan(data.colspan || 0);
    this.headers(data.headers || '');
    this.rowspan(data.rowspan || 0);
    this.scope(data.scope || '');
    this.sorted(data.sorted || '');
  }
  
  /**
   * Abbreviation getter/setter.
   * @signature abbr() Get the abbreviation
   * @signature abbr(string) Set the abbreviation as (string)
   * @return This object for call chaining
   */
  abbr(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._abbr;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._abbr = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`TableHeader.abbr(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
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
      throw new TypeError(`TableHeader.colspan(): Invalid signature (${typeof arg1}).`);
    
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
      throw new TypeError(`TableHeader.headers(): Invalid signature (${typeof arg1}).`);
    
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
      throw new TypeError(`TableHeader.rowspan(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Scope getter/setter.
   * @signature scope() Get the scope
   * @signature scope(string) Set the scope as (string)
   * @return This object for call chaining
   */
  scope(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._scope;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._scope = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`TableHeader.scope(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Sorted direction getter/setter.
   * @signature sorted() Get the sorted direction
   * @signature sorted(string) Set the sorted direction as (string)
   * @return This object for call chaining
   */
  sorted(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._sorted;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._sorted = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`TableHeader.sorted(): Invalid signature (${typeof arg1}).`);
    
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
    if ( this.abbr().length > 0 )
      this.attr('abbr', this.abbr());
    
    if ( this.colspan() > 0 )
      this.attr('colspan', this.colspan());
    
    if ( this.rowspan() > 0 )
      this.attr('rowspan', this.rowspan());
    
    if ( this.scope().length > 0 )
      this.attr('scope', this.scope());
    
    if ( this.sorted().length > 0 )
      this.attr('sorted', this.sorted());
    
    this.tag('th');
    
    return super.render(indent);
  }
}

module.exports.TableHeader = TableHeader;

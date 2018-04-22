/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class ezhtml.TableHeader
 * @extends ContainerElement
 * @added v0.1.0
 * @updated v0.2.0
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
   * @signature abbr()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets an abbreviation for the header.
   *
   * @signature abbr(elementId)
   * @added v0.1.0
   * @updated v0.2.0
   * @param elementId string
   * @returns this
   * @throws TypeError if `elementId` is not a valid [string]
   * @description Sets an abbreviation for the header.
   */
  abbr(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._abbr;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._abbr = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.abbr(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.abbr(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature colspan()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns number
   * @description Gets the number of columns the header cell should span.
   *
   * @signature colspan(span)
   * @added v0.1.0
   * @updated v0.2.0
   * @param span number
   * @returns this
   * @throws TypeError if `span` is not a valid [number]
   * @description Sets the number of columns the header cell should span.
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
   * @description Gets a list of ids of one or more other header cells this header cell is related to.
   *
   * @signature headers(headers)
   * @added v0.1.0
   * @updated v0.2.0
   * @param headers string
   * @returns this
   * @throws TypeError if `headers` is not a valid [string]
   * @description Sets a list of ids of one or more other header cells this header cell is related to.
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
   * @description Gets the number of rows the header cell should span.
   *
   * @signature rowspan(span)
   * @added v0.1.0
   * @updated v0.2.0
   * @param span number
   * @returns this
   * @throws TypeError if `span` is not a valid [number]
   * @description Sets the number of rows the header cell should span.
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
   * @signature scope()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the type of element this header is being used to represent, can be `col`, `colgroup`, `row`, or `rowgroup`.
   *
   * @signature scope(type)
   * @added v0.1.0
   * @updated v0.2.0
   * @param type string
   * @returns this
   * @throws TypeError if `type` is not a valid [string]
   * @description Sets the type of element this header is being used to represent, can be `col`, `colgroup`, `row`, or `rowgroup`.
   */
  scope(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._scope;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._scope = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.scope(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.scope(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature sorted()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the sort direction of the column, can be `reversed`, `number`, `reversed number`, or `number reversed`.
   *
   * @signature sorted(elementId)
   * @added v0.1.0
   * @updated v0.2.0
   * @param elementId string
   * @returns this
   * @throws TypeError if `elementId` is not a valid [string]
   * @description Sets the sort direction of the column, can be `reversed`, `number`, `reversed number`, or `number reversed`.
   */
  sorted(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._sorted;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._sorted = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.sorted(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.sorted(${arg1.constructor.name}): Invalid signature.`);

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

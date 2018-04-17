/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class Deleted
 * @extends ContainerElement
 * @added v0.1.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML deleted elements.
 */
class Deleted extends containerElement.ContainerElement {
  /**
   * @signature new Deleted([data])
   * @added v0.1.0
   * @param data Object
   * @returns Deleted
   * @description Returns a new [Deleted] instance, initializing with any key/value pairs provided in `data` with keys 
   * that match setter method names.
   */
  constructor(data = {}) {
    super(data);
    
    this.allowedContent(['Text']);
    this.cite(data.cite || '');
    this.datetime(data.datetime || '');
  }
  
  /**
   * Citation getter/setter.
   * @signature cite() Get the citation
   * @signature cite(string) Set the citation as (string)
   * @return This object for call chaining
   */
  cite(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._cite;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._cite = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Deleted.cite(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Date/time getter/setter.
   * @signature datetime() Get the date/time
   * @signature datetime(string) Set the date/time as (string)
   * @return This object for call chaining
   */
  datetime(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._datetime;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._datetime = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Deleted.datetime(): Invalid signature (${typeof arg1}).`);
    
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
    if ( this.cite().length > 0 )
      this.attr('cite', this.cite());
    
    if ( this.datetime().length > 0 )
      this.attr('datetime', this.datetime());
    
    this.tag('del');
    
    return super.render(indent);
  }
}

module.exports.Deleted = Deleted;

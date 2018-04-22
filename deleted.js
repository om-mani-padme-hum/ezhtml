/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class ezhtml.Deleted
 * @extends ContainerElement
 * @added v0.1.0
 * @updated v0.2.0
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
   * @signature cite()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets a URL to a document that explains the reason why the text was deleted.
   *
   * @signature cite(url)
   * @added v0.1.0
   * @updated v0.2.0
   * @param url string
   * @returns this
   * @throws TypeError if `url` is not a valid [string]
   * @description Sets a URL to a document that explains the reason why the text was deleted.
   */
  cite(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._cite;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._cite = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.cite(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.cite(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }
  
  /**
   * @signature datetime()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the date and time of when the text was deleted.
   *
   * @signature datetime(datetime)
   * @added v0.1.0
   * @updated v0.2.0
   * @param datetime string Required format: YYYY-MM-DDThh:mm:ssTZD
   * @returns this
   * @throws TypeError if `datetime` is not a valid [string]
   * @description Sets the date and time of when the text was deleted.
   */
  datetime(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._datetime;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._datetime = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.datetime(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.datetime(${arg1.constructor.name}): Invalid signature.`);

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

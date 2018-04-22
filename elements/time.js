/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class ezhtml.Time
 * @extends ContainerElement
 * @added v0.1.0
 * @updated v0.2.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML time elements.
 */
class Time extends containerElement.ContainerElement {
  /**
   * @signature new Time([data])
   * @added v0.1.0
   * @param data Object
   * @returns Time
   * @description Returns a new [Time] instance, initializing with any key/value pairs provided in `data` with keys 
   * that match setter method names.
   */
  constructor(data = {}) {
    super(data);
    
    this.allowedContent(['Text']);
    this.datetime(data.datetime || '');
  }
  
  /**
   * @signature datetime()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the date and time represented by this element.
   *
   * @signature datetime(datetime)
   * @added v0.1.0
   * @updated v0.2.0
   * @param datetime string Many formats supported, see HTML 5 documentation
   * @returns this
   * @throws TypeError if `datetime` is not a valid [string]
   * @description Sets the date and time represented by this element.
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
    if ( this.datetime().length > 0 )
      this.attr('datetime', this.datetime());
    
    this.tag('time');
    
    return super.render(indent);
  }
}

module.exports.Time = Time;

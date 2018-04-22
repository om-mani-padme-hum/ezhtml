/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class ezhtml.OrderedList
 * @extends ContainerElement
 * @added v0.1.0
 * @updated v0.2.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML ordered list elements.
 */
class OrderedList extends containerElement.ContainerElement {
  /**
   * @signature new OrderedList([data])
   * @added v0.1.0
   * @param data Object
   * @returns OrderedList
   * @description Returns a new [OrderedList] instance, initializing with any key/value pairs provided in `data` with keys 
   * that match setter method names.
   */
  constructor(data = {}) {
    super(data);
    
    this.allowedContent(['ListItem']);
    this.reversed(data.reversed || false);
    this.start(data.start || 0);
    this.type(data.type || '');
  }
  
  /**
   * @signature reversed()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns boolean
   * @description Gets a boolean indicating whether this list should have its order reversed.
   *
   * @signature reversed(flag)
   * @added v0.1.0
   * @updated v0.2.0
   * @param flag boolean
   * @returns this
   * @throws TypeError if `flag` is not a valid [boolean]
   * @description Sets a boolean indicating whether this list should have its order reversed.
   */
  reversed(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._reversed;

    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._reversed = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.reversed(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.reversed(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }
  
  /**
   * @signature start()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns number
   * @description Gets the starting value to use for the list.
   *
   * @signature start(value)
   * @added v0.1.0
   * @updated v0.2.0
   * @param value number
   * @returns this
   * @throws TypeError if `flag` is not a valid [number]
   * @description Sets the starting value to use for the list.
   */
  start(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._start;
    
    /** Setter */
    else if ( typeof arg1 == 'number' )
      this._start = arg1; 
    
    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.start(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.start(${arg1.constructor.name}): Invalid signature.`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * @signature type()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the type of marker to use in the list, can be `1`, `A`, `a`, `I`, or `i`.
   *
   * @signature type(type)
   * @added v0.1.0
   * @updated v0.2.0
   * @param type string
   * @returns this
   * @throws TypeError if `type` is not a valid [string]
   * @description Sets the type of marker to use in the list, can be `1`, `A`, `a`, `I`, or `i`.
   */
  type(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._type;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._type = arg1; 
    
    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.type(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.type(${arg1.constructor.name}): Invalid signature.`);
    
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
    if ( this.start() > 0 )
      this.attr('start', this.start());
    
    if ( this.type().length > 0 )
      this.attr('type', this.type());
    
    if ( this.reversed() )
      this.attr('reversed', true);
    
    this.tag('ol');
    
    return super.render(indent);
  }
}

module.exports.OrderedList = OrderedList;

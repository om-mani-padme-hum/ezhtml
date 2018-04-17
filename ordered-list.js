/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class OrderedList
 * @extends ContainerElement
 * @added v0.1.0
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
   * Reversed boolean getter/setter.
   * @signature reversed() Get the reversed boolean
   * @signature reversed(boolean) Set the reversed boolean as (boolean)
   * @return This object for call chaining
   */
  reversed(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._reversed;
    
    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._reversed = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`OrderedList.reversed(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Start value getter/setter.
   * @signature start() Get the start value
   * @signature start(number) Set the start value as (number)
   * @return This object for call chaining
   */
  start(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._start;
    
    /** Setter */
    else if ( typeof arg1 == 'number' )
      this._start = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`OrderedList.start(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Type getter/setter.
   * @signature type() Get the type
   * @signature type(string) Set the type as (string)
   * @return This object for call chaining
   */
  type(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._type;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._type = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`OrderedList.type(): Invalid signature (${typeof arg1}).`);
    
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

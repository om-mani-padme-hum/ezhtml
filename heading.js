/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class Heading
 * @extends ContainerElement
 * @added v0.1.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML heading elements.
 */
class Heading extends containerElement.ContainerElement {
  /**
   * @signature new Heading([data])
   * @added v0.1.0
   * @param data Object
   * @returns Heading
   * @description Returns a new [Heading] instance, initializing with any key/value pairs provided in `data` with keys 
   * that match setter method names.
   */
  constructor(data = {}) {
    super(data);
        
    this.rank(data.rank || 2);
  }
  
  /**
   * Rank getter/setter.
   * @signature rank() Get the rank
   * @signature rank(number) Set the rank as (number)
   * @return This object for call chaining
   */
  rank(arg1) {
    /** Getter */
    if ( arg1 === undefined ) {
      return this._rank;
    }
    
    /** Setter */
    else if ( typeof arg1 == 'number' ) {
      if ( arg1 >= 1 && arg1 <= 6 )
        this._rank = arg1; 
      else
        throw new RangeError(`Heading.rank(): Invalid rank, must be 1-6.`);
    }
    
    /** Handle errors */
    else {
      throw new TypeError(`Heading.rank(): Invalid signature (${typeof arg1}).`);
    }
    
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
    this.tag(`h${this.rank()}`);
    
    return super.render(indent);
  }
}

module.exports.Heading = Heading;

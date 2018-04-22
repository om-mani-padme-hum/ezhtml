/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class ezhtml.Heading
 * @extends ContainerElement
 * @added v0.1.0
 * @updated v0.2.0
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
   * @signature rank()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns number
   * @description Gets the rank of the heading, can be 1 - 6.
   *
   * @signature rank(rank)
   * @added v0.1.0
   * @updated v0.2.0
   * @param rank number
   * @returns this
   * @throws TypeError if `rank` is not a valid [number]
   * @description Sets the rank of the heading, can be 1 - 6.
   */
  rank(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._rank;

    /** Setter */
    else if ( typeof arg1 == 'number' ) {
      if ( arg1 >= 1 && arg1 <= 6 )
        this._rank = arg1; 
      else
        throw new RangeError(`${this.constructor.name}.rank(${arg1}): Invalid rank, must be 1-6.`);
    }

    /** Handle errors */
    else if ( arg1 === null ) {
      throw new TypeError(`${this.constructor.name}.rank(null): Invalid signature.`);
    } else {
      throw new TypeError(`${this.constructor.name}.rank(${arg1.constructor.name}): Invalid signature.`);
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

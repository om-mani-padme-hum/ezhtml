/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class BidirectionalOverride
 * @extends ContainerElement
 * @added v0.1.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML bi-directional override elements.
 */
class BidirectionalOverride extends containerElement.ContainerElement {
  /**
   * @signature new BidirectionalOverride([data])
   * @added v0.1.0
   * @param data Object
   * @returns BidirectionalOverride
   * @description Returns a new [BidirectionalOverride] instance, initializing with any key/value pairs provided in `data` with 
   * keys that match setter method names.
   */
  constructor(data = {}) {
    super(data);
    
    this.allowedContent(['Text']);
    this.dir(data.dir || 'ltr');
  }
  
  /**
   * Direction getter/setter.
   * @signature dir() Get the direction
   * @signature dir(string) Set the direction as (string)
   * @return This object for call chaining
   */
  dir(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._dir;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._dir = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`BidirectionalOverride.dir(): Invalid signature (${typeof arg1}).`);
    
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
    this.attr('dir', this.dir());
    
    this.tag('bdo');
    
    return super.render(indent);
  }
}

module.exports.BidirectionalOverride = BidirectionalOverride;

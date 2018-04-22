/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class ezhtml.BidirectionalOverride
 * @extends ContainerElement
 * @added v0.1.0
 * @updated v0.2.0
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
   * @signature dir()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the text direction.
   *
   * @signature dir(direction)
   * @added v0.1.0
   * @updated v0.2.0
   * @param direction string
   * @returns this
   * @throws TypeError if `direction` is not a valid [string]
   * @description Sets the text direction.
   */
  dir(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._dir;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._dir = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.dir(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.dir(${arg1.constructor.name}): Invalid signature.`);

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

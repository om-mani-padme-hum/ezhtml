/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class Map
 * @extends ContainerElement
 * @added v0.1.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML map elements.
 */
class Map extends containerElement.ContainerElement {
  /**
   * @signature new Map([data])
   * @added v0.1.0
   * @param data Object
   * @returns Map
   * @description Returns a new [Map] instance, initializing with any key/value pairs provided in `data` with keys 
   * that match setter method names.
   */
  constructor(data = {}) {
    super(data);
    
    this.allowedContent(['Area']);
    this.name(data.name || '');
  }
  
  /**
   * Name getter/setter.
   * @signature name() Get the name
   * @signature name(string) Set the name as (string)
   * @return This object for call chaining
   */
  name(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._name;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._name = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Map.name(): Invalid signature (${typeof arg1}).`);
    
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
    if ( this.name().length > 0 )
      this.attr('name', this.name());
    
    this.tag('map');
    
    return super.render(indent);
  }
}

module.exports.Map = Map;

/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class Quotation
 * @extends ContainerElement
 * @added v0.1.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML quotation elements.
 */
class Quotation extends containerElement.ContainerElement {
  /**
   * @signature new Quotation([data])
   * @added v0.1.0
   * @param data Object
   * @returns Quotation
   * @description Returns a new [Quotation] instance, initializing with any key/value pairs provided in `data` with keys 
   * that match setter method names.
   */
  constructor(data = {}) {
    super(data);
    
    this.allowedContent(['Text']);
    this.cite(data.cite || '');
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
      throw new TypeError(`Quotation.cite(): Invalid signature (${typeof arg1}).`);
    
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
    
    this.tag('q');
    
    return super.render(indent);
  }
}

module.exports.Quotation = Quotation;

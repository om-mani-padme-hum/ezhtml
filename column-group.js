/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class ColumnGroup
 * @extends ContainerElement
 * @added v0.1.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML column group elements.
 */
class ColumnGroup extends containerElement.ContainerElement {
  /**
   * @signature new ColumnGroup([data])
   * @added v0.1.0
   * @param data Object
   * @returns ColumnGroup
   * @description Returns a new [ColumnGroup] instance, initializing with any key/value pairs provided in `data` with keys 
   * that match setter method names.
   */
  constructor(data = {}) {
    super(data);
    
    this.allowedContent(['Column']);
    this.span(data.span || 0);
  }
  
  /**
   * Span getter/setter.
   * @signature span() Get the span
   * @signature span(number) Set the span as (number)
   * @return This object for call chaining
   */
  span(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._span;
    
    /** Setter */
    else if ( typeof arg1 == 'number' )
      this._span = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`ColumnGroup.span(): Invalid signature (${typeof arg1}).`);
    
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
    if ( this.span() > 0 )
      this.attr('span', this.span());
    
    this.tag('colgroup');
    
    return super.render(indent);
  }
}

module.exports.ColumnGroup = ColumnGroup;
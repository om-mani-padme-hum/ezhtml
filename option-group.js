/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class OptionGroup
 * @extends ContainerElement
 * @added v0.1.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML option group elements.
 */
class OptionGroup extends containerElement.ContainerElement {
  /**
   * @signature new OptionGroup([data])
   * @added v0.1.0
   * @param data Object
   * @returns OptionGroup
   * @description Returns a new [OptionGroup] instance, initializing with any key/value pairs provided in `data` with keys 
   * that match setter method names.
   */
  constructor(data = {}) {
    super(data);
    
    this.allowedContent(['Option']);
    this.disabled(data.disabled || false);
    this.label(data.label || '');
  }
  
  /**
   * Disabled boolean getter/setter.
   * @signature disabled() Get the disabled boolean
   * @signature disabled(boolean) Set the disabled boolean as (boolean)
   * @return This object for call chaining
   */
  disabled(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._disabled;
    
    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._disabled = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`OptionGroup.disabled(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Label getter/setter.
   * @signature label() Get the label
   * @signature label(string) Set the label as (string)
   * @return This object for call chaining
   */
  label(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._label;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._label = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`OptionGroup.label(): Invalid signature (${typeof arg1}).`);
    
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
    if ( this.label().length > 0 )
      this.attr('label', this.label());
    
    if ( this.disabled() )
      this.attr('disabled', true);
    
    this.tag('optgroup');
    
    return super.render(indent);
  }
}

module.exports.OptionGroup = OptionGroup;

/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class ezhtml.OptionGroup
 * @extends ContainerElement
 * @added v0.1.0
 * @updated v0.2.0
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
   * @signature disabled()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns boolean
   * @description Gets a boolean indicating whether this group of options should be disabled.
   *
   * @signature disabled(flag)
   * @added v0.1.0
   * @updated v0.2.0
   * @param flag boolean
   * @returns this
   * @throws TypeError if `flag` is not a valid [boolean]
   * @description Sets a boolean indicating whether this group of options should be disabled.
   */
  disabled(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._disabled;

    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._disabled = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.disabled(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.disabled(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }
  
  /**
   * @signature label()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the name of the option group, as shown to the user.
   *
   * @signature label(text)
   * @added v0.1.0
   * @updated v0.2.0
   * @param text string
   * @returns this
   * @throws TypeError if `text` is not a valid [string]
   * @description Sets the name of the option group, as shown to the user.
   */
  label(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._label;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._label = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.label(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.label(${arg1.constructor.name}): Invalid signature.`);

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

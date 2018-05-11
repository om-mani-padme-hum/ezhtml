/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class ezhtml.Select
 * @extends ContainerElement
 * @added v0.1.0
 * @updated v0.2.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML select elements.
 */
class Select extends containerElement.ContainerElement {
  /**
   * @signature new Select([data])
   * @added v0.1.0
   * @param data Object
   * @returns Select
   * @description Returns a new [Select] instance, initializing with any key/value pairs provided in `data` with keys 
   * that match setter method names.
   */
  constructor(data = {}) {
    super(data);
    
    this.allowedContent(['OptionGroup', 'Option']);
    this.autofocus(data.autofocus || false);
    this.disabled(data.disabled || false);
    this.form(data.form || '');
    this.multiple(data.multiple || false);
    this.name(data.name || '');
    this.required(data.required || false);
    this.size(data.size || 0);
  }
  
  /**
   * @signature autofocus()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns boolean
   * @description Gets a boolean indicating whether the select box should automatically get focus when the page loads.
   *
   * @signature autofocus(flag)
   * @added v0.1.0
   * @updated v0.2.0
   * @param flag boolean
   * @returns this
   * @throws TypeError if `flag` is not a valid [boolean]
   * @description Sets a boolean indicating whether the select box should automatically get focus when the page loads.
   */
  autofocus(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._autofocus;

    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._autofocus = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.autofocus(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.autofocus(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature disabled()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns boolean
   * @description Gets a boolean indicating whether the select box should be disabled.
   *
   * @signature disabled(flag)
   * @added v0.1.0
   * @updated v0.2.0
   * @param flag boolean
   * @returns this
   * @throws TypeError if `flag` is not a valid [boolean]
   * @description Sets a boolean indicating whether the select box should be disabled.
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
   * @signature form()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the id of the form that this select box belongs to.
   *
   * @signature form(formId)
   * @added v0.1.0
   * @updated v0.2.0
   * @param formId string
   * @returns this
   * @throws TypeError if `formId` is not a valid [string]
   * @description Sets the id of the form that this select box belongs to.
   */
  form(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._form;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._form = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.form(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.form(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature multiple()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns boolean
   * @description Gets a boolean indicating whether this is a multiple-select box.
   *
   * @signature multiple(flag)
   * @added v0.1.0
   * @updated v0.2.0
   * @param flag boolean
   * @returns this
   * @throws TypeError if `flag` is not a valid [boolean]
   * @description Sets a boolean indicating whether this is a multiple-select box.
   */
  multiple(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._multiple;

    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._multiple = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.multiple(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.multiple(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature name()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the name of the select box.
   *
   * @signature name(name)
   * @added v0.1.0
   * @updated v0.2.0
   * @param name string
   * @returns this
   * @throws TypeError if `name` is not a valid [string]
   * @description Sets the name of the select box.
   */
  name(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._name;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._name = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.name(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.name(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature required()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns boolean
   * @description Gets a boolean indicating whether this select box input is required.
   *
   * @signature required(flag)
   * @added v0.1.0
   * @updated v0.2.0
   * @param flag boolean
   * @returns this
   * @throws TypeError if `flag` is not a valid [boolean]
   * @description Sets a boolean indicating whether this select box input is required.
   */
  required(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._required;

    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._required = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.required(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.required(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature size()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns number
   * @description Gets the size of the select box, for multiple-select boxes only.
   *
   * @signature size(size)
   * @added v0.1.0
   * @updated v0.2.0
   * @param size number
   * @returns this
   * @throws TypeError if `size` is not a valid [number]
   * @description Sets the size of the select box, for multiple-select boxes only.
   */
  size(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._size;

    /** Setter */
    else if ( typeof arg1 == 'number' )
      this._size = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.size(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.size(${arg1.constructor.name}): Invalid signature.`);

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
    if ( this.form().length > 0 )
      this.attr('form', this.form());
    
    if ( this.name().length > 0 )
      this.attr('name', this.name());
    
    if ( this.size() > 0 )
      this.attr('size', this.size());

    if ( this.autofocus() )
      this.attr('autofocus', true);
    
    if ( this.disabled() )
      this.attr('disabled', true);
    
    if ( this.multiple() )
      this.attr('multiple', true);
    
    if ( this.required() )
      this.attr('required', true);
    
    this.tag('select');
    
    return super.render(indent);
  }
}

module.exports.Select = Select;

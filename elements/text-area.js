/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class ezhtml.TextArea
 * @extends ContainerElement
 * @added v0.1.0
 * @updated v0.2.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML text area elements.
 */
class TextArea extends containerElement.ContainerElement {
  /**
   * @signature new TextArea([data])
   * @added v0.1.0
   * @param data Object
   * @returns TextArea
   * @description Returns a new [TextArea] instance, initializing with any key/value pairs provided in `data` with keys 
   * that match setter method names.
   */
  constructor(data = {}) {
    super(data);
    
    this.allowedContent(['Text']);
    this.autofocus(data.autofocus || false);
    this.cols(data.cols || 0);
    this.dirname(data.dirname || '');
    this.disabled(data.disabled || false);
    this.form(data.form || '');
    this.maxlength(data.maxlength || 0);
    this.name(data.name || '');
    this.placeholder(data.placeholder || '');
    this.readonly(data.readonly || false);
    this.required(data.required || false);
    this.rows(data.rows || 0);
    this.wrap(data.wrap || '');
  }
  
  /**
   * @signature autofocus()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns boolean
   * @description Gets a boolean indicating whether the text area should automatically get focus when the page loads.
   *
   * @signature autofocus(flag)
   * @added v0.1.0
   * @updated v0.2.0
   * @param flag boolean
   * @returns this
   * @throws TypeError if `flag` is not a valid [boolean]
   * @description Sets a boolean indicating whether the text area should automatically get focus when the page loads.
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
   * @signature cols()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns number
   * @description Gets the number of characters per row in the text area.
   *
   * @signature cols(columns)
   * @added v0.1.0
   * @updated v0.2.0
   * @param columns number
   * @returns this
   * @throws TypeError if `columns` is not a valid [number]
   * @description Sets the number of characters per row in the text area.
   */
  cols(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._cols;

    /** Setter */
    else if ( typeof arg1 == 'number' )
      this._cols = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.cols(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.cols(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature dirname()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the direction of the text that will be submitted.
   *
   * @signature dirname(dir)
   * @added v0.1.0
   * @updated v0.2.0
   * @param dir string
   * @returns this
   * @throws TypeError if `dir` is not a valid [string]
   * @description Sets the direction of the text that will be submitted.
   */
  dirname(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._dirname;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._dirname = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.dirname(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.dirname(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature disabled()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns boolean
   * @description Gets a boolean indicating whether the text area should be disabled.
   *
   * @signature disabled(flag)
   * @added v0.1.0
   * @updated v0.2.0
   * @param flag boolean
   * @returns this
   * @throws TypeError if `flag` is not a valid [boolean]
   * @description Sets a boolean indicating whether the text area should be disabled.
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
   * @description Gets the id of the form that the text area belongs to.
   *
   * @signature form(formId)
   * @added v0.1.0
   * @updated v0.2.0
   * @param formId string
   * @returns this
   * @throws TypeError if `formId` is not a valid [string]
   * @description Sets the id of the form that the text area belongs to.
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
   * @signature maxlength()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the maximum length of characters allowed for ths input.
   *
   * @signature maxlength(value)
   * @added v0.1.0
   * @updated v0.2.0
   * @param value string
   * @returns this
   * @throws TypeError if `value` is not a valid [string]
   * @description Sets the maximum length of characters allowed for ths input.
   */
  maxlength(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._maxlength;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._maxlength = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.maxlength(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.maxlength(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature name()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the name of the text area.
   *
   * @signature name(name)
   * @added v0.1.0
   * @updated v0.2.0
   * @param name string
   * @returns this
   * @throws TypeError if `name` is not a valid [string]
   * @description Sets the name of the text area.
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
   * @signature placeholder()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the placeholder value for ths text area.
   *
   * @signature placeholder(value)
   * @added v0.1.0
   * @updated v0.2.0
   * @param value string
   * @returns this
   * @throws TypeError if `value` is not a valid [string]
   * @description Sets the placeholder value for ths text area.
   */
  placeholder(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._placeholder;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._placeholder = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.placeholder(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.placeholder(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature readonly()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns boolean
   * @description Gets a boolean indicating whether this text area is read only.
   *
   * @signature readonly(flag)
   * @added v0.1.0
   * @updated v0.2.0
   * @param flag boolean
   * @returns this
   * @throws TypeError if `flag` is not a valid [boolean]
   * @description Sets a boolean indicating whether this text area is read only.
   */
  readonly(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._readonly;

    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._readonly = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.readonly(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.readonly(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature required()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns boolean
   * @description Gets a boolean indicating whether this text area is required.
   *
   * @signature required(flag)
   * @added v0.1.0
   * @updated v0.2.0
   * @param flag boolean
   * @returns this
   * @throws TypeError if `flag` is not a valid [boolean]
   * @description Sets a boolean indicating whether this text area is required.
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
   * @signature rows()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns number
   * @description Gets the number of rows that should be visible in this text area at any given time.
   *
   * @signature rows(value)
   * @added v0.1.0
   * @updated v0.2.0
   * @param value number
   * @returns this
   * @throws TypeError if `value` is not a valid [number]
   * @description Sets the number of rows that should be visible in this text area at any given time.
   */
  rows(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._rows;

    /** Setter */
    else if ( typeof arg1 == 'number' )
      this._rows = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.rows(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.rows(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature wrap()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the type of text wrapping to be used in the text area, can be `hard` or `soft`.
   *
   * @signature wrap(type)
   * @added v0.1.0
   * @updated v0.2.0
   * @param type string
   * @returns this
   * @throws TypeError if `type` is not a valid [string]
   * @description Sets the type of text wrapping to be used in the text area, can be `hard` or `soft`.
   */
  wrap(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._wrap;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._wrap = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.wrap(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.wrap(${arg1.constructor.name}): Invalid signature.`);

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
    if ( this.cols() > 0 )
      this.attr('cols', this.cols());
    
    if ( this.dirname().length > 0 )
      this.attr('dirname', this.dirname());
    
    if ( this.form().length > 0 )
      this.attr('form', this.form());
    
    if ( this.maxlength() > 0 )
      this.attr('maxlength', this.maxlength());
    
    if ( this.name().length > 0 )
      this.attr('name', this.name());

    if ( this.placeholder().length > 0 )
      this.attr('placeholder', this.placeholder());
    
    if ( this.rows() > 0 )
      this.attr('rows', this.rows());
    
    if ( this.wrap().length > 0 )
      this.attr('wrap', this.wrap());

    if ( this.autofocus() )
      this.attr('autofocus', true);
    
    if ( this.disabled() )
      this.attr('disabled', true);
    
    if ( this.readonly() )
      this.attr('readonly', true);
    
    if ( this.required() )
      this.attr('required', true);
    
    this.tag('textarea');
    
    return super.render(indent);
  }
}

module.exports.TextArea = TextArea;

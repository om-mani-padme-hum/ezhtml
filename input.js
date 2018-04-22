/** Require local modules */
const element = require('./element');

/**
 * @class ezhtml.Input
 * @extends Element
 * @added v0.1.0
 * @updated v0.2.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML input elements.
 */
class Input extends element.Element {
  /**
   * @signature new Input([data])
   * @added v0.1.0
   * @param data Object
   * @returns Input
   * @description Returns a new [Input] instance, initializing with any key/value pairs provided in `data` with keys 
   * that match setter method names.
   */
  constructor(data = {}) {
    super(data);
    
    this.accept(data.accept || '');
    this.alt(data.alt || '');
    this.autocomplete(data.autocomplete || '');
    this.autofocus(data.autofocus || false);
    this.checked(data.checked || false);
    this.dirname(data.dirname || '');
    this.disabled(data.disabled || false);
    this.form(data.form || '');
    this.formaction(data.formaction || '');
    this.formenctype(data.formenctype || '');
    this.formmethod(data.formmethod || '');
    this.formnovalidate(data.formnovalidate || false);
    this.formtarget(data.formtarget || '');
    this.height(data.height || 0);
    this.list(data.list || '');
    this.max(data.max || '');
    this.maxlength(data.maxlength || '');
    this.min(data.min || '');
    this.multiple(data.multiple || false);
    this.name(data.name || '');
    this.pattern(data.pattern || '');
    this.placeholder(data.placeholder || '');
    this.readonly(data.readonly || false);
    this.required(data.required || false);
    this.size(data.size || 0);
    this.src(data.src || '');
    this.step(data.step || 0);
    this.type(data.type || 'text');
    this.value(data.value || '');
    this.width(data.width || 0);
  }
  
  /**
   * @signature accept()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the types of files that the server accepts (only for input type `file`).
   *
   * @signature accept(types)
   * @added v0.1.0
   * @updated v0.2.0
   * @param types string
   * @returns this
   * @throws TypeError if `types` is not a valid [string]
   * @description Sets the types of files that the server accepts (only for input type `file`).
   */
  accept(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._accept;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._accept = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.accept(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.accept(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature alt()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the alternate text for the input.
   *
   * @signature alt(text)
   * @added v0.1.0
   * @updated v0.2.0
   * @param text string
   * @returns this
   * @throws TypeError if `text` is not a valid [string]
   * @description Sets the alternate text for the input.
   */
  alt(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._alt;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._alt = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.alt(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.alt(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature autocomplete()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets a flag inicating whether the browser should enable autocomplete for this input, can be `on` or `off`.
   *
   * @signature autocomplete(flag)
   * @added v0.1.0
   * @updated v0.2.0
   * @param flag string
   * @returns this
   * @throws TypeError if `flag` is not a valid [string]
   * @description Sets a flag inicating whether the browser should enable autocomplete for this input, can be `on` or `off`.
   */
  autocomplete(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._autocomplete;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._autocomplete = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.autocomplete(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.autocomplete(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature autofocus()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns boolean
   * @description Gets a boolean indicating whether the button should automatically get focus when the page loads.
   *
   * @signature autofocus(flag)
   * @added v0.1.0
   * @updated v0.2.0
   * @param flag boolean
   * @returns this
   * @throws TypeError if `flag` is not a valid [boolean]
   * @description Sets a boolean indicating whether the button should automatically get focus when the page loads.
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
   * @signature checked()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns boolean
   * @description Gets a boolean indicating whether this input should be checked on page load, only for input types `checkbox` or `radio`.
   *
   * @signature checked(flag)
   * @added v0.1.0
   * @updated v0.2.0
   * @param flag boolean
   * @returns this
   * @throws TypeError if `flag` is not a valid [boolean]
   * @description Sets a boolean indicating whether this input should be checked on page load, only for input types `checkbox` or `radio`.
   */
  checked(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._checked;

    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._checked = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.checked(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.checked(${arg1.constructor.name}): Invalid signature.`);

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
   * @description Gets a boolean indicating whether the button should be disabled.
   *
   * @signature disabled(flag)
   * @added v0.1.0
   * @updated v0.2.0
   * @param flag boolean
   * @returns this
   * @throws TypeError if `flag` is not a valid [boolean]
   * @description Sets a boolean indicating whether the button should be disabled.
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
   * @description Gets the id of the form that the button belongs to.
   *
   * @signature form(formId)
   * @added v0.1.0
   * @updated v0.2.0
   * @param formId string
   * @returns this
   * @throws TypeError if `formId` is not a valid [string]
   * @description Sets the id of the form that the button belongs to.
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
   * @signature formaction()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets where to send the form-data when a form is submitted, only for type="submit".
   *
   * @signature formaction(action)
   * @added v0.1.0
   * @updated v0.2.0
   * @param action string
   * @returns this
   * @throws TypeError if `action` is not a valid [string]
   * @description Sets where to send the form-data when a form is submitted, only for type="submit".
   */
  formaction(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._formaction;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._formaction = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.formaction(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.formaction(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature formenctype()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets how the form-data should be encoded before sending it to a server, only for type="submit".
   *
   * @signature formenctype(enctype)
   * @added v0.1.0
   * @updated v0.2.0
   * @param enctype string
   * @returns this
   * @throws TypeError if `enctype` is not a valid [string]
   * @description Sets how the form-data should be encoded before sending it to a server, only for type="submit".
   */
  formenctype(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._formenctype;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._formenctype = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.formenctype(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.formenctype(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature formmethod()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the HTTP method used to send the data, only for type="submit".
   *
   * @signature formmethod(method)
   * @added v0.1.0
   * @updated v0.2.0
   * @param method string
   * @returns this
   * @throws TypeError if `method` is not a valid [string]
   * @description Sets the HTTP method used to send the data, only for type="submit".
   */
  formmethod(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._formmethod;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._formmethod = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.formmethod(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.formmethod(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature formnovalidate()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns boolean
   * @description Gets a boolean indicating whether the form-data should not be validated on submission, only for type="submit".
   *
   * @signature formnovalidate(flag)
   * @added v0.1.0
   * @updated v0.2.0
   * @param flag boolean
   * @returns this
   * @throws TypeError if `flag` is not a valid [boolean]
   * @description Sets a boolean indicating whether the form-data should not be validated on submission, only for type="submit".
   */
  formnovalidate(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._formnovalidate;

    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._formnovalidate = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.formnovalidate(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.formnovalidate(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature formtarget()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets where to display the response after submitting the form, only for type="submit".
   *
   * @signature formtarget(target)
   * @added v0.1.0
   * @updated v0.2.0
   * @param target string
   * @returns this
   * @throws TypeError if `target` is not a valid [string]
   * @description Sets where to display the response after submitting the form, only for type="submit".
   */
  formtarget(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._formtarget;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._formtarget = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.formtarget(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.formtarget(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature height()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns number
   * @description Gets the height of the input in pixels, only if input is of type `image`.
   *
   * @signature height(pixels)
   * @added v0.1.0
   * @updated v0.2.0
   * @param pixels number
   * @returns this
   * @throws TypeError if `pixels` is not a valid [number]
   * @description Sets the height of the input in pixels, only if input is of type `image`.
   */
  height(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._height;

    /** Setter */
    else if ( typeof arg1 == 'number' )
      this._height = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.height(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.height(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature list()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the id of a [DataList] element that contains pre-defined options for this input.
   *
   * @signature list(list)
   * @added v0.1.0
   * @updated v0.2.0
   * @param list string
   * @returns this
   * @throws TypeError if `list` is not a valid [string]
   * @description Sets the id of a [DataList] element that contains pre-defined options for this input.
   */
  list(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._list;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._list = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.list(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.list(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature max()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the maximum value for ths input.
   *
   * @signature max(value)
   * @added v0.1.0
   * @updated v0.2.0
   * @param value string
   * @returns this
   * @throws TypeError if `value` is not a valid [string]
   * @description Sets the maximum value for ths input.
   */
  max(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._max;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._max = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.max(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.max(${arg1.constructor.name}): Invalid signature.`);

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
   * @signature min()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the minimum value for ths input.
   *
   * @signature min(value)
   * @added v0.1.0
   * @updated v0.2.0
   * @param value string
   * @returns this
   * @throws TypeError if `value` is not a valid [string]
   * @description Sets the minimum value for ths input.
   */
  min(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._min;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._min = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.min(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.min(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature multiple()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns boolean
   * @description Gets a boolean indicating whether multiple values can be entered in this input.
   *
   * @signature multiple(flag)
   * @added v0.1.0
   * @updated v0.2.0
   * @param flag boolean
   * @returns this
   * @throws TypeError if `flag` is not a valid [boolean]
   * @description Sets a boolean indicating whether multiple values can be entered in this input.
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
   * @description Gets the name of this input.
   *
   * @signature name(name)
   * @added v0.1.0
   * @updated v0.2.0
   * @param name string
   * @returns this
   * @throws TypeError if `name` is not a valid [string]
   * @description Sets the name of this input.
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
   * @signature pattern()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets a regular expression that this input's value is validated against.
   *
   * @signature pattern(regex)
   * @added v0.1.0
   * @updated v0.2.0
   * @param regex string
   * @returns this
   * @throws TypeError if `regex` is not a valid [string]
   * @description Sets a regular expression that this input's value is validated against.
   */
  pattern(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._pattern;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._pattern = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.pattern(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.pattern(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature placeholder()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the placeholder value for ths input.
   *
   * @signature placeholder(value)
   * @added v0.1.0
   * @updated v0.2.0
   * @param value string
   * @returns this
   * @throws TypeError if `value` is not a valid [string]
   * @description Sets the placeholder value for ths input.
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
   * @description Gets a boolean indicating whether this input is read only.
   *
   * @signature readonly(flag)
   * @added v0.1.0
   * @updated v0.2.0
   * @param flag boolean
   * @returns this
   * @throws TypeError if `flag` is not a valid [boolean]
   * @description Sets a boolean indicating whether this input is read only.
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
   * @description Gets a boolean indicating whether this input is required.
   *
   * @signature required(flag)
   * @added v0.1.0
   * @updated v0.2.0
   * @param flag boolean
   * @returns this
   * @throws TypeError if `flag` is not a valid [boolean]
   * @description Sets a boolean indicating whether this input is required.
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
   * @description Gets the size of this input in characters.
   *
   * @signature size(size)
   * @added v0.1.0
   * @updated v0.2.0
   * @param size number
   * @returns this
   * @throws TypeError if `size` is not a valid [number]
   * @description Sets the size of this input in characters.
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
   * @signature src()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the URL of the image to use as a submit button (only for input type `image`).
   *
   * @signature src(url)
   * @added v0.1.0
   * @updated v0.2.0
   * @param url string
   * @returns this
   * @throws TypeError if `url` is not a valid [string]
   * @description Sets the URL of the image to use as a submit button (only for input type `image`).
   */
  src(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._src;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._src = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.src(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.src(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature step()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns number
   * @description Gets the step value for ths input.
   *
   * @signature step(value)
   * @added v0.1.0
   * @updated v0.2.0
   * @param value number
   * @returns this
   * @throws TypeError if `value` is not a valid [number]
   * @description Sets the step value for ths input.
   */
  step(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._step;

    /** Setter */
    else if ( typeof arg1 == 'number' )
      this._step = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.step(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.step(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature type()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the input type.
   *
   * @signature type(flag)
   * @added v0.1.0
   * @updated v0.2.0
   * @param flag string
   * @returns this
   * @throws TypeError if `flag` is not a valid [string]
   * @description Sets the input type.
   */
  type(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._type;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._type = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.type(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.type(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature value()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the initial value for ths input.
   *
   * @signature value(value)
   * @added v0.1.0
   * @updated v0.2.0
   * @param value string|number
   * @returns this
   * @throws TypeError if `value` is not a valid [string] or [number]
   * @description Sets the initial value for ths input.
   */
  value(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._value;

    /** Setter */
    else if ( typeof arg1 == 'string' || typeof arg1 == 'number' )
      this._value = arg1.toString();

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.value(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.value(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature width()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns number
   * @description Gets the width of the input in pixels, only if input is of type `image`.
   *
   * @signature width(pixels)
   * @added v0.1.0
   * @updated v0.2.0
   * @param pixels number
   * @returns this
   * @throws TypeError if `pixels` is not a valid [number]
   * @description Sets the width of the input in pixels, only if input is of type `image`.
   */
  width(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._width;

    /** Setter */
    else if ( typeof arg1 == 'number' )
      this._width = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.width(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.width(${arg1.constructor.name}): Invalid signature.`);

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
    if ( this.accept().length > 0 )
      this.attr('accept', this.accept());
    
    if ( this.alt().length > 0 )
      this.attr('alt', this.alt());
    
    if ( this.autocomplete().length > 0 )
      this.attr('autocomplete', this.autocomplete());
    
    if ( this.dirname().length > 0 )
      this.attr('dirname', this.dirname());
    
    if ( this.form().length > 0 )
      this.attr('form', this.form());
    
    if ( this.formaction().length > 0 )
      this.attr('formaction', this.formaction());
    
    if ( this.formenctype().length > 0 )
      this.attr('formenctype', this.formenctype());
    
    if ( this.formmethod().length > 0 )
      this.attr('formmethod', this.formmethod());
    
    if ( this.formtarget().length > 0 )
      this.attr('formtarget', this.formtarget());
    
    if ( this.height() > 0 )
      this.attr('height', this.height());
    
    if ( this.list().length > 0 )
      this.attr('list', this.list());
    
    if ( this.max().length > 0 )
      this.attr('max', this.max());
    
    if ( this.maxlength().length > 0 )
      this.attr('maxlength', this.maxlength());
    
    if ( this.min().length > 0 )
      this.attr('min', this.min());
    
    if ( this.name().length > 0 )
      this.attr('name', this.name());
    
    if ( this.pattern().length > 0 )
      this.attr('pattern', this.pattern());
    
    if ( this.placeholder().length > 0 )
      this.attr('placeholder', this.placeholder());
    
    if ( this.size() > 0 )
      this.attr('size', this.size());
    
    if ( this.src().length > 0 )
      this.attr('src', this.src());
    
    if ( this.step() > 0 )
      this.attr('step', this.step());
    
    if ( this.type().length > 0 )
      this.attr('type', this.type());
    
    if ( this.value().length > 0 )
      this.attr('value', this.value());
    
    if ( this.width() > 0 )
      this.attr('width', this.width());
    
    if ( this.autofocus() )
      this.attr('autofocus', true);
    
    if ( this.checked() )
      this.attr('checked', true);
    
    if ( this.disabled() )
      this.attr('disabled', true);
    
    if ( this.formnovalidate() )
      this.attr('formnovalidate', true);
    
    if ( this.multiple() )
      this.attr('multiple', true);
    
    if ( this.readonly() )
      this.attr('readonly', true);
    
    if ( this.required() )
      this.attr('required', true);
    
    this.tag('input');
    
    return super.render(indent);
  }
}

module.exports.Input = Input;

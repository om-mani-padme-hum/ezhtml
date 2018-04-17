/** Require local modules */
const element = require('./element');

/**
 * @class Input
 * @extends Element
 * @added v0.1.0
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
   * Accept types getter/setter.
   * @signature accept() Get the accept types
   * @signature accept(string) Set the accept types as (string)
   * @return This object for call chaining
   */
  accept(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._accept;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._accept = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Input.accept(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Alternate text getter/setter.
   * @signature alt() Get the alternate text
   * @signature alt(string) Set the alternate text as (string)
   * @return This object for call chaining
   */
  alt(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._alt;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._alt = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Input.alt(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Autocomplete setting getter/setter.
   * @signature autocomplete() Get the autocomplete setting
   * @signature autocomplete(string) Set the autocomplete setting as (string)
   * @return This object for call chaining
   */
  autocomplete(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._autocomplete;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._autocomplete = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Input.autocomplete(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Auto-focus boolean getter/setter.
   * @signature autofocus() Get the auto-focus boolean
   * @signature autofocus(boolean) Set the auto-focus boolean as (boolean)
   * @return This object for call chaining
   */
  autofocus(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._autofocus;
    
    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._autofocus = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Input.autofocus(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Checked boolean getter/setter.
   * @signature checked() Get the checked boolean
   * @signature checked(boolean) Set the checked boolean as (boolean)
   * @return This object for call chaining
   */
  checked(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._checked;
    
    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._checked = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Input.checked(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Text direction getter/setter.
   * @signature dirname() Get the text direction
   * @signature dirname(string) Set the text direction as (string)
   * @return This object for call chaining
   */
  dirname(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._dirname;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._dirname = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Input.dirname(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
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
      throw new TypeError(`Input.disabled(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Form getter/setter.
   * @signature form() Get the form
   * @signature form(string) Set the form as (string)
   * @return This object for call chaining
   */
  form(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._form;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._form = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Input.form(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Form action getter/setter.
   * @signature formaction() Get the form action
   * @signature formaction(string) Set the form action as (string)
   * @return This object for call chaining
   */
  formaction(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._formaction;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._formaction = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Input.formaction(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Form encoding type getter/setter.
   * @signature formenctype() Get the form encoding type
   * @signature formenctype(string) Set the form encoding type as (string)
   * @return This object for call chaining
   */
  formenctype(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._formenctype;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._formenctype = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Input.formenctype(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Form method getter/setter.
   * @signature formmethod() Get the form method
   * @signature formmethod(string) Set the form method as (string)
   * @return This object for call chaining
   */
  formmethod(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._formmethod;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._formmethod = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Input.formmethod(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Form no-validate boolean getter/setter.
   * @signature formnovalidate() Get the form no-validate boolean
   * @signature formnovalidate(boolean) Set the form no-validate boolean as (boolean)
   * @return This object for call chaining
   */
  formnovalidate(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._formnovalidate;
    
    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._formnovalidate = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Input.formnovalidate(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Form target getter/setter.
   * @signature formtarget() Get the form target
   * @signature formtarget(string) Set the form target as (string)
   * @return This object for call chaining
   */
  formtarget(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._formtarget;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._formtarget = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Input.formtarget(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Height getter/setter.
   * @signature height() Get the height
   * @signature height(number) Set the height as (number)
   * @return This object for call chaining
   */
  height(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._height;
    
    /** Setter */
    else if ( typeof arg1 == 'number' )
      this._height = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Input.height(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * List getter/setter.
   * @signature list() Get the list
   * @signature list(string) Set the list as (string)
   * @return This object for call chaining
   */
  list(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._list;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._list = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Input.list(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Max value getter/setter.
   * @signature max() Get the max value
   * @signature max(string|number) Set the max value as (string|number)
   * @return This object for call chaining
   */
  max(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._max;
    
    /** Setter */
    else if ( typeof arg1 == 'string' || typeof arg1 == 'number' )
      this._max = arg1.toString(); 
    
    /** Handle errors */
    else
      throw new TypeError(`Input.max(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Max length getter/setter.
   * @signature maxlength() Get the max length
   * @signature maxlength(string|number) Set the max length as (string|number)
   * @return This object for call chaining
   */
  maxlength(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._maxlength;
    
    /** Setter */
    else if ( typeof arg1 == 'string' || typeof arg1 == 'number' )
      this._maxlength = arg1.toString(); 
    
    /** Handle errors */
    else
      throw new TypeError(`Input.maxlength(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Min value getter/setter.
   * @signature min() Get the min value
   * @signature min(string|number) Set the min value as (string|number)
   * @return This object for call chaining
   */
  min(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._min;
    
    /** Setter */
    else if ( typeof arg1 == 'string' || typeof arg1 == 'number' )
      this._min = arg1.toString(); 
    
    /** Handle errors */
    else
      throw new TypeError(`Input.min(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Multiple boolean getter/setter.
   * @signature multiple() Get the multiple boolean
   * @signature multiple(boolean) Set the multiple boolean as (boolean)
   * @return This object for call chaining
   */
  multiple(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._multiple;
    
    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._multiple = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Input.multiple(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
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
      throw new TypeError(`Input.name(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Pattern getter/setter.
   * @signature pattern() Get the pattern
   * @signature pattern(string) Set the pattern as (string)
   * @return This object for call chaining
   */
  pattern(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._pattern;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._pattern = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Input.pattern(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Placeholder getter/setter.
   * @signature placeholder() Get the placeholder
   * @signature placeholder(string) Set the placeholder as (string)
   * @return This object for call chaining
   */
  placeholder(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._placeholder;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._placeholder = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Input.placeholder(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Read-only boolean getter/setter.
   * @signature readonly() Get the read-only boolean
   * @signature readonly(boolean) Set the read-only boolean as (boolean)
   * @return This object for call chaining
   */
  readonly(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._readonly;
    
    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._readonly = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Input.readonly(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Required boolean getter/setter.
   * @signature required() Get the required boolean
   * @signature required(boolean) Set the required boolean as (boolean)
   * @return This object for call chaining
   */
  required(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._required;
    
    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._required = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Input.required(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Size getter/setter.
   * @signature size() Get the size
   * @signature size(number) Set the size as (number)
   * @return This object for call chaining
   */
  size(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._size;
    
    /** Setter */
    else if ( typeof arg1 == 'number' )
      this._size = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Input.size(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Source getter/setter.
   * @signature src() Get the source
   * @signature src(string) Set the source as (string)
   * @return This object for call chaining
   */
  src(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._src;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._src = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Input.src(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Step getter/setter.
   * @signature step() Get the step
   * @signature step(string|number) Set the step as (string|number)
   * @return This object for call chaining
   */
  step(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._step;
    
    /** Setter */
    else if ( typeof arg1 == 'string' || typeof arg1 == 'number' )
      this._step = arg1.toString();
    
    /** Handle errors */
    else
      throw new TypeError(`Input.step(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Type getter/setter.
   * @signature type() Get the type
   * @signature type(string) Set the type as (string)
   * @return This object for call chaining
   */
  type(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._type;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._type = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Input.type(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Value getter/setter.
   * @signature value() Get the value
   * @signature value(string|number) Set the value as (string)
   * @return This object for call chaining
   */
  value(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._value;
    
    /** Setter */
    else if ( typeof arg1 == 'string' || typeof arg1 == 'number' )
      this._value = arg1.toString(); 
    
    /** Handle errors */
    else
      throw new TypeError(`Input.value(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Width getter/setter.
   * @signature width() Get the width
   * @signature width(number) Set the width as (number)
   * @return This object for call chaining
   */
  width(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._width;
    
    /** Setter */
    else if ( typeof arg1 == 'number' )
      this._width = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Input.width(): Invalid signature (${typeof arg1}).`);
    
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

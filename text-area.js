/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class TextArea
 * @extends ContainerElement
 * @added v0.1.0
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
      throw new TypeError(`TextArea.autofocus(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Columns getter/setter.
   * @signature cols() Get the columns
   * @signature cols(number) Set the columns as (number)
   * @return This object for call chaining
   */
  cols(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._cols;
    
    /** Setter */
    else if ( typeof arg1 == 'number' )
      this._cols = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`TextArea.cols(): Invalid signature (${typeof arg1}).`);
    
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
      throw new TypeError(`TextArea.dirname(): Invalid signature (${typeof arg1}).`);
    
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
      throw new TypeError(`TextArea.disabled(): Invalid signature (${typeof arg1}).`);
    
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
      throw new TypeError(`TextArea.form(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Max length getter/setter.
   * @signature maxlength() Get the max length
   * @signature maxlength(number) Set the max length as (number)
   * @return This object for call chaining
   */
  maxlength(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._maxlength;
    
    /** Setter */
    else if ( typeof arg1 == 'number' )
      this._maxlength = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`TextArea.maxlength(): Invalid signature (${typeof arg1}).`);
    
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
      throw new TypeError(`TextArea.name(): Invalid signature (${typeof arg1}).`);
    
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
      throw new TypeError(`TextArea.placeholder(): Invalid signature (${typeof arg1}).`);
    
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
      throw new TypeError(`TextArea.readonly(): Invalid signature (${typeof arg1}).`);
    
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
      throw new TypeError(`TextArea.required(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Rows getter/setter.
   * @signature rows() Get the rows
   * @signature rows(number) Set the rows as (number)
   * @return This object for call chaining
   */
  rows(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._rows;
    
    /** Setter */
    else if ( typeof arg1 == 'number' )
      this._rows = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`TextArea.rows(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Wrap type getter/setter.
   * @signature wrap() Get the wrap type
   * @signature wrap(string) Set the wrap type as (string)
   * @return This object for call chaining
   */
  wrap(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._wrap;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._wrap = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`TextArea.wrap(): Invalid signature (${typeof arg1}).`);
    
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

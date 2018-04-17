/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class Select
 * @extends ContainerElement
 * @added v0.1.0
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
    
    this.allowedContent(['OptGroup', 'Option']);
    this.autofocus(data.autofocus || false);
    this.disabled(data.disabled || false);
    this.form(data.form || '');
    this.multiple(data.multiple || false);
    this.name(data.name || '');
    this.required(data.required || false);
    this.size(data.size || 0);
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
      throw new TypeError(`Select.autofocus(): Invalid signature (${typeof arg1}).`);
    
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
      throw new TypeError(`Select.disabled(): Invalid signature (${typeof arg1}).`);
    
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
      throw new TypeError(`Select.form(): Invalid signature (${typeof arg1}).`);
    
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
      throw new TypeError(`Select.multiple(): Invalid signature (${typeof arg1}).`);
    
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
      throw new TypeError(`Select.name(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Find option by value.
   * @signature option(string) Get option with value matching (string)
   * @return The found option
   */
  option(arg1) {
    let element = null;
    
    const getOptionByValue = (parent, value) => {
      if ( typeof parent.value == 'function' && parent.value() == value )   
        element = parent;
      
      if ( typeof parent.content == 'function' && typeof parent.content() == 'object' && parent.content().constructor.name == 'Array' ) {
        parent.content().forEach((item) => {
          getOptionByValue(item, value);
        });
      }
    };

    this.content().forEach((item) => {
      getOptionByValue(item, arg1);
    });
        
    return element;
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
      throw new TypeError(`Select.required(): Invalid signature (${typeof arg1}).`);
    
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
      throw new TypeError(`Select.size(): Invalid signature (${typeof arg1}).`);
    
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

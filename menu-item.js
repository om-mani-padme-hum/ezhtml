/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class MenuItem
 * @extends ContainerElement
 * @added v0.1.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML menu item elements.
 */
class MenuItem extends containerElement.ContainerElement {
  /**
   * @signature new MenuItem([data])
   * @added v0.1.0
   * @param data Object
   * @returns MenuItem
   * @description Returns a new [MenuItem] instance, initializing with any key/value pairs provided in `data` with keys 
   * that match setter method names.
   */
  constructor(data = {}) {
    super(data);
    
    this.label(data.label || '');
    this.type(data.type || '');
    this.command(data.command || '');
    this.icon(data.icon || '');
    this.radiogroup(data.radiogroup || '');
    this.disabled(data.disabled || false);
    this.checked(data.checked || false);
    this.default(data.default || false);
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
      throw new TypeError(`MenuItem.label(): Invalid signature (${typeof arg1}).`);
    
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
      throw new TypeError(`MenuItem.type(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Command getter/setter.
   * @signature command() Get the command
   * @signature command(string) Set the command as (string)
   * @return This object for call chaining
   */
  command(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._command;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._command = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`MenuItem.command(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Icon URL getter/setter.
   * @signature icon() Get the icon URL
   * @signature icon(string) Set the icon URL as (string)
   * @return This object for call chaining
   */
  icon(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._icon;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._icon = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`MenuItem.icon(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Radio group getter/setter.
   * @signature radiogroup() Get the radio group
   * @signature radiogroup(string) Set the radio group as (string)
   * @return This object for call chaining
   */
  radiogroup(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._radiogroup;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._radiogroup = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`MenuItem.radiogroup(): Invalid signature (${typeof arg1}).`);
    
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
      throw new TypeError(`MenuItem.disabled(): Invalid signature (${typeof arg1}).`);
    
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
      throw new TypeError(`MenuItem.checked(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Default boolean getter/setter.
   * @signature default() Get the default boolean
   * @signature default(boolean) Set the default boolean as (boolean)
   * @return This object for call chaining
   */
  default(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._default;
    
    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._default = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`MenuItem.default(): Invalid signature (${typeof arg1}).`);
    
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
    
    if ( this.type().length > 0 )
      this.attr('type', this.type());
    
    if ( this.command().length > 0 )
      this.attr('command', this.command());
    
    if ( this.icon().length > 0 )
      this.attr('icon', this.icon());
    
    if ( this.type() == 'radio' && this.radiogroup().length > 0 )
      this.attr('radiogroup', this.radiogroup());
    
    if ( this.disabled() )
      this.attr('disabled', true);
    
    if ( this.checked() )
      this.attr('checked', true);
    
    if ( this.default() )
      this.attr('default', true);
    
    this.tag('menuitem');
    
    return super.render(indent);
  }
}

module.exports.MenuItem = MenuItem;

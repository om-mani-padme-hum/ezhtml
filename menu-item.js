/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class ezhtml.MenuItem
 * @extends ContainerElement
 * @added v0.1.0
 * @updated v0.2.0
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
   * @signature label()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the name of the menu item, as shown to the user.
   *
   * @signature label(text)
   * @added v0.1.0
   * @updated v0.2.0
   * @param text string
   * @returns this
   * @throws TypeError if `text` is not a valid [string]
   * @description Sets the name of the menu item, as shown to the user.
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
   * @signature type()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the type of menu item, default is `command`, can be `checkbox`, `command`, `radio`.
   *
   * @signature type(type)
   * @added v0.1.0
   * @updated v0.2.0
   * @param type string
   * @returns this
   * @throws TypeError if `type` is not a valid [string]
   * @description Sets the type of menu item, default is `command`, can be `checkbox`, `command`, `radio`.
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
   * @signature command()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the abstract command role that this menu item plays.
   *
   * @signature command(role)
   * @added v0.1.0
   * @updated v0.2.0
   * @param role string
   * @returns this
   * @throws TypeError if `role` is not a valid [string]
   * @description Sets the abstract command role that this menu item plays.
   */
  command(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._command;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._command = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.command(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.command(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature icon()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the URL to be used for the menu item icon.
   *
   * @signature icon(url)
   * @added v0.1.0
   * @updated v0.2.0
   * @param url string
   * @returns this
   * @throws TypeError if `url` is not a valid [string]
   * @description Sets the URL to be used for the menu item icon.
   */
  icon(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._icon;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._icon = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.icon(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.icon(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature radiogroup()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the name of the group of commands that will be toggled when the menu item itself is toggled, only for type `radio`.
   *
   * @signature radiogroup(group)
   * @added v0.1.0
   * @updated v0.2.0
   * @param group string
   * @returns this
   * @throws TypeError if `group` is not a valid [string]
   * @description Sets the name of the group of commands that will be toggled when the menu item itself is toggled, only for type `radio`.
   */
  radiogroup(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._radiogroup;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._radiogroup = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.radiogroup(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.radiogroup(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature disabled()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns boolean
   * @description Gets a boolean indicating whether this menu item is disabled.
   *
   * @signature disabled(flag)
   * @added v0.1.0
   * @updated v0.2.0
   * @param flag boolean
   * @returns this
   * @throws TypeError if `flag` is not a valid [boolean]
   * @description Sets a boolean indicating whether this menu item is disabled.
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
   * @signature checked()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns boolean
   * @description Gets a boolean indicating whether this menu item is active.
   *
   * @signature checked(flag)
   * @added v0.1.0
   * @updated v0.2.0
   * @param flag boolean
   * @returns this
   * @throws TypeError if `flag` is not a valid [boolean]
   * @description Sets a boolean indicating whether this menu item is active.
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
   * @signature default()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns boolean
   * @description Gets a boolean indicating whether this is the default menu item.
   *
   * @signature default(flag)
   * @added v0.1.0
   * @updated v0.2.0
   * @param flag boolean
   * @returns this
   * @throws TypeError if `flag` is not a valid [boolean]
   * @description Sets a boolean indicating whether this is the default menu item.
   */
  default(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._default;

    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._default = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.default(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.default(${arg1.constructor.name}): Invalid signature.`);

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

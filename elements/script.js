/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class ezhtml.Script
 * @extends ContainerElement
 * @added v0.1.0
 * @updated v0.2.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML script elements.
 */
class Script extends containerElement.ContainerElement {
  /**
   * @signature new Script([data])
   * @added v0.1.0
   * @param data Object
   * @returns Script
   * @description Returns a new [Script] instance, initializing with any key/value pairs provided in `data` with keys 
   * that match setter method names.
   */
  constructor(data = {}) {    
    super(data);
    
    this.allowedContent(['Text', 'Function']);
    this.asyncScript(data.asyncScript || false);
    this.charset(data.charset || '');
    this.defer(data.defer || false);
    this.src(data.src || '');
    this.type(data.type || '');
  }
  
  /**
   * @signature asyncScript()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns boolean
   * @description Gets a boolean indicating whether the script should be executed asynchronously (only for external scripts).
   *
   * @signature asyncScript(flag)
   * @added v0.1.0
   * @updated v0.2.0
   * @param flag boolean
   * @returns this
   * @throws TypeError if `flag` is not a valid [boolean]
   * @description Sets a boolean indicating whether the script should be executed asynchronously (only for external scripts).
   */
  asyncScript(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._asyncScript;

    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._asyncScript = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.asyncScript(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.asyncScript(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature charset()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the character encoding used by the script.
   *
   * @signature charset(encoding)
   * @added v0.1.0
   * @updated v0.2.0
   * @param encoding string
   * @returns this
   * @throws TypeError if `encoding` is not a valid [string]
   * @description Sets the character encoding used by the script.
   */
  charset(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._charset;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._charset = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.charset(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.charset(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature defer()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns boolean
   * @description Gets a boolean indicating whether the script should be executed when the page has finished parsing (only for external scripts).
   *
   * @signature defer(flag)
   * @added v0.1.0
   * @updated v0.2.0
   * @param flag boolean
   * @returns this
   * @throws TypeError if `flag` is not a valid [boolean]
   * @description Sets a boolean indicating whether the script should be executed when the page has finished parsing (only for external scripts).
   */
  defer(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._defer;

    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._defer = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.defer(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.defer(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature src()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the URL of the external script file.
   *
   * @signature src(url)
   * @added v0.1.0
   * @updated v0.2.0
   * @param url string
   * @returns this
   * @throws TypeError if `url` is not a valid [string]
   * @description Sets the URL of the external script file.
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
   * @signature type()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the media type of the script.
   *
   * @signature type(type)
   * @added v0.1.0
   * @updated v0.2.0
   * @param type string
   * @returns this
   * @throws TypeError if `type` is not a valid [string]
   * @description Sets the media type of the script.
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
   * @signature render(indent) 
   * @added v0.1.0
   * @param indent number
   * @return string Rendered HTML
   * @description Render this element with `indent` spaces of indentation before each line.
   */
  render(indent) {    
    if ( this.charset().length > 0 )
      this.attr('charset', this.charset());
    
    if ( this.src().length > 0 )
      this.attr('src', this.src());
    
    if ( this.type().length > 0 )
      this.attr('type', this.type());
    
    if ( this.asyncScript() )
      this.attr('async', true);
    
    if ( this.defer() )
      this.attr('defer', true);
    
    this.tag('script');
    
    return super.render(indent);
  }
}

module.exports.Script = Script;

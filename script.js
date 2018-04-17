/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class Script
 * @extends ContainerElement
 * @added v0.1.0
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
   * Async boolean getter/setter.
   * @signature asyncScript() Get the async boolean
   * @signature asyncScript(boolean) Set the async boolean as (boolean)
   * @return This object for call chaining
   */
  asyncScript(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._asyncScript;
    
    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._asyncScript = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Script.asyncScript(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }

  /**
   * Charset getter/setter.
   * @signature charset() Get the charset
   * @signature charset(string) Set the charset as (string)
   * @return This object for call chaining
   */
  charset(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._charset;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._charset = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Script.charset(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Defer boolean getter/setter.
   * @signature defer() Get the defer boolean
   * @signature defer(boolean) Set the defer boolean as (boolean)
   * @return This object for call chaining
   */
  defer(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._defer;
    
    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._defer = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Script.defer(): Invalid signature (${typeof arg1}).`);
    
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
      throw new TypeError(`Script.src(): Invalid signature (${typeof arg1}).`);
    
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
      throw new TypeError(`Script.type(): Invalid signature (${typeof arg1}).`);
    
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

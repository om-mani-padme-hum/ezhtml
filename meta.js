/** Require local modules */
const element = require('./element');

/**
 * @class Meta
 * @extends Element
 * @added v0.1.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML meta elements.
 */
class Meta extends element.Element {
  /**
   * @signature new Meta([data])
   * @added v0.1.0
   * @param data Object
   * @returns Meta
   * @description Returns a new [Meta] instance, initializing with any key/value pairs provided in `data` with keys 
   * that match setter method names.
   */
  constructor(data = {}) {
    super(data);
    
    this.charset(data.charset || '');
    this.name(data.name || '');
    this.content(data.content || '');
    this.httpEquiv(data.httpEquiv || '');
  }
  
  /**
   * Character set getter/setter.
   * @signature charset() Get the character set
   * @signature charset(string) Set the character set as (string)
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
      throw new TypeError(`Meta.charset(): Invalid signature (${typeof arg1}).`);
    
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
      throw new TypeError(`Meta.name(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Content attribute getter/setter.
   * @signature content() Get the content attribute
   * @signature content(string) Set the content attribute as (string)
   * @return This object for call chaining
   */
  content(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._content;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._content = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Meta.content(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Pragma directive getter/setter.
   * @signature httpEquiv() Get the pragma directive
   * @signature httpEquiv(string) Set the pragma directive as (string)
   * @return This object for call chaining
   */
  httpEquiv(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._httpEquiv;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._httpEquiv = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Meta.httpEquiv(): Invalid signature (${typeof arg1}).`);
    
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
    
    if ( this.name().length > 0 )
      this.attr('name', this.name());
    
    if ( this.content().length > 0 )
      this.attr('content', this.content());
    
    if ( this.httpEquiv().length > 0 )
      this.attr('http-equiv', this.httpEquiv());
    
    this.tag('meta');
    
    return super.render(indent);
  }
}

module.exports.Meta = Meta;

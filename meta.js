/** Require local modules */
const element = require('./element');

/**
 * @class ezhtml.Meta
 * @extends Element
 * @added v0.1.0
 * @updated v0.2.0
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
   * @signature charset()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the character encoding for the HTML document.
   *
   * @signature charset(encoding)
   * @added v0.1.0
   * @updated v0.2.0
   * @param encoding string
   * @returns this
   * @throws TypeError if `encoding` is not a valid [string]
   * @description Sets the character encoding for the HTML document.
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
   * @signature name()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the name of the metadata.
   *
   * @signature name(name)
   * @added v0.1.0
   * @updated v0.2.0
   * @param name string
   * @returns this
   * @throws TypeError if `name` is not a valid [string]
   * @description Sets the name of the metadata.
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
   * @signature content()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the value associated with the http-equiv or name attribute.
   *
   * @signature content(content)
   * @added v0.1.0
   * @updated v0.2.0
   * @param content string
   * @returns this
   * @throws TypeError if `content` is not a valid [string]
   * @description Sets the value associated with the http-equiv or name attribute.
   */
  content(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._content;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._content = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.content(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.content(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature httpEquiv()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the HTTP header representing the information/value of the content attribute, can be `content-type`, `default-style`, or `refresh`.
   *
   * @signature httpEquiv(header)
   * @added v0.1.0
   * @updated v0.2.0
   * @param header string
   * @returns this
   * @throws TypeError if `header` is not a valid [string]
   * @description Sets the HTTP header representing the information/value of the content attribute, can be `content-type`, `default-style`, or `refresh`.
   */
  httpEquiv(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._httpEquiv;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._httpEquiv = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.httpEquiv(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.httpEquiv(${arg1.constructor.name}): Invalid signature.`);

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

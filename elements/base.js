/** Require local modules */
const element = require('./element');

/**
 * @class ezhtml.Base
 * @extends Element
 * @added v0.1.0
 * @updated v0.2.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML base elements.
 */
class Base extends element.Element {
  /**
   * @signature new Base([data])
   * @added v0.1.0
   * @param data Object
   * @returns Base
   * @description Returns a new [Base] instance, initializing with any key/value pairs provided in `data` with keys 
   * that match setter method names.
   */
  constructor(data = {}) {    
    this.href(data.href || '');
    this.target(data.target || '');
  }
  
  /**
   * @signature href()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the base URL for all relative URLs in the page.
   *
   * @signature href(url)
   * @added v0.1.0
   * @updated v0.2.0
   * @param url string
   * @returns this
   * @throws TypeError if `url` is not a valid [string]
   * @description Sets the base URL for all relative URLs in the page.
   */
  href(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._href;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._href = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.href(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.href(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature target()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the default target for all hyperlinks and forms in the page.
   *
   * @signature target(method)
   * @added v0.1.0
   * @updated v0.2.0
   * @param method string
   * @returns this
   * @throws TypeError if `method` is not a valid [string]
   * @description Sets the default target for all hyperlinks and forms in the page.
   */
  target(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._target;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._target = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.target(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.target(${arg1.constructor.name}): Invalid signature.`);

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
    if ( this.href().length > 0 )
      this.attr('href', this.href());
    
    if ( this.target().length > 0 )
      this.attr('target', this.target());
    
    this.tag('base');
    
    return super.render(indent);
  }
}

module.exports.Base = Base;

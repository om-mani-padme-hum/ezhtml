/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class HTML
 * @extends ContainerElement
 * @added v0.1.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML HTML elements.
 */
class HTML extends containerElement.ContainerElement {
  /**
   * @signature new HTML([data])
   * @added v0.1.0
   * @param data Object
   * @returns HTML
   * @description Returns a new [HTML] instance, initializing with any key/value pairs provided in `data` with keys 
   * that match setter method names.
   */
  constructor(data = {}) {
    super(data);
    
    this.allowedContent(['Head', 'Body']);
    this.lang(data.lang || '');
  }
  
  /**
   * Lang attribute getter/setter.
   * @signature lang() Get the lang attribute
   * @signature lang(string) Set the lang attribute as (string)
   * @return This object for call chaining
   */
  lang(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._lang;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._lang = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Html.lang(): Invalid signature (${typeof arg1}).`);
    
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
  render(indent = 0) {
    if ( this.lang().length > 0 )
      this.attr('lang', this.lang());
    
    this.tag('html');
    
    return super.render(indent);
  }
}

module.exports.HTML = HTML;

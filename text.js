/** Require local modules */
const child = require('./child');

/**
 * @class Text
 * @extends Child
 * @added v0.1.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering plain text in HTML elements.
 */
class Text extends child.Child {
  /**
   * @signature new Text([data])
   * @added v0.1.0
   * @param data Object
   * @returns Text
   * @description Returns a new [Text] instance, initializing with any key/value pairs provided in `data` with keys 
   * that match setter method names.
   */
  constructor(data = {}) {
    super(data);
    
    this.text(data.text || '');
  }
  
  /**
   * Text getter/setter.
   * @signature text() Get the text
   * @signature text(string|number) Set the text as (string|number)
   * @return This object for call chaining
   */
  text(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._text;
    
    /** Setter */
    else if ( typeof arg1 == 'string' || typeof arg1 == 'number' )
      this._text = arg1.toString(); 
    
    /** Handle errors */
    else
      throw new TypeError(`Text.text(): Invalid signature (${typeof arg1}).`);
    
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
    return ' '.repeat(indent) + this.text();
  }
}

module.exports.Text = Text;

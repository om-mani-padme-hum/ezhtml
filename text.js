/** Require local modules */
const child = require('./child');

/**
 * @class ezhtml.Text
 * @extends Child
 * @added v0.1.0
 * @updated v0.2.0
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
   * @signature text()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the plain text content of this text pseudo-element.
   *
   * @signature text(text)
   * @added v0.1.0
   * @updated v0.2.0
   * @param text string
   * @returns this
   * @throws TypeError if `text` is not a valid [string]
   * @description Sets the plain text content of this text pseudo-element.
   */
  text(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._text;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._text = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.text(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.text(${arg1.constructor.name}): Invalid signature.`);

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

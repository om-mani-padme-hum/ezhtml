/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class Label
 * @extends ContainerElement
 * @added v0.1.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML label elements.
 */
class Label extends containerElement.ContainerElement {
  /**
   * @signature new Label([data])
   * @added v0.1.0
   * @param data Object
   * @returns Label
   * @description Returns a new [Label] instance, initializing with any key/value pairs provided in `data` with keys 
   * that match setter method names.
   */
  constructor(data = {}) {
    super(data);
    
    this.allowedContent(['Text', 'Input', 'Select', 'TextArea']);
    this.for(data.for || '');
    this.form(data.form || '');
  }
  
  /**
   * For ID getter/setter.
   * @signature for() Get the for ID
   * @signature for(string) Set the for ID as (string)
   * @return This object for call chaining
   */
  for(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._for;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._for = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Label.for(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Form ID getter/setter.
   * @signature form() Get the form ID
   * @signature form(string) Set the form ID as (string)
   * @return This object for call chaining
   */
  form(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._form;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._form = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Label.form(): Invalid signature (${typeof arg1}).`);
    
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
    if ( this.for().length > 0 )
      this.attr('for', this.for());
    
    if ( this.form().length > 0 )
      this.attr('form', this.form());
    
    this.tag('label');
    
    return super.render(indent);
  }
}

module.exports.Label = Label;

/** Require local modules */
const element = require('./element');

/**
 * @class Output
 * @extends Element
 * @added v0.1.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML output elements.
 */
class Output extends element.Element {
  /**
   * @signature new Output([data])
   * @added v0.1.0
   * @param data Object
   * @returns Output
   * @description Returns a new [Output] instance, initializing with any key/value pairs provided in `data` with keys 
   * that match setter method names.
   */
  constructor(data = {}) {
    super(data);
    
    this.for(data.for || '');
    this.form(data.form || '');
    this.name(data.name || '');
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
      throw new TypeError(`Output.for(): Invalid signature (${typeof arg1}).`);
    
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
      throw new TypeError(`Output.form(): Invalid signature (${typeof arg1}).`);
    
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
      throw new TypeError(`Output.name(): Invalid signature (${typeof arg1}).`);
    
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
    
    if ( this.name().length > 0 )
      this.attr('name', this.name());
    
    this.tag('output');
    
    return super.render(indent);
  }
}

module.exports.Output = Output;

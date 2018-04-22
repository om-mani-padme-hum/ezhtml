/** Require local modules */
const element = require('./element');

/**
 * @class ezhtml.Output
 * @extends Element
 * @added v0.1.0
 * @added v0.2.0
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
   * @signature for()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets a space delimited list of input ids that are used in computing this output.
   *
   * @signature for(elementIds)
   * @added v0.1.0
   * @updated v0.2.0
   * @param elementIds string
   * @returns this
   * @throws TypeError if `elementIds` is not a valid [string]
   * @description Sets a space delimited list of input ids that are used in computing this output.
   */
  for(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._for;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._for = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.for(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.for(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature form()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the id of the form that this output belongs to.
   *
   * @signature form(formId)
   * @added v0.1.0
   * @updated v0.2.0
   * @param formId string
   * @returns this
   * @throws TypeError if `formId` is not a valid [string]
   * @description Sets the id of the form that this output belongs to.
   */
  form(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._form;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._form = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.form(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.form(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }
  
  /**
   * @signature name()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the name of this output.
   *
   * @signature name(name)
   * @added v0.1.0
   * @updated v0.2.0
   * @param name string
   * @returns this
   * @throws TypeError if `name` is not a valid [string]
   * @description Sets the name of this output.
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

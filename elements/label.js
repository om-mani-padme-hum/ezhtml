/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class ezhtml.Label
 * @extends ContainerElement
 * @added v0.1.0
 * @updated v0.2.0
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
   * @signature for()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the id of the input this label is for.
   *
   * @signature for(elementId)
   * @added v0.1.0
   * @updated v0.2.0
   * @param elementId string
   * @returns this
   * @throws TypeError if `elementId` is not a valid [string]
   * @description Sets the id of the input this label is for.
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
   * @description Gets the id of the form that this label belongs to.
   *
   * @signature form(formId)
   * @added v0.1.0
   * @updated v0.2.0
   * @param formId string
   * @returns this
   * @throws TypeError if `formId` is not a valid [string]
   * @description Sets the id of the form that this label belongs to.
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

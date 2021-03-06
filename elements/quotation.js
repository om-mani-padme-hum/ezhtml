/**
 * @class ezhtml.Quotation
 * @extends ContainerElement
 * @added v0.1.0
 * @updated v0.2.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML quotation elements.
 *
 * @signature new Quotation([data])
 * @added v0.1.0
 * @param data Object
 * @returns Quotation
 * @description Returns a new [Quotation] instance, initializing with any key/value pairs provided in `data` with keys 
 * that match setter method names.
 *
 * @signature cite()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets a URL to the source of the quotation.
 *
 * @signature cite(url)
 * @added v0.1.0
 * @updated v0.2.0
 * @param url string
 * @returns this
 * @throws TypeError if `url` is not a valid [string]
 * @description Sets a URL to the source of the quotation.
 *
 * @signature render(indent) 
 * @added v0.1.0
 * @param indent number
 * @return string Rendered HTML
 * @description Render this element with `indent` spaces of indentation before each line.
 */

/** Require local modules */
const containerElement = require('./container-element');
const ezelement = require('../ezelement');

/** Create the ezelement class configuration */
const config = {
  className: 'Quotation',
  tag: 'q',
  extends: containerElement.ContainerElement,
  extendsConfig: containerElement.config,
  properties: [
    { name: 'cite', type: 'string' }
  ]
};

/** Create the class */
const Quotation = ezelement.createClass(config);

/** Export the class and class config */
module.exports.Quotation = Quotation;
module.exports.config = config;

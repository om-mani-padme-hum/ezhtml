/**
 * @class ezhtml.Menu
 * @extends ContainerElement
 * @added v0.1.0
 * @updated v0.2.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML menu elements.
 *
 * @signature new Menu([data])
 * @added v0.1.0
 * @param data Object
 * @returns Menu
 * @description Returns a new [Menu] instance, initializing with any key/value pairs provided in `data` with keys 
 * that match setter method names.
 *
 * @signature label()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the name of the menu, as shown to the user.
 *
 * @signature label(text)
 * @added v0.1.0
 * @updated v0.2.0
 * @param text string
 * @returns this
 * @throws TypeError if `text` is not a valid [string]
 * @description Sets the name of the menu, as shown to the user.
 *
 * @signature render(indent) 
 * @added v0.1.0
 * @param indent number
 * @return string Rendered HTML
 * @description Render this element with `indent` spaces of indentation before each line.
 *
 * @signature type()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the type of menu, can be `list`, `toolbar`, `context`.
 *
 * @signature type(type)
 * @added v0.1.0
 * @updated v0.2.0
 * @param type string
 * @returns this
 * @throws TypeError if `type` is not a valid [string]
 * @description Sets the type of menu, can be `list`, `toolbar`, `context`.
 */

/** Require local modules */
const containerElement = require('./container-element');
const ezelement = require('../ezelement');

/** Create the ezelement class configuration */
const config = {
  className: 'Menu',
  tag: 'menu',
  extends: containerElement.ContainerElement,
  extendsConfig: containerElement.config,
  properties: [
    { name: 'label', type: 'string' },
    { name: 'type', type: 'string' }
  ]
};

/** Create the class */
ezelement.createClass(config);

/** Export the class and class config */
module.exports.Menu = Menu;
module.exports.config = config;

/**
 * @class ezhtml.HeadingGroup
 * @extends ContainerElement
 * @added v0.1.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML heading group elements.
 *
 * @signature new HeadingGroup([data])
 * @added v0.1.0
 * @param data Object
 * @returns HeadingGroup
 * @description Returns a new [HeadingGroup] instance, initializing with any key/value pairs provided in `data` with keys 
 * that match setter method names.
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
  className: 'HeadingGroup',
  tag: 'hgroup',
  extends: containerElement.ContainerElement,
  extendsConfig: containerElement.config
};

/** Create the class */
ezelement.createClass(config);

/** Export the class and class config */
module.exports.HeadingGroup = HeadingGroup;
module.exports.config = config;

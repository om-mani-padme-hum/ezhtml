/**
 * @class ezhtml.MenuItem
 * @extends ContainerElement
 * @added v0.1.0
 * @updated v0.2.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML menu item elements.
 *
 * @signature new MenuItem([data])
 * @added v0.1.0
 * @param data Object
 * @returns MenuItem
 * @description Returns a new [MenuItem] instance, initializing with any key/value pairs provided in `data` with keys 
 * that match setter method names.
 *
 * @signature checked()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns boolean
 * @description Gets a boolean indicating whether this menu item is active.
 *
 * @signature checked(flag)
 * @added v0.1.0
 * @updated v0.2.0
 * @param flag boolean
 * @returns this
 * @throws TypeError if `flag` is not a valid [boolean]
 * @description Sets a boolean indicating whether this menu item is active.
 *
 * @signature command()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the abstract command role that this menu item plays.
 *
 * @signature command(role)
 * @added v0.1.0
 * @updated v0.2.0
 * @param role string
 * @returns this
 * @throws TypeError if `role` is not a valid [string]
 * @description Sets the abstract command role that this menu item plays.
 *
 * @signature default()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns boolean
 * @description Gets a boolean indicating whether this is the default menu item.
 *
 * @signature default(flag)
 * @added v0.1.0
 * @updated v0.2.0
 * @param flag boolean
 * @returns this
 * @throws TypeError if `flag` is not a valid [boolean]
 * @description Sets a boolean indicating whether this is the default menu item.
 *
 * @signature disabled()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns boolean
 * @description Gets a boolean indicating whether this menu item is disabled.
 *
 * @signature disabled(flag)
 * @added v0.1.0
 * @updated v0.2.0
 * @param flag boolean
 * @returns this
 * @throws TypeError if `flag` is not a valid [boolean]
 * @description Sets a boolean indicating whether this menu item is disabled.
 *
 * @signature icon()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the URL to be used for the menu item icon.
 *
 * @signature icon(url)
 * @added v0.1.0
 * @updated v0.2.0
 * @param url string
 * @returns this
 * @throws TypeError if `url` is not a valid [string]
 * @description Sets the URL to be used for the menu item icon.
 *
 * @signature label()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the name of the menu item, as shown to the user.
 *
 * @signature label(text)
 * @added v0.1.0
 * @updated v0.2.0
 * @param text string
 * @returns this
 * @throws TypeError if `text` is not a valid [string]
 * @description Sets the name of the menu item, as shown to the user.
 *
 * @signature radiogroup()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the name of the group of commands that will be toggled when the menu item itself is toggled, only for type `radio`.
 *
 * @signature radiogroup(group)
 * @added v0.1.0
 * @updated v0.2.0
 * @param group string
 * @returns this
 * @throws TypeError if `group` is not a valid [string]
 * @description Sets the name of the group of commands that will be toggled when the menu item itself is toggled, only for type `radio`.
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
 * @description Gets the type of menu item, default is `command`, can be `checkbox`, `command`, `radio`.
 *
 * @signature type(type)
 * @added v0.1.0
 * @updated v0.2.0
 * @param type string
 * @returns this
 * @throws TypeError if `type` is not a valid [string]
 * @description Sets the type of menu item, default is `command`, can be `checkbox`, `command`, `radio`.
 */

/** Require local modules */
const containerElement = require('./container-element');
const ezelement = require('../ezelement');

/** Create the ezelement class configuration */
const config = {
  className: 'MenuItem',
  tag: 'menuitem',
  extends: containerElement.ContainerElement,
  extendsConfig: containerElement.config,
  properties: [
    { name: 'checked', type: 'boolean' },
    { name: 'command', type: 'string' },
    { name: 'default', type: 'boolean' },
    { name: 'disabled', type: 'boolean' },
    { name: 'icon', type: 'string' },
    { name: 'label', type: 'string' },
    { name: 'radiogroup', type: 'string' },
    { name: 'type', type: 'string' }
  ]
};

/** Create the class */
ezelement.createClass(config);

/** Export the class and class config */
module.exports.MenuItem = MenuItem;
module.exports.config = config;

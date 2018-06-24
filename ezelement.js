/** Require external modules */
const ezobjects = require('ezobjects');

/**
 * @signature ezhtml.createClass
 * @added v1.0.0
 * @description Helper method for implementing new HTML elements in EZ HTML using a shorthand
 * configuration object.
 */
module.exports.createClass = function (config) {  
  /** Create the class */
  ezobjects.createObject(config);
  
  /** Create the render function */
  global[config.className].prototype.render = function (indent = 0) {
    config.properties.forEach((property) => {
      if ( property.type == 'string' ) {
        if ( this[property.name]().length > 0 )
          this.attr(property.name, this[property.name]());
      } else if ( property.type == 'number' ) {
        if ( this[property.name]() > 0 )
          this.attr(property.name, this[property.name]());
      } else if ( property.type.split(`|`).includes(`number`) && property.type.split(`|`).includes(`string`) ) {
        if ( parseFloat(this[property.name]()) == this[property.name]() && this[property.name]() > 0 )
          this.attr(property.name, parseFloat(this[property.name]()));
        else
          this.attr(property.name, this[property.name]());
      } else if ( property.type == 'boolean' ) {
        if ( this[property.name]() )
          this.attr(property.name, true);
      }
    });
    
    this.tag(config.tag);

    return global[config.extendsConfig.className].prototype.render.call(this, indent);
  };
};

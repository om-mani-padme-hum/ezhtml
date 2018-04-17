/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class Audio
 * @extends ContainerElement
 * @added v0.1.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML audio elements.
 */
class Audio extends containerElement.ContainerElement {
  /**
   * @signature new Audio([data])
   * @added v0.1.0
   * @param data Object
   * @returns Audio
   * @description Returns a new [Audio] instance, initializing with any key/value pairs provided in `data` with keys 
   * that match setter method names.
   */
  constructor(data = {}) {
    super(data);
    
    this.allowedContent(['Text', 'Source', 'Track']);
    this.autoplay(data.autoplay || false);
    this.controls(data.controls || false);
    this.loop(data.loop || false);
    this.muted(data.muted || false);
    this.preload(data.preload || '');
    this.src(data.src || '');
  }
  
  /**
   * Autoplay boolean getter/setter.
   * @signature autoplay() Get the autoplay boolean
   * @signature autoplay(boolean) Set the autoplay boolean as (boolean)
   * @return This object for call chaining
   */
  autoplay(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._autoplay;
    
    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._autoplay = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Audio.autoplay(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Controls boolean getter/setter.
   * @signature controls() Get the controls boolean
   * @signature controls(boolean) Set the controls boolean as (boolean)
   * @return This object for call chaining
   */
  controls(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._controls;
    
    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._controls = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Audio.controls(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Loop boolean getter/setter.
   * @signature loop() Get the loop boolean
   * @signature loop(boolean) Set the loop boolean as (boolean)
   * @return This object for call chaining
   */
  loop(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._loop;
    
    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._loop = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Audio.loop(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Muted boolean getter/setter.
   * @signature muted() Get the muted boolean
   * @signature muted(boolean) Set the muted boolean as (boolean)
   * @return This object for call chaining
   */
  muted(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._muted;
    
    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._muted = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Audio.muted(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Preload setting getter/setter.
   * @signature preload() Get the preload setting
   * @signature preload(string) Set the preload setting as (string)
   * @return This object for call chaining
   */
  preload(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._preload;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._preload = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Audio.preload(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Source getter/setter.
   * @signature src() Get the source
   * @signature src(string) Set the source as (string)
   * @return This object for call chaining
   */
  src(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._src;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._src = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Audio.src(): Invalid signature (${typeof arg1}).`);
    
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
    if ( this.preload().length > 0 )
      this.attr('preload', this.preload());
    
    if ( this.src().length > 0 )
      this.attr('src', this.src());
    
    if ( this.autoplay() )
      this.attr('autoplay', true);
    
    if ( this.controls() )
      this.attr('controls', true);

    if ( this.loop() )
      this.attr('loop', true);

    if ( this.muted() )
      this.attr('muted', true);
    
    this.tag('audio');
    
    return super.render(indent);
  }
}

module.exports.Audio = Audio;

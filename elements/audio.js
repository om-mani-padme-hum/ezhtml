/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class ezhtml.Audio
 * @extends ContainerElement
 * @added v0.1.0
 * @updated v0.2.0
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
   * @signature autoplay()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns boolean
   * @description Gets a boolean indicating whether the audio should start playing as soon as it is ready.
   *
   * @signature autoplay(flag)
   * @added v0.1.0
   * @updated v0.2.0
   * @param flag boolean
   * @returns this
   * @throws TypeError if `flag` is not a valid [boolean]
   * @description Sets a boolean indicating whether the audio should start playing as soon as it is ready.
   */
  autoplay(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._autoplay;

    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._autoplay = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.autoplay(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.autoplay(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature controls()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns boolean
   * @description Gets a boolean indicating whether the audio controls should be displayed.
   *
   * @signature controls(flag)
   * @added v0.1.0
   * @updated v0.2.0
   * @param flag boolean
   * @returns this
   * @throws TypeError if `flag` is not a valid [boolean]
   * @description Sets a boolean indicating whether the audio controls should be displayed.
   */
  controls(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._controls;

    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._controls = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.controls(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.controls(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature loop()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns boolean
   * @description Gets a boolean indicating whether the audio should start over again, every time it is finished.
   *
   * @signature loop(flag)
   * @added v0.1.0
   * @updated v0.2.0
   * @param flag boolean
   * @returns this
   * @throws TypeError if `flag` is not a valid [boolean]
   * @description Sets a boolean indicating whether the audio should start over again, every time it is finished.
   */
  loop(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._loop;

    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._loop = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.loop(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.loop(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature muted()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns boolean
   * @description Gets a boolean indicating whether the audio output should be muted.
   *
   * @signature muted(flag)
   * @added v0.1.0
   * @updated v0.2.0
   * @param flag boolean
   * @returns this
   * @throws TypeError if `flag` is not a valid [boolean]
   * @description Sets a boolean indicating whether the audio output should be muted.
   */
  muted(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._muted;

    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._muted = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.muted(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.muted(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature preload()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the preferred method for loading the audio.
   *
   * @signature preload(method)
   * @added v0.1.0
   * @updated v0.2.0
   * @param method string
   * @returns this
   * @throws TypeError if `method` is not a valid [string]
   * @description Sets the preferred method for loading the audio.
   */
  preload(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._preload;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._preload = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.preload(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.preload(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature src()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the URL of the audio file.
   *
   * @signature src(url)
   * @added v0.1.0
   * @updated v0.2.0
   * @param url string
   * @returns this
   * @throws TypeError if `url` is not a valid [string]
   * @description Sets the URL of the audio file.
   */
  src(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._src;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._src = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.src(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.src(${arg1.constructor.name}): Invalid signature.`);

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

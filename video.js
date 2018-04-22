/** Require local modules */
const containerElement = require('./container-element');

/**
 * @class ezhtml.Video
 * @extends ContainerElement
 * @added v0.1.0
 * @updated v0.2.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML video elements.
 */
class Video extends containerElement.ContainerElement {
  /**
   * @signature new Video([data])
   * @added v0.1.0
   * @param data Object
   * @returns Video
   * @description Returns a new [Video] instance, initializing with any key/value pairs provided in `data` with keys 
   * that match setter method names.
   */
  constructor(data = {}) {
    super(data);
    
    this.allowedContent(['Text', 'Source', 'Track']);
    this.autoplay(data.autoplay || false);
    this.controls(data.controls || false);
    this.height(data.height || 0);
    this.loop(data.loop || false);
    this.muted(data.muted || false);
    this.poster(data.poster || '');
    this.preload(data.preload || '');
    this.src(data.src || '');
    this.width(data.width || 0);
  }
  
  /**
   * @signature autoplay()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns boolean
   * @description Gets a boolean indicating whether the video should start playing as soon as it is ready.
   *
   * @signature autoplay(flag)
   * @added v0.1.0
   * @updated v0.2.0
   * @param flag boolean
   * @returns this
   * @throws TypeError if `flag` is not a valid [boolean]
   * @description Sets a boolean indicating whether the video should start playing as soon as it is ready.
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
   * @description Gets a boolean indicating whether the video controls should be displayed.
   *
   * @signature controls(flag)
   * @added v0.1.0
   * @updated v0.2.0
   * @param flag boolean
   * @returns this
   * @throws TypeError if `flag` is not a valid [boolean]
   * @description Sets a boolean indicating whether the video controls should be displayed.
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
   * @signature height()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns number
   * @description Gets the height of the video in pixels.
   *
   * @signature height(pixels)
   * @added v0.1.0
   * @updated v0.2.0
   * @param pixels number
   * @returns this
   * @throws TypeError if `pixels` is not a valid [number]
   * @description Sets the height of the video in pixels.
   */
  height(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._height;

    /** Setter */
    else if ( typeof arg1 == 'number' )
      this._height = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.height(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.height(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature loop()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns boolean
   * @description Gets a boolean indicating whether the video should start over again, every time it is finished.
   *
   * @signature loop(flag)
   * @added v0.1.0
   * @updated v0.2.0
   * @param flag boolean
   * @returns this
   * @throws TypeError if `flag` is not a valid [boolean]
   * @description Sets a boolean indicating whether the video should start over again, every time it is finished.
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
   * @description Gets a boolean indicating whether the video output should be muted.
   *
   * @signature muted(flag)
   * @added v0.1.0
   * @updated v0.2.0
   * @param flag boolean
   * @returns this
   * @throws TypeError if `flag` is not a valid [boolean]
   * @description Sets a boolean indicating whether the video output should be muted.
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
   * @signature poster()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the URL of an image to be shown while the video is downloading, or until the user hits the play button.
   *
   * @signature poster(url)
   * @added v0.1.0
   * @updated v0.2.0
   * @param url string
   * @returns this
   * @throws TypeError if `url` is not a valid [string]
   * @description Sets the URL of an image to be shown while the video is downloading, or until the user hits the play button.
   */
  poster(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._poster;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._poster = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.poster(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.poster(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature preload()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the preferred method for loading the video.
   *
   * @signature preload(method)
   * @added v0.1.0
   * @updated v0.2.0
   * @param method string
   * @returns this
   * @throws TypeError if `method` is not a valid [string]
   * @description Sets the preferred method for loading the video.
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
   * @description Gets the URL of the video file.
   *
   * @signature src(url)
   * @added v0.1.0
   * @updated v0.2.0
   * @param url string
   * @returns this
   * @throws TypeError if `url` is not a valid [string]
   * @description Sets the URL of the video file.
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
   * @signature width()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns number
   * @description Gets the width of the video in pixels.
   *
   * @signature width(pixels)
   * @added v0.1.0
   * @updated v0.2.0
   * @param pixels number
   * @returns this
   * @throws TypeError if `pixels` is not a valid [number]
   * @description Sets the width of the video in pixels.
   */
  width(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._width;

    /** Setter */
    else if ( typeof arg1 == 'number' )
      this._width = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.width(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.width(${arg1.constructor.name}): Invalid signature.`);

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
    if ( this.height() > 0 )
      this.attr('height', this.height());
    
    if ( this.poster().length > 0 )
      this.attr('poster', this.poster());
    
    if ( this.preload().length > 0 )
      this.attr('preload', this.preload());
    
    if ( this.src().length > 0 )
      this.attr('src', this.src());
    
    if ( this.width() > 0 )
      this.attr('width', this.width());

    if ( this.autoplay() )
      this.attr('autoplay', true);
    
    if ( this.controls() )
      this.attr('controls', true);

    if ( this.loop() )
      this.attr('loop', true);

    if ( this.muted() )
      this.attr('muted', true);
    
    this.tag('video');
    
    return super.render(indent);
  }
}

module.exports.Video = Video;

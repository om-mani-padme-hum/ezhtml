/** Require local modules */
const element = require('./element');

/**
 * @class ezhtml.Track
 * @extends Element
 * @added v0.1.0
 * @updated v0.2.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML track elements.
 */
class Track extends element.Element {
  /**
   * @signature new Track([data])
   * @added v0.1.0
   * @param data Object
   * @returns Track
   * @description Returns a new [Track] instance, initializing with any key/value pairs provided in `data` with keys 
   * that match setter method names.
   */
  constructor(data = {}) {
    super(data);
    
    this.default(data.default || false);
    this.kind(data.kind || '');
    this.label(data.label || '');
    this.src(data.src || '');
    this.srclang(data.srclang || '');
  }
  
  /**
   * @signature default()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns boolean
   * @description Gets a boolean indicating whether the track is to be enabled if the user's preferences do not indicate that another track would be more appropriate.
   *
   * @signature default(flag)
   * @added v0.1.0
   * @updated v0.2.0
   * @param flag boolean
   * @returns this
   * @throws TypeError if `flag` is not a valid [boolean]
   * @description Sets a boolean indicating whether the track is to be enabled if the user's preferences do not indicate that another track would be more appropriate.
   */
  default(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._default;

    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._default = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.default(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.default(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature kind()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the kind of text track, can be `captions`, `chapters`, `descriptions`, `metadata`, or `subtitles`.
   *
   * @signature kind(kind)
   * @added v0.1.0
   * @updated v0.2.0
   * @param kind string
   * @returns this
   * @throws TypeError if `kind` is not a valid [string]
   * @description Sets the kind of text track, can be `captions`, `chapters`, `descriptions`, `metadata`, or `subtitles`.
   */
  kind(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._kind;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._kind = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.kind(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.kind(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature label()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the title of the text track.
   *
   * @signature label(text)
   * @added v0.1.0
   * @updated v0.2.0
   * @param text string
   * @returns this
   * @throws TypeError if `text` is not a valid [string]
   * @description Sets the title of the text track.
   */
  label(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._label;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._label = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.label(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.label(${arg1.constructor.name}): Invalid signature.`);

    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature src()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the URL of the track file, this attribute is required.
   *
   * @signature src(url)
   * @added v0.1.0
   * @updated v0.2.0
   * @param url string
   * @returns this
   * @throws TypeError if `url` is not a valid [string]
   * @description Sets the URL of the track file, this attribute is required.
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
   * @signature srclang()
   * @added v0.1.0
   * @updated v0.2.0
   * @returns string
   * @description Gets the language of the track text data.
   *
   * @signature srclang(lang)
   * @added v0.1.0
   * @updated v0.2.0
   * @param lang string
   * @returns this
   * @throws TypeError if `lang` is not a valid [string]
   * @description Sets the language of the track text data.
   */
  srclang(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._srclang;

    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._srclang = arg1;

    /** Handle errors */
    else if ( arg1 === null )
      throw new TypeError(`${this.constructor.name}.srclang(null): Invalid signature.`);
    else
      throw new TypeError(`${this.constructor.name}.srclang(${arg1.constructor.name}): Invalid signature.`);

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
    if ( this.kind().length > 0 )
      this.attr('kind', this.kind());
    
    if ( this.sizes().length > 0 )
      this.attr('sizes', this.sizes());
    
    if ( this.src().length > 0 )
      this.attr('src', this.src());
    
    if ( this.srclang().length > 0 )
      this.attr('srclang', this.srclang());
    
    if ( this.default() )
      this.attr('default', true);
    
    this.tag('track');
    
    return super.render(indent);
  }
}

module.exports.Track = Track;

import { Observable, BehaviorSubject } from 'rxjs';
import { Range } from './index';
export declare class SliderBar {
    private _slider;
    private _mapApi;
    private _config;
    private _playInterval;
    private _range;
    private _limit;
    private _step;
    private _precision;
    static _playState: BehaviorSubject<boolean>;
    static getPlayState(): Observable<boolean>;
    private static setPlayState;
    private _gifImages;
    /**
     * Slider bar constructor
     * @constructor
     * @param {Any} mapApi the viewer api
     * @param {Any} config the slider configuration
     */
    constructor(mapApi: any, config: any);
    /**
     * Start slider creation
     * @function
     * @param {String} type the type of slider (date, number or wmst)
     * @param {String} language the viewerlanguage (en-CA or fr-CA)
     */
    startSlider(type: string, language: string): void;
    /**
     * Set ranges
     * @function setRanges
     * @param {Number} width display width
     * @param {Range} limit min and max limit to set
     * @param {Number} delta display width
     * @return {Range} range the updated limits
     */
    setRanges(width: number, limit: Range, delta: number): Range;
    /**
     * Set pips (slider labels) format
     * @function formatPips
     * @param {Any} value the value to display (number, string or date)
     * @param {String} field the type of field
     * @param {String} lang the language to use
     * @return {any} value the formated value
     */
    formatPips(value: any, field: string, lang: string): any;
    /**
     * Set slider range
     * @property range
     */
    /**
    * Get slider range
    * @property range
    */
    range: Range;
    /**
     * Set slider limit
     * @property limit
     */
    /**
    * Get slider limit
    * @property limit
    */
    limit: Range;
    /**
     * Set slider lock
     * @property lock
     */
    /**
    * Get slider lock
    * @property lock
    */
    lock: boolean;
    /**
     * Set slider loop
     * @property loop
     */
    /**
    * Get slider loop
    * @property loop
    */
    loop: boolean;
    /**
     * Set slider delay
     * @property delay
     */
    /**
    * Get slider delay
    * @property delay
    */
    delay: number;
    /**
     * Set slider export
     * @property export
     */
    /**
    * Get slider export
    * @property export
    */
    export: boolean;
    /**
     * Set play or pause on the slider
     * @function play
     * @param {Boolean} play true if slider is playing, false otherwise
     */
    play(play: boolean): void;
    /**
     * Loop play until the max limit is reach
     * @function playInstant
     * @param {Number} limitmax the max limit
     */
    playInstant(limitmax: number): void;
    /**
     * Check if we need to take snapshot to export GIF
     * @function setTakeSnapShot
     */
    setTakeSnapShot(): void;
    /**
     * Take a snapshot of the map for the export gif function
     * @function takeSnapShot
     * @param {Boolean} stop true if it is the last snapshot and it needs to export the gif, false otherwise
     */
    takeSnapShot(stop: boolean): void;
    exportToGIF(): void;
    /**
     * Set play on the slider
     * @function dataURItoBlob
     * @param {String} dataURI true if slider is playing, false otherwise
     * @return {Blob} blob the blob object (gif image) to save to file
     */
    dataURItoBlob(dataURI: string): Blob;
    /**
     * Set pause on the slider when play is call with false
     * @function pause
     */
    pause(): void;
    /**
     * Refresh the slider to default values
     * @function refresh
     */
    refresh(): void;
    /**
     * Step the silder
     * @function step
     * @param {String} direction up or down
     */
    step(direction: string): void;
    /**
     * Set left anchor
     * @function setLeftAnchor
     * @param {Number} values values to set anchors to
     * @param {String} direction up or down
     * @param {Number} step step value
     * @return {Number} Left anchor value
     */
    setLeftAnchor(values: number, direction: string, step: number): number;
    /**
     * Set right anchor
     * @function setRightAnchor
     * @param {Number} values values to set anchors to
     * @param {String} direction up or down
     * @param {Number} step step value
     * @return {Number} Left anchor value
     */
    setRightAnchor(values: number, direction: string, step: number): number;
    /**
     * Set definition query to filter the data
     * @function setDefinitionQuery
     * @param {Range} range range to use to filter
     */
    setDefinitionQuery(range: Range): void;
    /**
     * Set definition query to filter the data
     * @function setDefinitionQuery
     * @param {Range} range range to use to filter
     * @param {String} type type of date
     * @return {String[]} Array of string date  from date object
     */
    getDate(range: Range, type?: string): string[];
}

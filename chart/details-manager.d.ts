export declare class DetailsManager {
    private _panelDetails;
    private _panelTrigger;
    private _activeLayername;
    private _enabled;
    private _details;
    private _feature;
    /**
     * Get active layer name
     * @property layerName
     * @return {String} layer name
     */
    /**
    * Set active layer name
    * @property layerName
    * @param {String} value the layer name
    */
    layerName: string;
    /**
     * Get custom details panel status
     * @property enabled
     * @return {Boolean} panel status
     */
    /**
    * Set custom details panel status
    * @property enabled
    * @param {Boolean} value the panel status
    */
    enabled: boolean;
    /**
     * Get active details
     * @property details
     * @return {String} details Markdown string
     */
    /**
    * Set active details
    * @property details
    * @param {String} value details Markdown string
    */
    details: string;
    /**
     * Get active feature
     * @property feature
     * @return {Object[]} feature array of fields key and value
     */
    /**
    * Set active feature
    * @property feature
    * @param {Object[]} value array of fields key and value
    */
    feature: object[];
    /**
    * Details manager constructor
    * @constructor
    * @param {Any} mapApi the viewer api
    */
    constructor(mapApi: any);
    /**
    * Take the details string for the panel and replace by attribute values if need be
    * @function parseAttributes
    * @return {String} the parsed details string
    */
    parseAttributes(): string;
    /**
    * Function to apply when an item is click on the sidebar details panel menu or fired if there is only one layer
    * @function clickDetails
    * @param {Any} event the click event or an object that mimick it. Contains the active layer name and the details to show
    */
    clickDetails(event: any): void;
}

/**
 * Creates and manages charts.
 */
export declare class ChartLoader {
    private _chart;
    private _config;
    private _mapApi;
    private _panel;
    private _sliderX;
    private _sliderY;
    private _xType;
    private _yType;
    private _xRange;
    private _yRange;
    private _lineChartOptions;
    private _barChartOptions;
    private _pieChartOptions;
    static defaultColors: string[];
    /**
     * Chart loader constructor
     * @constructor
     * @param {Any} mapApi the viewer api
     * @param {Any} config the slider configuration
     */
    constructor(mapApi: any, config: any);
    /**
     * Initialize the slider
     * @function initSlider
     * @param {Any} slider slider div
     * @param {Number} min minimum value for slider
     * @param {Number} max maximum value for slider
     * @param {String} xType the x axis type, date or linear
     */
    initSlider(slider: any, min: number, max: number, type: string): void;
    /**
     * Parse the graph pips labels value
     * @function parsePips
     * @param {String} axis axis to parse labels for (x or y)
     * @param {Date} type the type of axis (linear or date)
     * @param {Any} min min range to parse the value
     * @param {Any} max max range to parse the value
     */
    parsePips(axis: string, type: string, min: any, max: any): void;
    /**
     * Parse the graph value with the range from the slider
     * @function parseRange
     * @param {Any} xRange x range values to filter
     * @param {Any} yRange y range values to filter
     * @param {Any} data data to filter
     */
    parseRange(xRange: any, yRange: any, data: any): object[];
    /**
     * Destroy the slider
     * @function destroySlider
     */
    destroySlider(): void;
    /**
     * Destroy the chart
     * @function destroyChart
     */
    destroyChart(): void;
    /**
     * Create pie chart
     * @function createPieChart
     * @param {Object} attrs attributes to use for the graph
     */
    createPieChart(attrs: object): void;
    /**
     * Create bar chart
     * @function createBarChart
     * @param {Object} attrs attributes to use for the graph
     */
    createBarChart(attrs: object): void;
    /**
     * Create line chart
     * @function createLineChart
     * @param {Object} attrs attributes to use for the graph
     */
    createLineChart(attrs: object): void;
    /**
     * Draw the chart
     * @function draw
     * @param {Any} opts the chart options
     */
    draw(opts: any): void;
    /**
     * Get global options fot all charts
     * @function getGlobalOptions
     * @return {Object} the global options
     */
    getGlobalOptions(): object;
    /**
     * Parse feature datasets
     * @function parse
     * @param {Any} config the configuration
     * @param {Any} attrs the feature attributes
     * @param {String[]} colors the array of colors to use
     * @param {String} xType the x axis type, date or linear
     * @return {Object} the parse datasets
     */
    static parse(config: any, attrs: any, colors?: string[], xType?: string): {
        datasets: any[];
    };
    /**
     * Get chart labels
     * @function getLabels
     * @param {Any} config the configuration
     * @param {Any} attrs the feature attributes
     * @param {Number} index the index to start initialize to 0 if not provided
     * @return {String[]} the array of labels
     */
    static getLabels(config: any, attrs: any, index?: number): string[];
}
export interface ChartLoader {
    defaultColors: string[];
}

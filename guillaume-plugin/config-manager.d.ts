export declare class ConfigManager {
    constructor(panelManager: any);
    /**
     * Set up table for first time open.
     * Called upon ConfigManager creation which is called on table creation
     */
    tableInit(): void;
    /**
     * Returns table title as defined in config, or as the layer name if undefined in the config.
     */
    readonly title: string;
    /**
     * Maximizes table on open if maximized is set as true in the config.
     * Helper method to tableInit
     */
    maximize(): void;
    /**
     * Return whether global search is enabled/disabled according to config (default is enabled)
     */
    readonly globalSearchEnabled: boolean;
    /**
     * Return whether printing is enabled/disabled according to config (default is disabled)
     */
    readonly printEnabled: boolean;
    /**
     * Gets default search parameter for global search if defined in the config.
     */
    readonly defaultGlobalSearch: string;
    setDefaultGlobalSearchFilter(): void;
    /**
     * Return whether lazy filter is enabled for the table as defined in config, if undefined defaults to false.
     */
    readonly lazyFilterEnabled: boolean;
    /**
     * Return whether strict match is enabled when searching in the table as defined in config, if undefined defaults to false.
     */
    readonly searchStrictMatchEnabled: boolean;
    /**
     * Returns if the default filters are applied to the map. If undefined defaults to false
     */
    readonly applyMap: boolean;
    /**
     * Returns if the column filters are displayed on the table. If undefined default to true.
     */
    readonly showFilter: boolean;
    /**
     * Returns a list of column data defined in the config, so that the table can be initialized according to them.
     */
    readonly filteredAttributes: any[];
}
export declare class ColumnConfigManager {
    constructor(configManager: ConfigManager, column: any);
    readonly width: any;
    readonly sort: any;
    readonly searchDisabled: boolean;
    readonly isSelector: boolean;
    readonly isFilterStatic: boolean;
    readonly value: any;
}
export interface ColumnConfigManager {
    column: any;
    configManager: ConfigManager;
}
export interface ConfigManager {
    baseLayer: any;
    attributeHeaders: any;
    attributeArray: [any];
    tableConfig: any;
    columnConfigs: any;
    panelManager: any;
    searchEnabled: boolean;
    printEnabled: boolean;
}

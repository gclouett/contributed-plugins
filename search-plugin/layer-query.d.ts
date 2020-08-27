import { TableLoader } from './table-loader';
import { TableManager } from './table-manager';
import { ConfigManager } from './config-manager';
export declare class MakeQuery {
    private _mapApi;
    private _configLang;
    private _bundle;
    private query;
    private baseURL;
    private curProv;
    private queryURL;
    private queryTask;
    private whereclause;
    private loadingPanel;
    constructor(mapApi: any, configLang: any, input: any);
    executeQueryAB(myBundle: any, layerno: any, input: any, mapApi: any): void;
    getProvinceAbrev(): any;
    executeQuery(myBundle: any, layerno: any, input: any, mapApi: any): void;
    openLoadingPanel(mapApi: any, myBundle: any, layerno: any, input: any): void;
    createTable(panel: any): (queryResults: any) => void;
    openLoading(mapApi: any, panel: any): (queryResults: any) => void;
    updatePlanTable(featureSet: any): any;
}
export interface MakeQuery {
    feature: string;
    id: string;
    _name: string;
    mapApi: any;
    translations: any;
    legendBlock: any;
    changeBody: TableLoader;
    loadingTimeout: any;
    layerAdded: any;
    configManager: ConfigManager;
    tableManager: TableManager;
}

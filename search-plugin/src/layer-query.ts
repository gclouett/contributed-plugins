import { TableLoader } from './table-loader';
//import { PRINT_TABLE_NOT_ROWS } from './table-template';
import { TableManager } from './table-manager';
import { ConfigManager, ColumnConfigManager} from './config-manager';
import { PROVINCE } from './template';


export class MakeQuery {
    private _mapApi: any;
    private _configLang: any;

    private query: any;
    //private baseURL: any;
    private curProv: any;
    private queryURL: any;
    private queryTask: any;
    private whereclause: any;
    private loadingPanel: any;

    private baseURL: string = "http://proxyinternet.nrcan.gc.ca/arcgis/rest/services/MB-NC/";


    constructor(mapApi: any, configLang: any) {
        this._mapApi = mapApi;
        this._configLang = configLang;

        this.openLoadingPanel(mapApi)

    }

    getProvinceAbrev() {

        let selectProvinceHTML = <HTMLInputElement>document.getElementById("selectInput");
        let selectProvinceText = selectProvinceHTML.innerText;

        if (selectProvinceText === 'Province') {
            return 'CA';
        } else {
            return PROVINCE[this._configLang][selectProvinceText];
        }
    }

    openLoadingPanel(mapApi) {

        let legendBlock = {
            name: "Survey Plan Results",
            loadingPanel: {},
            formattedData:''
        }

        this.loadingPanel = new TableLoader(mapApi, legendBlock);

        /*let loadingTimeout = setTimeout(() => {
            legendBlock.loadingPanel = this.loadingPanel;
            legendBlock.formattedData;
        }, 200);*/

        let restLayerNumber = 0
        let planInputID = "planInput"
        this.executeQuery(restLayerNumber, planInputID);

    }; 

    executeQuery(layerNumber, inputBoxID) {

        this.query = new (<any>window).RAMP.GAPI.esriBundle.Query();
        this.curProv = this.getProvinceAbrev();
        this.queryURL = this.baseURL + "WMB_Query_" + this.curProv + "/MapServer/" + layerNumber;
        this.queryTask = new (<any>window).RAMP.GAPI.esriBundle.QueryTask(this.queryURL)

        let htmlInputBox = <HTMLInputElement>document.getElementById(inputBoxID)

        if (htmlInputBox && htmlInputBox.value != "") {
            this.whereclause = "planno like '%" + htmlInputBox.value.toUpperCase().replace("'", "''") + "%'";
        }
    
        this.query.where = this.whereclause;
        this.query.returnGeometry = false;
        this.query.outFields = ["PLANNO", "P2_DESCRIPTION", "GlobalID", "PROVINCE", "P3_DATESURVEYED", "SURVEYOR", "ALTERNATEPLANNO"];
        this.queryTask.execute(this.query, this.createTable(this.loadingPanel))
    }

    createTable(panel) {
        return function(queryResults) {  
            const columns = ['Plan Number', 'Description', 'Date of Survey','Plan Detail', 'LTO']

            /*
            const self = this;
            let headers = ``;
            const columns = ['Plan Number', 'Description', 'Date of Survey','Plan Detail', 'LTO']

            columns.forEach(columnName => {

                //let column = this.configManager.columnConfigs[columnName];
                let column = {
                    column: {
                        visible: true
                    },
                    width: 100,
                    sort: '',
                    searchDisabled: true
                };


                let colDef: ColumnDefinition = {
                    width: column.width || 100,
                    minWidth: column.width,
                    maxWidth: column.width,
                    //headerName: this.attributeHeaders[columnName] ? this.attributeHeaders[columnName]['name'] : '',
                    //headerTooltip: this.attributeHeaders[columnName] ? this.attributeHeaders[columnName]['name'] : '',
                    field: columnName,
                    //filterParams: <FilterParameters>{},
                    //filter: 'agTextColumnFilter',
                    //floatingFilterComponentParams: { suppressFilterButton: true, mapApi: this.mapApi },
                    //floatingFilterComponent: undefined,

                    cellRenderer: function (cell) {
                        const translated = $(`<span>{{ 'plugins.enhancedTable.table.complexValue' | translate }}</span>`);
                        self.mapApi.$compile(translated);
                        return cell.value || !isNaN(cell.value) ? (typeof cell.value === 'object' ? translated[0] : cell.value) : '';
                    },
                    suppressSorting: false,
                    suppressFilter: column.searchDisabled,
                    sort: column.sort,
                    suppressMovable: true,
                    hide: column.column !== undefined && column.column.visible !== undefined ? !column.column.visible : false
                };

                if (columnName !== 'SHAPE' && columnName !== ' ' && columnName !== '') {
                    headers += `<th style='width:200%; padding: 5px; border-bottom: 2px solid #000000'><div class='cell'>${columnName}</div></th>`;
                };
                
            });*/

            let a = queryResults.features
            panel.changePanel('TEST', columns, a);
        }

    }

    /*openLoading(mapApi, panel) {
        return function(queryResults) {  
            let a = queryResults.features

            let legendBlock = {
                name: "Survey Plan Results",
                loadedFeatureCount: 1,
                featureCount: queryResults.features.length,
                loadingPanel: {},
                formattedData:''
            }
            
            //let loadingPanel = new TableLoader(mapApi, legendBlock);
            //panel.changeBody(legendBlock);

            let loadingTimeout = setTimeout(() => {
                legendBlock.loadingPanel = panel;
                legendBlock.formattedData;
            }, 200);

        }; 
    }; */
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


interface ColumnDefinition {
    //headerName: string;
    //headerTooltip: string;
    minWidth?: number;
    maxWidth?: number;
    width?: number;
    field: string;
    //headerComponent?: { new(): CustomHeader };
    //headerComponentParams?: HeaderComponentParams;
    //filter: string;
    //filterParams?: any;
    //floatingFilterComponent?: undefined;
    //floatingFilterComponentParams: FloatingFilterComponentParams;
    cellRenderer?: (cellParams: any) => string | Element;
    suppressSorting: boolean;
    suppressFilter: boolean;
    lockPosition?: boolean;
    getQuickFilterText?: (cellParams: any) => string;
    sort?: string;
    hide?: boolean;
    cellStyle?: any;
    suppressMovable: any;
}
import { TableLoader } from './table-loader';
import { PRINT_TABLE_NOT_ROWS } from './table-template';
import { TableManager } from './table-manager';
import { ConfigManager, ColumnConfigManager} from './config-manager';

const provEngFra = {
    'fr-CA' :{
        'Canada': 'CA',
        'Alberta': 'AB',
        'Colombie-Britannique': 'BC',
        'Île-du-Prince-Édouard': 'PE',
        'Manitoba': 'MB',
        'Nouveau-Brunswick': 'NB',
        'Nouvelle-Écosse': 'NS',
        'Nunavut': 'NT',
        'Ontario': 'ON',
        'Québec': 'QC',
        'Saskatchewan': 'SK',
        'Terre-Neuve-et-Labrador': 'NL',
        'Territoire du Nord-Ouest': 'NT',
        'Yukon': 'YT'
    },
    'en-CA': {
        'Canada': 'CA',
        'Alberta': 'AB',
        'British-Colombia': 'BC',
        'Prince Edward Island': 'PE',
        'Manitoba': 'MB',
        'New Brunswick': 'NB',
        'Nova Scotia': 'NS',
        'Nunavut': 'NT',
        'Ontario': 'ON',
        'Quebec': 'QC',
        'Saskatchewan': 'SK',
        'Newfoundland and Labrador': 'NL',
        'Northwest Territories': 'NT',
        'Yukon': 'YT'
    }    
} 

export class MakeQuery {
    private _mapApi: any;
    private _configLang: any;
    private _bundle: any;

    private query: any;
    private baseURL: any;
    private curProv: any;
    private queryURL: any;
    private queryTask: any;
    private whereclause: any;
    private loadingPanel: any;

    constructor(mapApi: any, configLang: any, input: any) {
        this._mapApi = mapApi;
        this._configLang = configLang;

        // add needed dependencies
        let myBundlePromise = (<any>window).RAMP.GAPI.esriLoadApiClasses([
            ['esri/tasks/query', 'Query'],
            ["esri/tasks/QueryTask", "QueryTask"]
        ]);

        myBundlePromise.then(myBundle => {
            this.openLoadingPanel(mapApi, myBundle, 0, input)
            //this.executeQueryAB(myBundle, 0, input, mapApi);
        });

        return this;
    }

    executeQueryAB(myBundle, layerno, input, mapApi) {

        this._bundle = myBundle;
        this.query = new this._bundle.Query();
        this.baseURL = "http://proxyinternet.nrcan.gc.ca/arcgis/rest/services/MB-NC/";
        this.curProv = 'AB';
        this.queryURL = this.baseURL + "WMB_Query_" + this.curProv + "/MapServer/" + layerno;
        this.queryTask = new this._bundle.QueryTask(this.queryURL)

        let htmlInputBox = <HTMLInputElement>document.getElementById(input)

        if (htmlInputBox && htmlInputBox.value != "") {
            this.whereclause = "planno like '%" + htmlInputBox.value.toUpperCase().replace("'", "''") + "%'";
        }
    
        this.query.where = this.whereclause;
        this.query.returnGeometry = false;
        this.query.outFields = ["PLANNO", "P2_DESCRIPTION", "GlobalID", "PROVINCE", "P3_DATESURVEYED", "SURVEYOR", "ALTERNATEPLANNO"];
        //this.queryTask.execute(this.query, this.updatePlanTable)
    }

    getProvinceAbrev() {

        let selectProvinceHTML = <HTMLInputElement>document.getElementById("selectInput");
        let selectProvinceText = selectProvinceHTML.innerText;

        if (selectProvinceText === 'Province') {
            return 'CA';

        } else {
            return provEngFra[this._configLang][selectProvinceText];
        }
    }

    executeQuery(myBundle, layerno, input, mapApi) {

        this._bundle = myBundle;
        this.query = new this._bundle.Query();
        this.baseURL = "http://proxyinternet.nrcan.gc.ca/arcgis/rest/services/MB-NC/";
        this.curProv = this.getProvinceAbrev() //'AB';
        this.queryURL = this.baseURL + "WMB_Query_" + this.curProv + "/MapServer/" + layerno;
        this.queryTask = new this._bundle.QueryTask(this.queryURL)

        let htmlInputBox = <HTMLInputElement>document.getElementById(input)

        if (htmlInputBox && htmlInputBox.value != "") {
            this.whereclause = "planno like '%" + htmlInputBox.value.toUpperCase().replace("'", "''") + "%'";
        }
    
        this.query.where = this.whereclause;
        this.query.returnGeometry = false;
        this.query.outFields = ["PLANNO", "P2_DESCRIPTION", "GlobalID", "PROVINCE", "P3_DATESURVEYED", "SURVEYOR", "ALTERNATEPLANNO"];
        this.queryTask.execute(this.query, this.createTable(this.loadingPanel))
    }

    openLoadingPanel(mapApi, myBundle, layerno, input) {

        let legendBlock = {
            name: "Survey Plan Results",
            loadingPanel: {},
            formattedData:''
        }

        this.loadingPanel = new TableLoader(mapApi, legendBlock);

        let loadingTimeout = setTimeout(() => {
            legendBlock.loadingPanel = this.loadingPanel;
            legendBlock.formattedData;
        }, 200);


        this.executeQuery(myBundle, layerno, input, mapApi);

    }; 

    createTable(panel) {
        return function(queryResults) {  
            let a = queryResults.features

            const self = this;
            let cols: Array<any> = [];
            //const layerProxy = attrBundle.layer._layerProxy;
            
            let headers = ``;
            const columnNames = ['Plan Number', 'Description', 'Date of Survey','Plan Detail', 'LTO']

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
                
            });

            panel.changePanel('TEST', columns, a);
        }

    }

    openLoading(mapApi, panel) {
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
    }; 

    updatePlanTable(featureSet) { 

        let queryArray = []
        let basePlanURL = "plan-fra.php?id=";

        featureSet.features.forEach(function(result) {
            queryArray.push(result.attributes);
        })
        //return queryArray

        let features = featureSet.features;
        let queryTable = <HTMLTableElement>document.getElementById("queryPlanResult");
        let curRow;

        while (queryTable.rows.length > 0) {
            queryTable.deleteRow(0);
        }
        
        for (let i = 0; i < features.length; i++) {
            let curfeature = features[i];
            let curatts = curfeature.attributes;
      
            curRow = queryTable.insertRow(-1);
            let planNoCell = curRow.insertCell(0);
            let titleCell = curRow.insertCell(1);
            let dateSurveyedCell = curRow.insertCell(2);
            let planDetailCell = curRow.insertCell(3);
            let ltoCell = curRow.insertCell(4);
      
            planNoCell.innerHTML = "<a title='Click to zoom to " + curatts["PLANNO"] + "' href=javascript:zoomFeature('" + curatts["GlobalID"] + "','" + escape(curatts["PROVINCE"]) + "'); onmouseover=javascript:highlightFeature('" + curatts["GlobalID"] + "') onmouseout=javascript:map.graphics.clear() onfocus=javascript:highlightFeature('" + curatts["GlobalID"] + "') onblur=javascript:map.graphics.clear()>" + curatts["PLANNO"] + "</a>";
            planNoCell.className = "nowrap";
            titleCell.innerHTML = curatts["P2_DESCRIPTION"];
            titleCell.title = curatts["P2_DESCRIPTION"];
            dateSurveyedCell.innerHTML = curatts["P3_DATESURVEYED"];
            dateSurveyedCell.title = curatts["P3_DATESURVEYED"];
            dateSurveyedCell.className = "nowrap";
            planDetailCell.innerHTML = "<a href='" + basePlanURL + curatts["PLANNO"] + "' target=_blank>Visualiser<span class='wb-invisible'> " + curatts["PLANNO"] + "</span></a>";
            planDetailCell.className = "nowrap";
            ltoCell.innerHTML = curatts["ALTERNATEPLANNO"];
            ltoCell.className = "nowrap";
        
        }
        return featureSet;
    }
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
import { TABLE_LOADING_TEMPLATE2, CUSTOM_HEADER } from './table-template';
import { GRID_TEMPLATE } from './template';
import { Grid } from 'ag-grid-community';


export class TableLoader {

    constructor(mapApi: any, legendBlock) {
        this.mapApi = mapApi;
        this.legendBlock = legendBlock;
        this.panel = this.mapApi.panels.create('tableLoaderId');
        this.panel.element.css({top: '50%', left: '410px', right: '52px',});

        this.panel.header.toggleButton
        const customBtn = new this.panel.Button('Custom Btn')
        this.panel.header.append(customBtn);
        this.panel.element.addClass('resizable');
        
        this.panel.allowUnderlay = true;
        this.prepareHeader();
        this.prepareBody();
        //this.hidden = true;
        this.open()
    }

    setSize(maximized) {
        if (maximized) {
            this.panel.element.css({ bottom: '0' });;
        } else {
            this.panel.element.css({ bottom: '50%' });;
        }
    }

    prepareHeader() {
        this.panel.header.title = this.legendBlock.name;
        this.panel.header.closeButton;
    }

    open() {
        this.panel.open();
        this.hidden = false;
    }

    prepareBody() {
        let template = TABLE_LOADING_TEMPLATE2(this.legendBlock);
        this.panel.body = template;
    }

    changePanel(headers, cols, rows) {
        this.panel.header.title = headers
        this.makeTable(rows)
    }

    makeTable(rows) {
        
        //this.panel.body.prepend(this.compileTemplate(GRID_TEMPLATE))
        this.panel.body = this.compileTemplate(GRID_TEMPLATE)

        let gridDiv = <HTMLElement>document.querySelector('#resultsGrid')
        let gridDiv2 = <HTMLElement>document.querySelector('#test')


        let gridOptions = {
            columnDefs: [
                {headerName: 'Plan Number', field:'planNumber', sort:'asc', filter: 'agTextColumnFilter', headerTooltip: 'Plan Number'},
                {headerName: 'Description', field:'description', headerTooltip: 'Description'},
                {headerName: 'Date of Survey', field:'dateSurvey', headerTooltip: 'Date of Survey'},
                {headerName: 'Plan Detail', field:'planDetail', headerTooltip: 'Plan Detail'},
                {headerName: 'LTO', field:'lto', headerTooltip: 'List of survey document (plan) results from the attributes and map searches'}
            ],
            rowData: [],

            onGridReady: function(params) {
                params.api.sizeColumnsToFit();
            },
            rowStyle: {
                background: 'white'
            },
            /*cellRenderer: function (cell) {
                const translated = $(`<span>{{ 'plugins.enhancedTable.table.complexValue' | translate }}</span>`);
                this.mapApi.$compile(translated);
                return cell.value || !isNaN(cell.value) ? (typeof cell.value === 'object' ? translated[0] : cell.value) : '';
            },*/
            pagination: true,
            enableColResize: true,
        }

        rows.forEach(function(result) {
            let date = result.attributes['P3_DATESURVEYED'];
            let year = date.substr(0,4);
            let month = date.substr(4,2);
            let day = date.substr(6,2);
            let newDate = new Date(year, month, day).toLocaleString();

            gridOptions.rowData.push({
                planNumber: result.attributes['PLANNO'], 
                description: result.attributes['P2_DESCRIPTION'],
                //dateSurvey: result.attributes['P3_DATESURVEYED'],
                dateSurvey: newDate,
                planDetail: result.attributes[''],
                lto: result.attributes['ALTERNATEPLANNO']
            })
        })
        
        new Grid(gridDiv, gridOptions);
        new Grid(gridDiv2, gridOptions);

    }

    compileTemplate(template): JQuery<HTMLElement> {
        let temp = $(template);
        this.mapApi.$compile(temp);
        return temp;
    }

    close() {
        this.panel.close();
    }
}

export interface TableLoader {
    mapApi: any;
    panel: any;
    hidden: boolean;
    legendBlock: any;
}

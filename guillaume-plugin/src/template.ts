// this is where you will add all needed html template

// this is a sample to show you how to link your button with Angular controller
// ng-controller will link to a controller in one of your ts file
// to access translation, use {{ 'plugins.YOUR PLUGIN NAME.YOUR TRANSLATION VALUE' | translate }}
// in this sample, ng-click will be link to a function called sampleFunction inside my controller
export const SAMPLE_BUTTON = `
<div class="" ng-controller="SampleCtrl as ctrl">
    <md-button
        aria-label="{{ 'plugins.test.placeHolder' | translate }}"
        class="rv-button-square md-button ng-scope md-ink-ripple"
        ng-click="ctrl.sampleFunction()">
            {{ 'Search' | translate }}
        <md-tooltip>{{ 'Search' | translate }}</md-tooltip>
    </md-button>
</div>
`;

export const SAMPLE_INPUT_TEXT = `
<div class="" ng-nom-text="TextCtrl as text">
    <md-input-container>
        <label>Enter Plan Number</label>
        <input type="text" ng-model="color" required="" md-maxlength="10" (focusout) = "focusoutHandler($event)">
        
        </md-input-container>
</div>
`;

export const MAPNAV_TOOL_TOOLBAR_TEMPLATE = `
<div class="" ng-nom-text="TextCtrl as text">
    <md-input-container>
        <label>Enter Plan Number</label>
        <input type="text" ng-model="color" required="" md-maxlength="10" (focusout) = "focusoutHandler($event)">
        
        </md-input-container>
</div>
`;

export const SAMPLE_FORM = `
<div class="" ng-controller="SampleCtrl1 as ctrl">
    <section layout="row" layout-sm="column" layout-align="left center" layout-wrap>
        <md-input-container>
            <label>Enter Plan Number</label>
            <input type="text" ng-model="color" required="" md-maxlength="10" id="myInput">
        </md-input-container>
        <md-button 
            aria-label="{{ 'control.label' | translate }}"
            class="md-button ng-scope md-raised md-primary"
            ng-click="ctrl.sampleFunction($event)">
                {{ 'Search' | translate }}
        </md-button>
    </section>

    <section layout="row" layout-sm="column" layout-align="left center" layout-wrap>
        <input type="text" placeholder="Type something..." id="myInput2">
        <md-button 
            aria-label="{{ 'control.label' | translate }}"
            class="rv-button-square md-button ng-scope md-ink-ripple"
            ng-click="ctrl.sampleFunctions($event)";"ctrl.queryAdminArea(0)">
                {{ 'Search' | translate }}
        </md-button>
        <div class="label">Section 2</div>
    </section>
</div>

`;

export const TABLE_TEMPLATE =  `
<div class="example-wrapper">
  <ag-grid-angular
    #agGrid
    style="width: 100%; height: 100%;"
    id="myGrid"
    class="ag-theme-alpine"
    [modules]="modules"
    [columnDefs]="columnDefs"
    [defaultColDef]="defaultColDef"
    [rowData]="rowData"
    [frameworkComponents]="frameworkComponents"
    [loadingOverlayComponent]="loadingOverlayComponent"
    [loadingOverlayComponentParams]="loadingOverlayComponentParams"
    [noRowsOverlayComponent]="noRowsOverlayComponent"
    [noRowsOverlayComponentParams]="noRowsOverlayComponentParams"
    (gridReady)="onGridReady($event)"
  ></ag-grid-angular>
</div>
`;

export const tableAngular = `

<table mat-table [dataSource]="dataSource" class="mat-elevation-z8">

    <ng-container matColumnDef="number">
        <th mat-header-cell *matHeaderCellDef> {{ 'plugins.guillaumePlugin.planNumberTitle' | translate }} </th>
        <td mat-cell *matCellDef="let element"> {{element.number}} </td>
    </ng-container>

    <ng-container matColumnDef="description">
        <th mat-header-cell *matHeaderCellDef> {{ 'plugins.guillaumePlugin.descriptionTitle' | translate }} </th>
        <td mat-cell *matCellDef="let element"> {{element.description}} </td>
    </ng-container>
    
    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
    <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
    <mat-paginator [pageSizeOptions]="[5, 10, 20]" showFirstLastButtons></mat-paginator>
</table>
<section layout="row" layout-align="center center">
  <md-button class="groupX left">Apple</md-button>
  <md-button class="groupX middle">Samsung</md-button>
  <md-button class="groupX middle">Sony</md-button>
  <md-button class="groupX right">B&amp;O</md-button>
</section>

<md-divider></md-divider>
`;

export const TAB_TEMPLATE = ` 
<md-button ng-controller="DownloadBtnCtrl as ctrl"
    class="md-icon-button black md-ink-ripple rv-button-32 rv-mapnav-search-content"
    ng-disabled="ctrl.isButtonDisabled()"
    ng-click="ctrl.downloadResultsAsJson()">
    <md-tooltip>{{ 'plugins.elevation.resultPanel.header.downloadBtn.tooltip' | translate }}</md-tooltip>
    <md-icon>
        <svg xmlns="http://www.w3.org/2000/svg" fit height="100%" width="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 2 24 24" focusable="false">
            <g>
                <path d="M0 0h24v24H0V0z" fill="none"/><path d="M14.91 6.71c-.39-.39-1.02-.39-1.41 0L8.91 11.3c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L11.03 12l3.88-3.88c.38-.39.38-1.03 0-1.41z"/>
            </g>
        </svg>
    </md-icon>
</md-button>
`;

export const PLAN_PANEL_TEMPLATE = ` 

<div class="rv-panel-content" ng-controller="SearchPanel as ctrl">

    <section layout="row" layout-sm="column" layout-align="center center" layout-wrap>

        <md-input-container class="md-block1" flex-gt-sm>
            <label>Province</label>
            <md-select ng-model="user.state" id=selectInput>
                <md-option ng-repeat="state in states" value="{{state.abbrev}}">
                    {{state.abbrev}}
                </md-option>
            </md-select>
        </md-input-container>

        <md-input-container class="md-block" flex-gt-sm>
            <label>{{ 'plugins.guillaumePlugin.inputText' | translate }} </label>
            <input type="text" ng-model="color" required="" md-maxlength="10" id="planInput">
        </md-input-container>
        
        <md-button 
            title="{{ 'plugins.guillaumePlugin.searchAria' | translate }}"
            class="bt1 ng-scope md-raised md-primary rv-search-button"
            aria-label="{{ 'plugins.guillaumePlugin.searchAria' | translate }}"
            ng-click="searchFunction()">
                {{ 'plugins.guillaumePlugin.buttonName' | translate }}
        </md-button>
        
        <md-button 
            title="{{ 'plugins.guillaumePlugin.resetLabel' | translate }}"
            class="bt2 ng-scope md-raised md-primary rv-reset-button"
            ng-click="resetFunction()">
                {{ 'plugins.guillaumePlugin.resetButton' | translate }}
        </md-button>
    </section>
</div>

<md-divider></md-divider>




<div class="wb-tabs col-sm-12 mrgn-tp-lg wb-init wb-tabs-inited tabs-acc" id="resultTabs" style="height: 280px; overflow: auto">
    <div class="tabpanels">
        <details id="tab_2_3" open="open" class="resultTabs-grp fade in" role="tabpanel" tabindex="-1" aria-hidden="false" aria-expanded="true" aria-labelledby="tab_2_3-lnk">
            <summary class="wb-toggle tgl-tab wb-init wb-toggle-inited" data-toggle="{&quot;parent&quot;: &quot;#resultTabs&quot;, &quot;group&quot;: &quot;.resultTabs-grp&quot;}" aria-hidden="true" id="wb-auto-4" role="tab" aria-selected="true" tabindex="0" aria-posinset="1" aria-setsize="6">Survey Plan (<span id="queryParcelTabCount">0</span>)</summary><div class="tgl-panel" aria-labelledby="wb-auto-4" aria-expanded="true" aria-hidden="false">
                <table id="queryPlanResultTable" class="table table-striped table-condensed table-simplify col-sm-12" title="List of parcel results from the attribute and map searches.">
                    <thead>
                        <tr id="queryPlanResultHead" style="width: 100%">
                        <th style="width: 20%;" scope="col">{{ 'plugins.guillaumePlugin.planNumberTitle' | translate }}</th>
                        <th style="width: 20%;" scope="col">{{ 'plugins.guillaumePlugin.descriptionTitle' | translate }}</th>
                        <th style="width: 20%;" scope="col">{{ 'plugins.guillaumePlugin.surveyDateTitle' | translate }}</th>
                        <th style="width: 20%;" scope="col">{{ 'plugins.guillaumePlugin.planDetailTitle' | translate }}</th>
                        <th style="width: 20%;" scope="col">{{ 'plugins.guillaumePlugin.bedfTitle' | translate }}</th>
                        </tr>
                    </thead>
                    <tbody id="queryPlanResult">

                    </tbody>
                </table>
        </details>
    </div>
</div>
`;
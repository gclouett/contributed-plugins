// Add all needed html template
// ng-controller will link to a controller in one of your ts file
// to access translation, use {{ 'plugins.YOUR PLUGIN NAME.YOUR TRANSLATION VALUE' | translate }}

export const MAPNAV_TOOL_TOOLBAR_TEMPLATE = `
<div class="" ng-nom-text="TextCtrl as text">
    <md-input-container>
        <label>Enter Plan Number</label>
        <input type="text" ng-model="color" required="" md-maxlength="10" (focusout) = "focusoutHandler($event)">
        
        </md-input-container>
</div>
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

export const SEARCH_PANEL_TEMPLATE = ` 

<div class="rv-panel-content" ng-controller="SearchPanel as ctrl">

    <section layout="column" layout-sm="column" layout-align="center left" layout-wrap>

        <md-input-container class=md-block-input-province" flex-gt-sm>
            <label>Province</label>
            <md-select ng-model="user.state" id=selectInput>
                <md-option ng-repeat="state in states" value="{{state.abbrev}}">
                    {{state.abbrev}}
                </md-option>
            </md-select>
        </md-input-container>

        <md-input-container class="md-block-input-plan" flex-gt-sm>
            <label>{{ 'plugins.searchPlugin.inputText' | translate }} </label>
            <input type="text" ng-model="color" required="" md-maxlength="10" id="planInput">
        </md-input-container>
    </section>
    
    <section layout="row" layout-sm="column" layout-align="center left" layout-wrap>
        <md-button 
            title="{{ 'plugins.searchPlugin.searchAria' | translate }}"
            class="bt1 ng-scope md-raised md-primary rv-search-button"
            aria-label="{{ 'plugins.searchPlugin.searchAria' | translate }}"
            ng-click="searchFunction()">
                {{ 'plugins.searchPlugin.buttonName' | translate }}
        </md-button>
        
        <md-button 
            title="{{ 'plugins.searchPlugin.resetLabel' | translate }}"
            class="bt2 ng-scope md-raised md-primary rv-reset-button"
            ng-click="resetFunction()">
                {{ 'plugins.searchPlugin.resetButton' | translate }}
        </md-button>
    </section>
</div>

<md-divider></md-divider>
`;

export const GRID_TEMPLATE = `
<div class="grid-wrapper">
    <div id="resultsGrid" style="" class="ag-theme-material">
        <md-icon ng-if="sortAsc" class="rv-sort-arrow" md-svg-icon="navigation:arrow_upward" aria-label="{{ 'plugins.enhancedTable.columnHeader.sortAsc' | translate }}"></md-icon>
</div>
`;

export const PROVINCE = {
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
export declare const MAPNAV_TOOL_TOOLBAR_TEMPLATE = "\n<div class=\"\" ng-nom-text=\"TextCtrl as text\">\n    <md-input-container>\n        <label>Enter Plan Number</label>\n        <input type=\"text\" ng-model=\"color\" required=\"\" md-maxlength=\"10\" (focusout) = \"focusoutHandler($event)\">\n        \n        </md-input-container>\n</div>\n";
export declare const TAB_TEMPLATE = "\u00A0\n<md-button ng-controller=\"DownloadBtnCtrl as ctrl\"\n    class=\"md-icon-button black md-ink-ripple rv-button-32 rv-mapnav-search-content\"\n    ng-disabled=\"ctrl.isButtonDisabled()\"\n    ng-click=\"ctrl.downloadResultsAsJson()\">\n    <md-tooltip>{{ 'plugins.elevation.resultPanel.header.downloadBtn.tooltip' | translate }}</md-tooltip>\n    <md-icon>\n        <svg xmlns=\"http://www.w3.org/2000/svg\" fit height=\"100%\" width=\"100%\" preserveAspectRatio=\"xMidYMid meet\" viewBox=\"0 2 24 24\" focusable=\"false\">\n            <g>\n                <path d=\"M0 0h24v24H0V0z\" fill=\"none\"/><path d=\"M14.91 6.71c-.39-.39-1.02-.39-1.41 0L8.91 11.3c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L11.03 12l3.88-3.88c.38-.39.38-1.03 0-1.41z\"/>\n            </g>\n        </svg>\n    </md-icon>\n</md-button>\n";
export declare const SEARCH_PANEL_TEMPLATE = "\u00A0\n\n<div class=\"rv-panel-content\" ng-controller=\"SearchPanel as ctrl\">\n\n    <section layout=\"column\" layout-sm=\"column\" layout-align=\"center left\" layout-wrap>\n\n        <md-input-container class=md-block-input-province\" flex-gt-sm>\n            <label>Province</label>\n            <md-select ng-model=\"user.province\" id=selectInput>\n                <md-option ng-repeat=\"province in provinces\" value=\"{{province.canada}}\">\n                    {{province.canada}}\n                </md-option>\n            </md-select>\n        </md-input-container>\n\n        <md-input-container class=\"md-block-input-plan\" flex-gt-sm>\n            <label>{{ 'plugins.searchPlugin.inputText' | translate }} </label>\n            <input type=\"text\" ng-model=\"color\" required=\"\" md-maxlength=\"10\" id=\"planInput\">\n        </md-input-container>\n    </section>\n\n    <section layout=\"row\" layout-sm=\"column\" layout-align=\"center left\" layout-wrap>\n        <md-button \n            title=\"{{ 'plugins.searchPlugin.searchAria' | translate }}\"\n            class=\"bt1 ng-scope md-raised md-primary rv-search-button\"\n            aria-label=\"{{ 'plugins.searchPlugin.searchAria' | translate }}\"\n            ng-click=\"searchFunction()\">\n                {{ 'plugins.searchPlugin.buttonName' | translate }}\n        </md-button>\n        \n        <md-button \n            title=\"{{ 'plugins.searchPlugin.resetLabel' | translate }}\"\n            class=\"bt2 ng-scope md-raised md-primary rv-reset-button\"\n            ng-click=\"resetFunction()\">\n                {{ 'plugins.searchPlugin.resetButton' | translate }}\n        </md-button>\n    </section>\n</div>\n\n<md-divider></md-divider>\n";
export declare const GRID_TEMPLATE = "\n\n<div class=\"grid-wrapper\">\n    <div ng-controller=\"ResultsTabsCtrl as ctrl\" layout=\"column\" class=\"ng-scope\">\n    \n        <md-toolbar class=\"md-accent\">\n            <div class=\"tabButton\">\n                <md-button ng-repeat=\"control in ctrl.tabs\" \n                    name=\"{{ control.name }}\"\n                    title=\"{{ control.title | translate }}\"\n                    class=\"tablinks\"\n                    ng-click=\"openTab(control.name)\">\n                    {{ control.title | translate }} \n                \n                </md-button>\n            </div>\n\n            <div id=\"survey\" class=\"tabcontent\">\n                <h3>Arpentage en cours</h3>\n                <p>Info sur les arpentages</p> \n            </div>\n\n            <div id=\"plan1\" class=\"tabcontent\">\n                <h3>Plan d'arpentage</h3>\n                <p>Info sur les plans</p>\n            </div>\n\n            <div id=\"township\" class=\"tabcontent\">\n                <h3>Township</h3>\n                <p>Info sur les townships</p>\n            </div>\n\n            <div id=\"admin\" class=\"tabcontent\">\n                <h3>Administrative Area</h3>\n                <p>Info sur les townships</p>\n            </div>\n\n            <div id=\"info\" class=\"tabcontent\">\n                <h3>Informations additionnelles</h3>\n                <p>Info sur les townships</p>\n            </div>\n        </md-toolbar>\n    </div>\n    <div id=\"plan\" style=\"\" class=\"ag-theme-material\">\n</div>\n\n";
export declare const LEGEND_TEMPLATE = "\n\t<div class=\"tabpanels\" ng-controller=\"LegendPanel as ctrl\">\n        <div class=\"tgl-panel\" aria-labelledby=\"wb-auto-2\" aria-expanded=\"true\" aria-hidden=\"false\">\n\t\t\t<div>\n                <form id=\"legend\" action=\"javascript:void(0)\" method=\"post\" class=\"form-horizontal mrgn-rght-0 mrgn-lft-0\">\n\t                <h3>L\u00E9gende</h3>\n\t\t            <details class=\"row mrgn-lft-0 mrgn-rght-0\" open=\"\">\n\t\t            <summary>P\u00E9trole et gaz</summary>\n\t\t\t\t\t<div class=\"checkbox\">\n                        <label for=\"legend-4\">\n                            <input type=\"checkbox\" value=\"4\" id=\"legend-4\" checked=\"\" ng-click=\"toggleLayerVisibility(97)\">\n                            <span>\n                                <img class=\"image-actual\" src=\"./images/legend-97.png\" alt=\"Rectangle bleu\" style=\"width:auto !important\">\n                            </span>\n                            R\u00E9seau de p\u00E9trole et de gaz\n                        </label>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n";
export declare const SIDE_NAV_TEMPLATE1 = "\n<div>\n    <ul class=\"heroes\">\n        <li>Aire prot\u00E9g\u00E9e</li>\n        <li>Arpentage en cours</li>\n        <li>Communaut\u00E9</li>\n        <li>Coordon\u00E9es</li>\n        <li>Cri-Naskapi</li>\n        <li>Limite municipale</li>\n        <li>Plan d'arpentage</li>\n        <li>Parc national</li>\n        <li>Parcelle</li>\n        <li>Quadrilat\u00E8re</li>\n        <li>R\u00E9serve indienne</li>\n        <li>Township</li>\n    </ul>\n</div>\n\n<div>\n  <select class=\"form-control\" multiple=\"multiple\" size=\"12\" id=\"selQueryType\">\n    <option value=\"queryProtectedArea\">Aire prot\u00E9g\u00E9e</option>\n    <option value=\"querySurveyProject\">Arpentage en cours</option>\n    <option value=\"queryCommunity\">Communaut\u00E9</option>\n    <option value=\"queryCreeNaskapi\">Cri-Naskapi</option>\n    <option value=\"queryMunicipalBoundary\">Limite municipale</option>\n    <option value=\"querySurveyPlan\">Plan d'arpentage</option>\n    <option value=\"queryNationalPark\">Parc national</option>\n    <option value=\"queryParcel\">Parcelle</option>\n    <option value=\"queryQuad\">Quadrilat\u00E8re</option>\n    <option value=\"queryIndianReserve\">R\u00E9serve indienne</option>\n    <option value=\"queryTownship\">Township</option>\n    <option value=\"queryCoordinate\">Coordonn\u00E9es</option>\n  </select>\n\n  <select class=\"form-control\" multiple=\"multiple\" size=\"12\" id=\"selQueryType\">\n            <option value=\"queryProtectedArea\">Aire prot\u00E9g\u00E9e</option>\n            <option value=\"querySurveyProject\">Arpentage en cours</option>\n            <option value=\"queryCommunity\">Communaut\u00E9</option>\n            <option value=\"queryCreeNaskapi\">Cri-Naskapi</option>\n            <option value=\"queryMunicipalBoundary\">Limite municipale</option>\n            <option value=\"querySurveyPlan\">Plan d'arpentage</option>\n            <option value=\"queryNationalPark\">Parc national</option>\n            <option value=\"queryParcel\">Parcelle</option>\n            <option value=\"queryQuad\">Quadrilat\u00E8re</option>\n            <option value=\"queryIndianReserve\">R\u00E9serve indienne</option>\n            <option value=\"queryTownship\">Township</option>\n            <option value=\"queryCoordinate\">Coordonn\u00E9es</option>\n    </select>\n\n</div>\n\n";
export declare const TABS_TEMPLATE = "\n\n<div ng-controller=\"ResultsTabsCtrl as ctrl\" layout=\"column\" class=\"ng-scope\">\n\n    <div class=\"tabButton\">\n        <md-button ng-repeat=\"control in ctrl.tabs\" name=\"{{ tabs }} \n            title=\"{{ control.title | translate }}\"\n            class=\"tablinks\"\n            ng-click=\"openTab(control.name)\">\n            {{ control.title | translate }}\n        </md-button>\n    </div>\n\n    <div id=\"parcel\" class=\"tabcontent\">\n        <h3>Parcelle</h3>\n        <p>Info sur les parcelles</p>\n    </div>\n\n      <div id=\"survey\" class=\"tabcontent\">\n        <h3>Arpentage en cours</h3>\n        <p>Info sur les arpentages</p> \n     </div>\n\n    <div id=\"plan\" class=\"tabcontent\">\n        <h3>Plan d'arpentage</h3>\n        <p>Info sur les plans</p>\n    </div>\n\n    <div id=\"township\" class=\"tabcontent\">\n        <h3>Township</h3>\n        <p>Info sur les townships</p>\n    </div>\n\n    <div id=\"admin\" class=\"tabcontent\">\n        <h3>Administrative Area</h3>\n        <p>Info sur les townships</p>\n    </div>\n\n    <div id=\"info\" class=\"tabcontent\">\n        <h3>Informations additionnelles</h3>\n        <p>Info sur les townships</p>\n    </div>\n\n    <section layout=\"row\" flex></section>\n\n</div>\n";
export declare const TOWNSHIP_SEARCH = " \n<section layout=\"column\" layout-sm=\"column\" layout-align=\"center left\" layout-wrap>\n    <md-input-container class=\"md-block-input-section\" flex-gt-sm>\n        <label>{{ 'plugins.searchPlugin.inputSection' | translate }}</label>\n        <input type=\"text\" ng-model=\"color\" required=\"\" md-maxlength=\"10\" id=\"sectionInput\">\n    </md-input-container>\n    <md-input-container class=\"md-block-input-township\" flex-gt-sm>\n        <label>{{ 'plugins.searchPlugin.inputTownship' | translate }}</label>\n        <input type=\"text\" ng-model=\"color\" required=\"\" md-maxlength=\"10\" id=\"townshipInput\">\n    </md-input-container>\n    <md-input-container class=\"md-block-input-range\" flex-gt-sm>\n        <label>{{ 'plugins.searchPlugin.inputRange' | translate }}</label>\n        <input type=\"text\" ng-model=\"color\" required=\"\" md-maxlength=\"10\" id=\"rangeInput\">\n    </md-input-container>\n    <md-input-container class=md-block-input-direction\" flex-gt-sm>\n        <label>Direction</label>\n        <md-select ng-model=\"user.direction\" id=selectDirection>\n            <md-option ng-repeat=\"direction in directions\" value=\"{{direction.township}}\">{{direction.township}}</md-option>\n        </md-select>\n    </md-input-container>\n    <md-input-container class=\"md-block-input-meridian\" flex-gt-sm>\n        <label>{{ 'plugins.searchPlugin.inputMeridian' | translate }}</label>\n        <input type=\"text\" ng-model=\"color\" required=\"\" md-maxlength=\"10\" id=\"meridianInput\">\n    </md-input-container>\n</section>\n\n<section layout=\"row\" layout-sm=\"column\" layout-align=\"center left\" layout-wrap>\n    <md-button \n        title=\"{{ 'plugins.searchPlugin.searchAria' | translate }}\"\n        class=\"bt1 ng-scope md-raised md-primary rv-search-button\"\n        aria-label=\"{{ 'plugins.searchPlugin.searchAria' | translate }}\"\n        ng-click=\"searchFunction()\">\n        {{ 'plugins.searchPlugin.buttonName' | translate }}\n    </md-button>\n            \n    <md-button \n        title=\"{{ 'plugins.searchPlugin.resetLabel' | translate }}\"\n        class=\"bt2 ng-scope md-raised md-primary rv-reset-button\"\n        ng-click=\"resetFunction()\">\n        {{ 'plugins.searchPlugin.resetButton' | translate }}\n    </md-button>\n</section>\n";
export declare const PLAN_SEARCH = " \n<section layout=\"column\" layout-sm=\"column\" layout-align=\"center left\" layout-wrap>\n\n    <md-input-container class=md-block-input-province\" flex-gt-sm>\n        <label>Province</label>\n        <md-select ng-model=\"user.province\" id=selectInput1>\n            <md-option ng-repeat=\"province in provinces\" value=\"{{province.canada}}\">{{province.canada}}</md-option>\n        </md-select>\n    </md-input-container>\n\n    <md-input-container class=\"md-block-input-land\" flex-gt-sm>\n        <label>{{ 'plugins.searchPlugin.canadaLand' | translate }}</label>\n        <md-select ng-model=\"user.province\" id=selectInput>\n            <md-option ng-repeat=\"province in provinces\" value=\"{{province.canada}}\">{{province.canada}}</md-option>\n        </md-select>\n    </md-input-container>\n\n    <md-input-container class=\"md-block-input-plan\" flex-gt-sm>\n        <label>{{ 'plugins.searchPlugin.inputText' | translate }}</label>\n        <input type=\"text\" ng-model=\"color\" required=\"\" md-maxlength=\"10\" id=\"planInput1\">\n    </md-input-container>\n</section>\n\n<section layout=\"row\" layout-sm=\"column\" layout-align=\"center left\" layout-wrap>\n    <md-button \n        title=\"{{ 'plugins.searchPlugin.searchAria' | translate }}\"\n        class=\"bt1 ng-scope md-raised md-primary rv-search-button\"\n        aria-label=\"{{ 'plugins.searchPlugin.searchAria' | translate }}\"\n        ng-click=\"searchFunction()\">\n        {{ 'plugins.searchPlugin.buttonName' | translate }}\n    </md-button>\n            \n    <md-button \n        title=\"{{ 'plugins.searchPlugin.resetLabel' | translate }}\"\n        class=\"bt2 ng-scope md-raised md-primary rv-reset-button\"\n        ng-click=\"resetFunction()\">\n        {{ 'plugins.searchPlugin.resetButton' | translate }}\n    </md-button>\n</section>\n";
export declare const SIDE_NAV_TEMPLATE: string;
export declare const PROVINCE: {
    'fr-CA': {
        'Canada': string;
        'Alberta': string;
        'Colombie-Britannique': string;
        'Île-du-Prince-Édouard': string;
        'Manitoba': string;
        'Nouveau-Brunswick': string;
        'Nouvelle-Écosse': string;
        'Nunavut': string;
        'Ontario': string;
        'Québec': string;
        'Saskatchewan': string;
        'Terre-Neuve-et-Labrador': string;
        'Territoire du Nord-Ouest': string;
        'Yukon': string;
    };
    'en-CA': {
        'Canada': string;
        'Alberta': string;
        'British-Colombia': string;
        'Prince Edward Island': string;
        'Manitoba': string;
        'New Brunswick': string;
        'Nova Scotia': string;
        'Nunavut': string;
        'Ontario': string;
        'Quebec': string;
        'Saskatchewan': string;
        'Newfoundland and Labrador': string;
        'Northwest Territories': string;
        'Yukon': string;
    };
};

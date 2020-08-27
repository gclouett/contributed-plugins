export declare const TABLE_LOADING_TEMPLATE: (legendEntry: any) => string;
export declare const TABLE_LOADING_TEMPLATE2: (legendEntry: any) => string;
export declare const PRINT_TABLE_NOT_ROWS = "\n\n<div class=\"example-wrapper\">\n    <div id=\"myGrid\" style=\"\" class=\"ag-theme-material\">\n        <md-icon ng-if=\"sortAsc\" class=\"rv-sort-arrow\" md-svg-icon=\"navigation:arrow_upward\" aria-label=\"{{ 'plugins.enhancedTable.columnHeader.sortAsc' | translate }}\"></md-icon>\n</div>\n";
export declare const CUSTOM_HEADER = "\n<div class=\"column-header\">\n            <md-button class=\"custom-header-label\">\n                <span ref=\"eText\" role=\"columnheader\">TEST TEST2</span>\n            </md-button>\n            <md-icon ng-if=\"sortAsc\" class=\"rv-sort-arrow\" md-svg-icon=\"navigation:arrow_upward\" aria-label=\"{{ 'plugins.enhancedTable.columnHeader.sortAsc' | translate }}\"></md-icon>\n            <md-icon ng-if=\"sortDesc\" class=\"rv-sort-arrow\" md-svg-icon=\"navigation:arrow_downward\" aria-label=\"{{ 'plugins.enhancedTable.columnHeader.sortDsc' | translate }}\"></md-icon>\n            <div class=\"arrows\"></div>\n            <div class=\"reorder-icons\">\n                <md-button class=\"reorder-button md-icon-button move-left\" ng-disabled=\"min\" aria-label=\"{{ 'plugins.enhancedTable.columnHeader.reorderLeft' | translate }}\">\n                    <md-icon ng-style=\"{ 'font-size': '16px', height: '16px' }\" md-svg-icon=\"hardware:keyboard_arrow_left\"></md-icon>\n                </md-button>\n                <md-button class=\"reorder-button md-icon-button move-right\" ng-disabled=\"max\" aria-label=\"{{ 'plugins.enhancedTable.columnHeader.reorderRight' | translate }}\">\n                    <md-icon ng-style=\"{ 'font-size': '16px', height: '16px' }\" md-svg-icon=\"hardware:keyboard_arrow_right\"></md-icon>\n                </md-button>\n            </div>\n        </div>\n";
export declare const PRINT_TABLE: (title: any, cols: any, rws: any) => string;

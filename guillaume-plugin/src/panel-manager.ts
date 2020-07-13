import { PLAN_PANEL_TEMPLATE, TAB_TEMPLATE } from './template';
import { MakeQuery } from './layer-query';

const Draggabilly = require('draggabilly');

const PANEL_OPTIONS_CSS = {
    top: '50%',
    left: '50%',
    width: '800px',
    height: '360px',
    marginLeft: '-250px',
    marginTop: '-180px'
};

const provEngFra = {
    'fr-CA' :[
        'Canada',
        'Alberta',
        'Colombie-Britannique',
        'Île-du-Prince-Édouard',
        'Manitoba',
        'Nouveau-Brunswick',
        'Nouvelle-Écosse',
        'Nunavut',
        'Ontario',
        'Québec',
        'Saskatchewan',
        'Terre-Neuve-et-Labrador',
        'Territoire du Nord-Ouest',
        'Yukon'
    ],
    'en-CA': [
        'Canada',
        'Alberta',
        'British-Colombia',
        'Prince Edward Island',
        'Manitoba',
        'New Brunswick',
        'Nova Scotia',
        'Nunavut',
        'Ontario',
        'Quebec',
        'Saskatchewan',
        'Newfoundland and Labrador',
        'Northwest Territories',
        'Yukon'
    ]
} 


export class PlanPanel {

    private mapApi: any;
    private configLang: any;
    private planInput: any;
    private controls: any;
    public planPanel: any;
  
    constructor (mapApi: any, configLang: any) {
        this.mapApi = mapApi;
        this.configLang = configLang
    }

    //show (mapApi) {
    show(mapApi = this.mapApi, configLang=this.configLang) {

        const planPanel = this.mapApi.panels.create('searchPlanPanel');

        planPanel.header.title = this.mapApi.getTranslatedText('plugins.guillaumePlugin.pluginName');
        planPanel.element.addClass('ag-theme-material mobile-fullscreen tablet-fullscreen rv-plan-dialog-hidden');
        planPanel.element.css(PANEL_OPTIONS_CSS);
        planPanel.allowOffscreen = true;

        //Close button
        const close = planPanel.header.closeButton;
        close.removeClass('primary');
        close.addClass('black md-ink-ripple');

        // Make panel draggable
        planPanel.element.addClass('draggable');
        const draggable = new Draggabilly(planPanel.element.get(0), {
            handle: '.rv-header'
        });

        const that = this;
        this.planPanel = planPanel
  
        this.mapApi.agControllerRegister('SearchPanel', ['$scope','$http', function($scope, $http) {

            let b = that.configLang;
        
            $scope.searchFunction = function() {
                let a = new MakeQuery(mapApi, b, "planInput")
            }

            $scope.resetFunction = function() {
                
                let inputBox = <HTMLInputElement>document.getElementById("planInput");
                inputBox.value = ''
                
                let queryTable1 = <HTMLTableElement>document.getElementById("queryPlanResult");
                let queryTable2 =  <HTMLElement>document.getElementById("tableLoaderId");

                if (queryTable2) {
                    queryTable2.remove()
                }

                while (queryTable1.rows.length > 0) {
                    queryTable1.deleteRow(0);
                }
            }

            $scope.states = provEngFra[b].map(function(state) {
                return {abbrev:state}
            })

            //this.mapApi.layers.reload.subscribe((baseLayer: any, interval: boolean) => 

        }]);

        /*this.mapApi.agControllerRegister('AppCtrl', ['$scope', function($scope) {
            $scope.data = {
                selectedIndex: 0,
                secondLocked:  true,
                secondLabel:   "Item Two",
                bottom:        false
            };
            $scope.next = function() {
                $scope.data.selectedIndex = Math.min($scope.data.selectedIndex + 1, 2) ;
            };
            $scope.previous = function() {
                $scope.data.selectedIndex = Math.max($scope.data.selectedIndex - 1, 0);
            };

        }])*/

  
        let panelTemplate = $(PLAN_PANEL_TEMPLATE);
        this.mapApi.$compile(panelTemplate);
        planPanel.body.empty();
        planPanel.body.prepend(panelTemplate);
        planPanel.open();
  
    }

    setIconBar() {

        this.mapApi.agControllerRegister('DownloadBtnCtrl', ['$scope', function($scope) {
            $scope.downloadResultsAsJson = 'test';
        }])
        
        let toolBarButton = $(TAB_TEMPLATE);
        this.mapApi.$compile(toolBarButton);
        $('rv-mapnav .rv-mapnav-content').prepend(toolBarButton);

    }


    closePanel() {
        this.planPanel.close()
        this.planPanel.destroy()

    }
    
}
  
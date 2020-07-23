import { SEARCH_PANEL_TEMPLATE, TAB_TEMPLATE, PROVINCE } from './template';
import { MakeQuery } from './layer-query';

const Draggabilly = require('draggabilly');

const PANEL_OPTIONS_CSS = {
    top: '50%',
    left: '50%',
    width: '400px',
    height: '360px',
    marginLeft: '-250px',
    marginTop: '-180px'
};

export class PlanPanel {

    private mapApi: any;
    private configLang: any;
    public planPanel: any;
    
    constructor (mapApi: any, configLang: any) {
        this.mapApi = mapApi;
        this.configLang = configLang
    }

    show(mapApi = this.mapApi, configLang=this.configLang) {

        const planPanel = this.mapApi.panels.create('searchPlanPanel');

        planPanel.header.title = this.mapApi.getTranslatedText('plugins.searchPlugin.pluginName');
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
        
            $scope.searchFunction = function() {

                let inputBox = <HTMLInputElement>document.getElementById("planInput");
                if (inputBox.checkValidity()) {
                    let query = new MakeQuery(mapApi, configLang);
                } else {
                    inputBox.style.borderColor = 'red'
                }
            }

            $scope.resetFunction = function() {

                let inputBox = <HTMLInputElement>document.getElementById("planInput");
                inputBox.value = ''
                inputBox.style.borderColor = ''

                let resultsGrid =  <HTMLElement>document.getElementById("tableLoaderId");

                if (resultsGrid) {
                    resultsGrid.remove()
                }
            }


            $scope.states = Object.keys(PROVINCE[configLang]).map(function(state) {
                return {abbrev:state}
            })

        }]);
  
        let panelTemplate = $(SEARCH_PANEL_TEMPLATE);
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
  
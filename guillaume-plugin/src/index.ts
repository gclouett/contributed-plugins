// how to add an html element from template.ts to your application
import { SAMPLE_BUTTON, SAMPLE_INPUT_TEXT, SAMPLE_FORM, TABLE_TEMPLATE } from './template';


import { AddLayer } from './add-layer';
import { MakeQuery } from './layer-query';
import { PlanPanel } from './panel-manager';
import { TableManager } from './table-manager';

const os = require('os');
let totalMemory = os.totalmem();
console.log(totalMemory);

const logger = require('./logger');
logger('message');

export default class GuillaumePlugin {

    private _panelForm: any;
    private _panelTable: any;
    private _button: any;
    private panel: any;
    private _panelOptionsForm: object = { bottom: '100px', top: '450px', left: '350px', width: '550px', height: '400px'};
    private _panelOptions: object = {
        'margin-top': '60px',
        'margin-bottom': '60px',
        'margin-right': '60px',
        'margin-left': '420px'
    };

    
    /**
    * Plugin init
    * @function init
    * @param {Object} mapApi the viewer api
    */
    init(mapApi: any) {
        this.mapApi = mapApi;

        mapApi.getTranslatedText = function (stringId) {

            const template = `<div>{{ '` + stringId + `' | translate }}</div>`;
      
            let $el = $(template);
            this.$compile($el);
    
            const text = $el.text();
            $el = null;
      
            return text;
        }
         
        // how to get config
        this.config = this._RV.getConfig('plugins').guillaumePlugin;
        this.config.language = this._RV.getCurrentLang();

        // how to create side menu button
        this._button = this.mapApi.mapI.addPluginButton(
            GuillaumePlugin.prototype.translations[this._RV.getCurrentLang()].placeHolder, this.onMenuItemClick()
        );

        // set toolbar state
        this._button.isActive = true;

        //Add layer to page
        this.addLayer(this.mapApi)

        // how to create a panel, title, close, open
        this._panelForm = this.mapApi.panels.create('PlanPanel');
        this._panelForm.element.css(this._panelOptionsForm);
        this._panelForm.header.title = GuillaumePlugin.prototype.translations[this._RV.getCurrentLang()].placeHolder;
        this._panelForm.header.closeButton
        //this._panelForm.open();

        // create a controller with agControllerRegister
        //this.setAngular(this.mapApi);
        this._panelForm.body = SAMPLE_FORM

        // if body is set and you want to append, compile the code first
        //this._panelForm.body.append(this.compileTemplate(SAMPLE_BUTTON));
        
        this.panel = new PlanPanel(mapApi, this.config.language);
        this.panel.show()
        this.panel.setIconBar()
        //this.panel.panel.closing.subscribe(this.onHideResultPanel.bind(this));

    }

    addLayer(mapApi) {
        let testLayer = new AddLayer(mapApi, this.config);
    }

    
    //When the plugin button is clicked (left menu)
    onMenuItemClick() {
        return () => {
            this._button.isActive = !this._button.isActive;
            this._button.isActive ? this.panel.show() : this.panel.closePanel();
            console.log('side menu clicked');
        };
    }

    setAngular(mapApi) {
        // to reference this inside the function
        const that = this;
        
        this.mapApi.agControllerRegister('SampleCtrl1', function () {

            // access to ng-click
            this.sampleFunction = () => {
                this.valuetestA = (<HTMLInputElement>document.getElementById("myInput")).value
                console.log(this.valuetestA);
                let a = new MakeQuery(mapApi, this.config, "myInput")
                alert(this.valuetestA)
            };
            this.sampleFunctions = () => {
                this.valuetestB = (<HTMLInputElement>document.getElementById("myInput2")).value
                let a = new MakeQuery(mapApi, this.config, "myInput2")

            };
        });
    }


    compileTemplate(template: string): JQuery<HTMLElement> {
        let temp = $(template);
        this.mapApi.$compile(temp);
        return temp;
    }
}

export default interface GuillaumePlugin {
    mapApi: any,
    _RV: any,
    config: any,
    translations: any,
    tableManager: TableManager;

}

GuillaumePlugin.prototype.translations = {
    'en-CA': {
        placeHolder: 'Plan Search test',
        tableTitle: 'Table Name',
        pluginName: 'Plan Search Service',
        buttonName: 'Search',
        inputText: 'Enter Plan Nuber',
        searchAria: 'Search Plan',
        resetLabel: 'Reset search',
        resetButton: 'Reset',
        planNumberTitle: 'Plan Number',
        descriptionTitle: 'Description',
        surveyDateTitle: 'Date of Survey',
        planDetailTitle: 'Plan Detail',
        bedfTitle: 'LTO'

    },
    'fr-CA': {
        placeHolder: 'Recherche de plans test',
        tableTitle: 'Nom de la table',
        pluginName: 'Recherche de plans',
        buttonName: 'Rechercher',
        inputText: 'Numéro de plan',
        searchAria: 'Chercher un plan',
        resetLabel: 'Réinitialiser la recherche',
        resetButton: 'Réinitialiser',
        planNumberTitle: 'Numéro du plan',
        descriptionTitle: 'Description',
        surveyDateTitle: "Date de l'arpentage",
        planDetailTitle: 'Détail du plan',
        bedfTitle: 'BEDF'
    }
};

(<any>window).guillaumePlugin = GuillaumePlugin;

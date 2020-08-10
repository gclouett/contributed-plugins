import { AddLayer } from './add-layer';
import { PlanPanel } from './panel-manager';

const logger = require('./logger');
logger('Loading plugin...');

export default class SearchPlugin {

    private button: any;
    private panel: any;
    
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
        this.config = this._RV.getConfig('plugins').searchPlugin;
        this.config.language = this._RV.getCurrentLang();

        // how to create side menu button
        this.button = this.mapApi.mapI.addPluginButton(
            SearchPlugin.prototype.translations[this._RV.getCurrentLang()].placeHolder, this.onMenuItemClick()
        );

        // set toolbar state
        this.button.isActive = true;

        //Add layer to page
        let testLayer = new AddLayer(mapApi, this.config);
        
        this.panel = new PlanPanel(mapApi, this.config.language);
        //this.panel.createPanel()
        this.panel.showPanel()
        //this.panel.closing.subscribe(this.onHideResultPanel.bind(this));

    }
    
    //When the plugin button is clicked (left menu)
    onMenuItemClick() {
        return () => {
            this.button.isActive = !this.button.isActive;
            this.button.isActive ? this.panel.showPanel() : this.panel.closePanel();
            console.log('side menu clicked');
        };
    }

    /*compileTemplate(template: string): JQuery<HTMLElement> {
        let temp = $(template);
        this.mapApi.$compile(temp);
        return temp;
    }*/
}

export default interface SearchPlugin {
    mapApi: any,
    _RV: any,
    config: any,
    translations: any,
}

SearchPlugin.prototype.translations = {
    'en-CA': {
        placeHolder: 'Plan Search test',
        placeHolder2: 'Map test',
        tableTitle: 'Table Name',
        pluginName: 'Plan Search Service',
        buttonName: 'Search',
        inputText: 'Enter Plan Number',
        searchAria: 'Search Plan',
        resetLabel: 'Reset search',
        resetButton: 'Reset',
        planNumberTitle: 'Plan Number',
        descriptionTitle: 'Description',
        surveyDateTitle: 'Date of Survey',
        planDetailTitle: 'Plan Detail',
        bedfTitle: 'LTO',



        tabs: {
            parcelTab: 'Parcel',
            surveyTab: 'Surveys in Progress',
            planTab: 'Survey Plan',
            townshipTab: 'Township',
            adminTab: 'Administrative Area',
            infoTab: 'Additional Info',
        }
    },
    'fr-CA': {
        placeHolder: 'Recherche de plans test',
        placeHolder2: 'Carte test',
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
        bedfTitle: 'BEDF',
        tabs: {
            parcelTab: 'Parcelle',
            surveyTab: 'Arpentage en cours',
            planTab: "Plan d'arpentage",
            townshipTab: 'Township',
            adminTab: 'Région adminmistrative',
            infoTab: 'Informations supplémentaires',
        }
    }
};

(<any>window).searchPlugin = SearchPlugin;

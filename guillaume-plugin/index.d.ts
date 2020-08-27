/// <reference types="jquery" />
import { TableManager } from './table-manager';
export default class GuillaumePlugin {
    private _panelForm;
    private _panelTable;
    private _button;
    private panel;
    private _panelOptionsForm;
    private _panelOptions;
    /**
    * Plugin init
    * @function init
    * @param {Object} mapApi the viewer api
    */
    init(mapApi: any): void;
    addLayer(mapApi: any): void;
    onMenuItemClick(): () => void;
    setAngular(mapApi: any): void;
    compileTemplate(template: string): JQuery<HTMLElement>;
}
export default interface GuillaumePlugin {
    mapApi: any;
    _RV: any;
    config: any;
    translations: any;
    tableManager: TableManager;
}

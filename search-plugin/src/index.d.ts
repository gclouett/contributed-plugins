export default class SearchPlugin {
    private button;
    private panel;
    /**
    * Plugin init
    * @function init
    * @param {Object} mapApi the viewer api
    */
    init(mapApi: any): void;
    onMenuItemClick(): () => void;
}
export default interface SearchPlugin {
    mapApi: any;
    _RV: any;
    config: any;
    translations: any;
}

/// <reference types="jquery" />
export declare class ToolManager {
    private _mousemoveHandler;
    private _mouseclickHandler;
    private _controls;
    constructor(mapApi: any, config: object);
    setInactive(): void;
    makeControls(config: any): void;
    angularControls(tools: string[]): void;
    createIcon(control: control, icon?: string): void;
    setActive(controls: control[], name: string, forceDisable?: boolean): void;
    keyDownHandler(event: any): void;
    compileTemplate(template: string): JQuery<HTMLElement>;
}
export interface control {
    name: string;
    icon: string;
    active: boolean;
}
export interface ToolManager {
    panel: any;
    mapApi: any;
    active: object;
}

/// <reference types="jquery" />
export declare class TableLoader {
    constructor(mapApi: any, legendBlock: any);
    setSize(maximized: any): void;
    prepareHeader(): void;
    open(): void;
    prepareBody(): void;
    setResultsGrid(results: any): void;
    compileTemplate(template: any): JQuery<HTMLElement>;
    close(): void;
}
export interface TableLoader {
    mapApi: any;
    panel: any;
    hidden: boolean;
    legendBlock: any;
}

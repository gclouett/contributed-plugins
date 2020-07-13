export class AddLayer {
    
    public translations: any;
    
    private mapApi: any;
    private config: any;
    private esriBundle: any;
    private _bundle:any;
    private layer: any;
    private infoTemplate: any;

    constructor (mapApi: any, config: any) {
    
        this.mapApi = mapApi;
        this.config = config;
    
    
        // Load ArcGIS JS API requirements
        let esriBundlePromise = (<any>window).RAMP.GAPI.esriLoadApiClasses([
            ['esri/layers/FeatureLayer', 'FeatureLayer'],
            ['esri/dijit/PopupTemplate', 'PopupTemplate'],
            ["esri/renderers/SimpleRenderer", "SimpleRenderer"],
            ['esri/symbols/SimpleFillSymbol', 'SimpleFillSymbol'],
            ["esri/symbols/SimpleLineSymbol", 'SimpleLineSymbol'],
            ["esri/Color", 'Color'],
            ["dijit/TooltipDialog", "TooltipDialog"],
            ["dijit/popup", "dijitPopup"], 
            ["dojo/domReady!"],
            ["esri/lang", "lang"],
            ["dojo/dom-style", "domStyle"],
            ["esri/graphic", "graphic"],
            ["dojo/dom-construct", "domConstruct"]
        ]);

        let that = this;

        esriBundlePromise.then(esriBundle => {
            that.addLayer(esriBundle, mapApi, config);
            this.esriBundle = esriBundle;
            //this.addSymbology(esriBundle)
           
        });
    }

    addLayer(esriBundle, mapApi, config) {
        this._bundle  = esriBundle;
        this.layer = new esriBundle.FeatureLayer('https://proxyinternet.nrcan.gc.ca/arcgis/rest/services/MB-NC/WMB_Query_AB/MapServer/3', {
          mode: esriBundle.FeatureLayer.MODE_SNAPSHOT,
          id:"1",
          name:"AB-layer5",
          opacity: 0.8,
          outFields: ["ADMINAREAID", "ENGLISHNAME", "PROVINCE"],
          //definitionExpression: "AREA > 0.1",

          infoTemplate: new esriBundle.PopupTemplate({
            title: "{ADMINAREAID}",
            description: "{ENGLISHNAME}",
            fieldInfos: [
              {
                fieldName: "ADMINAREAID",
                visible: true,
                format: 0
              },
              {
                fieldName: "ENGLISHNAME",
                visible: true,
                format:1
              },
              {
                fieldName: "PROVINCE",
                visible: true,
                format:1
              }

            //  //  fieldName: rendererField,
            //    label: "Average Farm Expenses",
            //    visible: true,
            //  //  format: {places: 0}
            ]
          })
        });
      

        //Symbology for the layer
        let symbol = new esriBundle.SimpleFillSymbol(
          esriBundle.SimpleFillSymbol.STYLE_SOLID,
          new esriBundle.SimpleLineSymbol(
            esriBundle.SimpleLineSymbol.STYLE_SOLID,
            new esriBundle.Color([255,255,255,0.35]),  //White
            1
          ),
          new esriBundle.Color([125,125,125,0.35])    //Grey
        );

        this.layer.setRenderer(new esriBundle.SimpleRenderer(symbol));

        // Add layer to map from rest server
        this.mapApi.esriMap.addLayer(this.layer);

        let dialog = new esriBundle.TooltipDialog({
          id: "tooltipDialog",
          style: "position: absolute; width: 250px; font: normal normal normal 10pt Helvetica;z-index:100",
        });
        
        dialog.startup();

        // Symbology when mouse over (red contour with grey background)
        let highlightSymbol = new esriBundle.SimpleFillSymbol(
          esriBundle.SimpleFillSymbol.STYLE_SOLID,
          new esriBundle.SimpleLineSymbol(
            esriBundle.SimpleLineSymbol.STYLE_SOLID,
            new esriBundle.Color([255,0,0]), 3         //Red
          ),
          new esriBundle.Color([125,125,125,0.35])     //Grey
        );
        
        // When mouse over polygon -> start mouse event
        this.mapApi.esriMap.on("load", function(){
          this.mapApi.esriMap.graphics.enableMouseEvents();
        });

        // When mouse out polygon -> clear highlightGraphic and close popup
        this.mapApi.esriMap.graphics.on("mouse-out", function(evt) {
          this.getMap().graphics.clear();
          esriBundle.dijitPopup.close(dialog);
        })

        let newDiv = esriBundle.domConstruct.create("div")
        // 
        this.layer.on("mouse-over", function(evt){
          let t = "<b>${ADMINAREAID}</b><hr><b>Name: </b>${ENGLISHNAME:StringFormat}<br>";

          let content = esriBundle.lang.substitute(evt.graphic.attributes, t);
          let highlightGraphic = new esriBundle.graphic(evt.graphic.geometry, highlightSymbol);
          this.getMap().graphics.add(highlightGraphic);
          dialog.setContent(content);

          esriBundle.domStyle.set(dialog.domNode, 'opacity', 0.85);

          esriBundle.dijitPopup.open({
            popup: dialog,
            x: evt.pageX,
            y: evt.pageY,
          });

          //let parentTest = document.getElementById('mapSearchPlugin')
          //let childTest = document.getElementById('tooltipDialog')
          //parentTest.insertAdjacentElement("beforeend", childTest)
        });

    }

}

// Add translation (Just a copy from another files)
AddLayer.prototype.translations = {
  'en-CA': {
    drawTools: {
      viewshed: {
        addPoint: 'Cliquer pour placer le point de vue',
      }
    }
  },
  'fr-CA': {
    drawTools: {
      viewshed: {
        addPoint: 'Cliquer pour placer le point de vue',
      }
    }
  }
};

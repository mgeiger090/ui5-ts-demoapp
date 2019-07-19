sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function(Controller: typeof sap.ui.core.mvc.Controller) {
  "use strict";

  return Controller.extend("de.ndown.demoapp.controller.MainView", {
    add: (a: number, b: number): number => {
      return a + b;
    }
  });
});

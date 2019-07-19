sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";
    return Controller.extend("de.ndown.demoapp.controller.MainView", {
        add: function (a, b) {
            return a + b;
        }
    });
});

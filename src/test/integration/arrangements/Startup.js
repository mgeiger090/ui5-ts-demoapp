sap.ui.define([
	"sap/ui/test/Opa5"
], function(Opa5) {
	"use strict";

	return Opa5.extend("de.ndown.demoapp.test.integration.arrangements.Startup", {

		iStartMyApp: function () {
			this.iStartMyUIComponent({
				componentConfig: {
					name: "de.ndown.demoapp",
					async: true,
					manifest: true
				}
			});
		}

	});
});

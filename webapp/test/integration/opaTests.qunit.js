/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"fatihpense/ui/example/example-ui5-tooling/test/integration/AllJourneys"
	], function() {
		QUnit.start();
	});
});
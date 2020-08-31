sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"opensap/manageproducts/model/formatter"
	], function(Controller, formatter) {
		"use strict";
		
		return Controller.extend("App2_OpenSAP.ManageProducts.controller.ProductDetails", {
			
			formatter: formatter,
		
			onInit: function() {
				this.byId("categoryLabel").setVisible(true); //setVisible(false) é valor default, eu alterei para true, verificar necessidade
				this.byId("category").setVisible(true); //setVisible(false) é valor default, eu alterei para true, verificar necessidade
			}
		});
			
});

sap.ui.define([], function () {
	"use strict";

	return {

		/**
		 * Rounds the number unit value to 2 digits
		 * @public
		 * @param {string} sValue the number string to be rounded
		 * @returns {string} sValue with 2 digits rounded
		 */
		numberUnit : function (sValue) {
			if (!sValue) {
				return "";
			}
			return parseFloat(sValue).toFixed(2);
		},

			/**
			 * @public
			 * Determines a delivery method based on the weight of a product
			 * @param {string} sMeasure the measure of the weight to be formatted
			 * @param {integer} iWeight the weight to be formatted
			 * @returns {string} sValue the delivery method
			 */
			delivery: function(sMeasure, iWeight) {
				var oResourceBundle = this.getModel("i18n").getResourceBundle(),
					sResult = "";

				if(sMeasure === "G") {
					iWeight = iWeight / 1000;
				}
				if (iWeight < 0.5) {
					sResult = oResourceBundle.getText("formatterMailDelivery");
				} else if (iWeight < 5) {
					sResult = oResourceBundle.getText("formatterParcelDelivery");
				} else {
					sResult = oResourceBundle.getText("formatterCarrierDelivery");
				}
			
				return sResult;
			}
	};

});
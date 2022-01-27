sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "tcap/project1/controller/BaseController",
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (
        BaseController,Controller) {
		"use strict";

		return BaseController.extend("tcap.project1.controller.View1", {
			onInit: function () {

			},
            onPress:function () {
                
          var jsonBooks = {
            title: "test",
            stock:"test"              
          };
                ///////
                var uri = "/v2/catalog/Books";
                $.ajax({
                  url: "/v2/catalog/Books",
                  type: "GET",
                  headers: {
                    ContentType: 'application/json',
                    Accept: 'application/json',
                    cache: true,
                    "X-CSRF-Token": "fetch",
                  },
                  success: function (data, status, xhr) {              
                   // tokenModel["csrfToken"] = xhr.getResponseHeader('X-CSRF-Token');
                   // token = tokenModel["csrfToken"];
                    $.ajax({
                      url: uri,
                      type: "POST",
                      contentType: "application/json",
                      headers: {
                        "X-CSRF-Token": xhr.getResponseHeader("X-CSRF-Token"),
                      },
                      data: JSON.stringify({
                      "title": "test",
                      "stock":"teststock" 
                      }),//   JSON.stringify({jsonBooks}),
                      dataType: "json",
                      async: false,
                      timeout: 0,
                      error: function (data) {
                        sap.m.MessageToast.show("Error ");
                        sap.ui.core.BusyIndicator.hide();
                      },
                      success: function (data) {
                        sap.ui.core.BusyIndicator.hide();
                        sap.m.MessageToast.show("successfull");
                      },
                    });
                  },
                  error: function (err) {
                    sap.m.MessageToast.show("Error get");
                  },
                });
              }
		});
	});

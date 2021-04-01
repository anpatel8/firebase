(function (window) { 
    'use strict';
    var FORM_SELECTOR = '[data-payment="form"]';
    var App = window.App;
    var DataStore = App.DataStore;
    var FormHandler = App.FormHandler;

    var FormHandler = new FormHandler(FORM_SELECTOR);

    FormHandler.addSubmitHandlerForPayment(function (data) {
        console.log(FormHandler);
        $("#myModal").modal('show');
    });

    console.log(FormHandler);
})(window);

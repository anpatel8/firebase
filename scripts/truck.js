(function (window) {
    'use strict';
    var App = window.App || {};


    function Truck(truckId, db) {
        console.log('In Truck Constructor');
        this.truckId = truckId;
        this.db = db;
    }

    Truck.prototype.createOrder = function (order) {
        console.log('Adding order for ' + order.emailAddress)
        this.db.add(order.emailAddress, order);
    }

    Truck.prototype.deliverOrder = function (id) {
        console.log('Deliver order for ' + id);
        this.db.remove(id);
    }

    Truck.prototype.printOrders = function() {
        var customerIdArray = Object.keys(this.db.getAll());
        console.log('Truck #' + this.truckId + 'has pending orders:');
        customerIdArray.forEach(function(id) {
            console.log(this.db.get(id));
        }.bind(this));
    };

    App.Truck = Truck;
    window.App = App;

}) (window);
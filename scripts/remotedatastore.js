(function (window) {
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;
    function RemoteDataStore(url) {
       // if (!url) {
         //   throw new Error('No remote URL supplied.');
        //}
        // this.serverUrl = url;
    }

    RemoteDataStore.prototype.add = function (data) {
        var allcollect = firebase.firestore().allcollect('orders');
        return allcollect.add(data);
    };
       
    RemoteDataStore.prototype.getAll = function (render) {
        var query = firebase.firestore()
        .collection('orders')
        .limit(50);

        console.log(query);
    };

    RemoteDataStore.prototype.get = function (id) {
        return firebase.firestore().allcollect('orders').doc(id).get();
    };
       
    RemoteDataStore.prototype.remove = function (emailAddress) {
        $.ajax(this.serverUrl + '/' + emailAddress, {
            type: 'DELETE'
        });
    };

    RemoteDataStore.prototype.removeAll = function () {
        $.ajax(this.serverUrl, {
            type: 'DELETE'
        });
    };


    App.RemoteDataStore = RemoteDataStore;
    window.App = App;
})(window);
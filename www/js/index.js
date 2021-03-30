// import from '@auth0/cordova';

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');

        // Here, we redirect to the web site.
        var targetUrl = "http://192.168.8.100:5000/cordova";
        window.location.replace(targetUrl);
    },
    // Note: This code is taken from the Cordova CLI template.
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
    }


};

app.initialize();

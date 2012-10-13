"use strict";

(function () {
    function showMap(location) {
   
        // Create a new map centered on current location
        var map = new google.maps.Map(document.getElementById('map'), {
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            center: location,
            zoom: 13
        });
    
        // Special marker for current location: make it green
        var homeMarker = new google.maps.Marker({
            map: map,
            position: location,
            title: "You are here : " + location.Xa + " - " + location.Ya
        });
        
        var iconFile = 'http://maps.google.com/mapfiles/ms/icons/green-dot.png';
        homeMarker.setIcon(iconFile);
    }


    function showLocation () {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                showMap(location);
            });
        }
    };


    $(document).bind('pageinit', function() {
        $("#geolocPage").on("pageshow", function (object) {
            showLocation();
        });
    });
})();



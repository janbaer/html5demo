"use strict";

(function () {
    var orientationViewModel = {
        orientation: ko.observable("Horizontal"),
        tiltLR: ko.observable(0),
        tiltFB: ko.observable(0),
        direction: ko.observable(0),
        motionUD: ko.observable(0),
        acceleration: ko.observable("")
    };

    function devOrientHandler(eventData) {
        var mql = window.matchMedia("(orientation: portrait)");

        var orientation = "Landscape";
        if (mql.matches) {
            orientation = "Portrait";
        }

        // gamma is the left-to-right tilt in degrees, where right is positive
        var tiltLR = eventData.gamma;

        // beta is the front-to-back tilt in degrees, where front is positive
        var tiltFB = eventData.beta;

        // alpha is the compass direction the device is facing in degrees
        var dir = eventData.alpha;

        // deviceorientation does not provide this data
        var motUD = null;

        orientationViewModel.orientation(orientation);
        orientationViewModel.motionUD(motUD);
        orientationViewModel.tiltLR(Math.round(tiltLR));
        orientationViewModel.tiltFB(Math.round(tiltFB));
        orientationViewModel.direction(Math.round(dir));

        $("#imgLogo").css("webkitTransform", "rotate(" + tiltLR + "deg) rotate3d(1,0,0, " + (tiltFB * -1) + "deg)");

    };


    function deviceMotionHandler(eventData) {
        // Grab the acceleration including gravity from the results
        var acceleration = eventData.accelerationIncludingGravity;

        // Display the raw acceleration data
        var rawAcceleration = "[" + Math.round(acceleration.x) + ", " +
            Math.round(acceleration.y) + ", " + Math.round(acceleration.z) + "]";

        // Display the acceleration and calculated values
        orientationViewModel.acceleration(rawAcceleration);

    }
    
    $(document).bind('pageinit', function () {
        $("#deviceOrientationPage").on("pageshow", function (object) {
            if (window.DeviceOrientationEvent) {
                window.addEventListener('deviceorientation', devOrientHandler, false);
            }

            if (window.DeviceMotionEvent) {
                window.addEventListener('devicemotion', deviceMotionHandler, false);
            }

            ko.applyBindings(orientationViewModel, $("#deviceOrientationPage").activeElement);
        });

        $("#deviceOrientationWithImagePage").on("pageshow", function (object) {
            if (window.DeviceOrientationEvent) {
                window.addEventListener('deviceorientation', devOrientHandler, false);
            }
        });


        $("#deviceOrientationPage").on("pagehide", function (object) {
            if (window.DeviceOrientationEvent) {
                window.removeEventListener('deviceorientation', devOrientHandler, false);
            }

            if (window.DeviceMotionEvent) {
                window.removeEventListener('devicemotion', deviceMotionHandler, false);
            }
        });

        $("#deviceOrientationWithImagePage").on("pagehide", function (object) {
            if (window.DeviceOrientationEvent) {
                window.removeEventListener('deviceorientation', devOrientHandler, false);
            }
        });
    });
})();





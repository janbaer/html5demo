'use strict';

require.config({
	baseUrl: "scripts", 
	paths: {
		"jquery": "lib/jquery.min",
		"jqm": "lib/jquery.mobile-1.2.0.min",
		"knockout": "lib/knockout-2.1.0",
		"hammer": "lib/hammer",
		"hammerplugin": "lib/jquery.hammer"
	}
});

require(["jquery", "geolocation", "orientation", "webrtc", "touchevents", "touchwithhammer", "jqm"], function($, geolocation, orientation, webrtc, touch, hammer) {
	geolocation.init();
	orientation.init();
	webrtc.init();
	touch.init();
	hammer.init();

    $(document).bind("mobileinit", function() {
        $.mobile.defaultPageTransition = "flip";
    })	

});
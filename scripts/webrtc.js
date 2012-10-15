"use strict";

(function() {
    $("#webRTCPage").bind("pageshow", function() {
        navigator.getUserMedia =    navigator.getUserMedia || 
                                    navigator.webkitGetUserMedia ||
                                    navigator.mozGetUserMedia || 
                                    navigator.msGetUserMedia;

        if (navigator.getUserMedia) {
        	try {
                navigator.getUserMedia({video: true}, function(stream) {
	                $("#myVideo").attr("src", window.URL.createObjectURL(stream));
	                $("#noCameraError").css("display", "none");
	            }, showError);
        	} 
        	catch (error) {
    			showError(error);
        	}


        }
    });

    function showError(error) {
        console.log("Error: " + error.toString());
		$("#myVideo").css("display", "none");
		$("#noCameraError").css("display", "block");
    }
})();
"use strict";

define(["jquery", "jqm"], function($) {
    function showError(error) {
        var PERMISSION_DENIED = 1;
        var errorText = "WebRTC is not available or supported on your platform or browser!";

        if (error != undefined) {  
            console.log("Error: " + error.toString());

            if (error.code === PERMISSION_DENIED) {
                errorText = "The permission to the camera was denied";       
            }             
        }

        $("#myVideo").css("display", "none");

        $("#noCameraError").text(errorText);
        $("#noCameraError").css("display", "block");
    }

    function showVideoElement() {
        $("#myVideo").css("display", "block");
        $("#noCameraError").css("display", "none");
    }

    return {
        init: function() {
            $("#webRTCPage").bind("pageshow", function() {
                navigator.getUserMedia =    navigator.getUserMedia || 
                                            navigator.webkitGetUserMedia ||
                                            navigator.mozGetUserMedia || 
                                            navigator.msGetUserMedia;

                if (navigator.getUserMedia) {
                    try {
                        navigator.getUserMedia({video: true}, function(stream) {
                            showVideoElement();
                            $("#myVideo").attr("src", window.URL.createObjectURL(stream));
                            $("#noCameraError").css("display", "none");
                        }, showError);
                    } 
                    catch (error) {
                        showError(error);
                    }
                } else {
                    showError();
                }
            });
        }
    }
});

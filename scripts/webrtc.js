"use strict";

(function() {
    $("#webRTCPage").bind("pageshow", function() {
        if (navigator.webkitGetUserMedia) {
            navigator.webkitGetUserMedia("video", function(stream) {
                $("#myVideo").attr("src", webkitURL.createObjectURL(stream));
            });
        }
    });
})();
"use strict";

define(["jquery", "jqm", "swipeupdown"], function($) {
    var tilt = {
        lr: 0,
        fb: 0
    };
        
    function onSwipe(direction) {

        switch (direction) {
            case "left":
                tilt.lr -= 3;
                break;
            case "right":
                tilt.lr += 3;
                break;
            case "down":
                tilt.fb -= 3;
                break;
            case "up":
                tilt.fb += 3;
                break;
        }

        $("#imgTouch").css("webkitTransform", "rotate(" + tilt.lr + "deg) rotate3d(1,0,0, " + (tilt.fb * -1) + "deg)");

    }


    return {
        init: function() {
            $("#touchEventsPage").on("pageshow", function (object) {
                $("#touchEventLabel").text("");
                
                $('#touchEventsPage').live('swipeleft', function (event) {
                    $("#touchEventLabel").text("swipeleft");
                    onSwipe("left");
                });
                
                $('#touchEventsPage').live('swiperight', function () {
                    $("#touchEventLabel").text("swiperight");
                    onSwipe("right");
                });

                $('#touchEventsPage').live('swipeup', function () {
                    $("#touchEventLabel").text("swipeup");
                    onSwipe("up");
                });

                $('#touchEventsPage').live('swipedown', function () {
                    $("#touchEventLabel").text("swipedown");
                    onSwipe("down");
                });
            });
        }
    }
});





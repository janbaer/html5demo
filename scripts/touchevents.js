"use strict";

(function () {
    
    var tilt = {
        lr: 0,
        fb: 0
    };
    
    // http://developingwithstyle.blogspot.ch/2010/11/jquery-mobile-swipe-up-down-left-right.html
    
    // initializes touch and scroll events
    var supportTouch = $.support.touch,
        scrollEvent = "touchmove scroll",
        touchStartEvent = supportTouch ? "touchstart" : "mousedown",
        touchStopEvent = supportTouch ? "touchend" : "mouseup",
        touchMoveEvent = supportTouch ? "touchmove" : "mousemove";

    // handles swipeup and swipedown
    $.event.special.swipeupdown = {
        setup: function () {
            var thisObject = this;
            var $this = $(thisObject);

            $this.bind(touchStartEvent, function (event) {
                var data = event.originalEvent.touches ?
                        event.originalEvent.touches[0] :
                        event,
                        start = {
                            time: (new Date).getTime(),
                            coords: [data.pageX, data.pageY],
                            origin: $(event.target)
                        },
                        stop;

                function moveHandler(event) {
                    if (!start) {
                        return;
                    }

                    var data = event.originalEvent.touches ?
                            event.originalEvent.touches[0] :
                            event;
                    stop = {
                        time: (new Date).getTime(),
                        coords: [data.pageX, data.pageY]
                    };

                    // prevent scrolling
                    if (Math.abs(start.coords[1] - stop.coords[1]) > 10) {
                        event.preventDefault();
                    }
                }

                $this.bind(touchMoveEvent, moveHandler).one(touchStopEvent, function (event) {
                    $this.unbind(touchMoveEvent, moveHandler);
                    if (start && stop) {
                        if (stop.time - start.time < 1000 &&
                                Math.abs(start.coords[1] - stop.coords[1]) > 30 &&
                                Math.abs(start.coords[0] - stop.coords[0]) < 75) {

                            start.origin.trigger("swipeupdown")
                                        .trigger(start.coords[1] > stop.coords[1] ? "swipeup" : "swipedown");
                        }
                    }
                    start = stop = undefined;
                });
            });
        }
    };

    //Adds the events to the jQuery events special collection
    $.each({
        swipedown: "swipeupdown",
        swipeup: "swipeupdown"
    }, function (event, sourceEvent) {
        $.event.special[event] = {
            setup: function () {
                $(this).bind(sourceEvent, $.noop);
            }
        };
    });

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

    $(document).bind('pageshow', function () {
        $("#touchEventLabel").text("");
        
        $('#touchEventsPage').live('swipe', function (event) {
            $("#touchEventLabel").text("swipe");
        });       

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

})();





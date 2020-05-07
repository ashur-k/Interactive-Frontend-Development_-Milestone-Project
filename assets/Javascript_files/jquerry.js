//this file is basically going to give some animations to page
// in future I want to work more on this function and make Object form of it to update diffrent effects on my web
'use strict'

//jQuerry body function
jQuery(document).ready(function () {

    let windowHeight = jQuery(window).height(); //taking window height to start effect animation
    let windowScrollPosTop = jQuery(window).scrollTop(); //taking windows scroll top
    let windowScrollPosBottom = windowHeight + windowScrollPosTop;//taking windows scroll bottom

    jQuery.fn.revealOnScroll = function (direction, speed) {

        return this.each(function () {
            var objectOffset = jQuery(this).offset();
            var objectOffsetTop = objectOffset.top;

            if (!jQuery(this).hasClass("hidden")) {

                if (direction == "right") {
                    jQuery(this).css({
                        "opacity": 0,
                        "right": "700px"
                    });
                } else {
                    jQuery(this).css({
                        "opacity": 0,
                        "right": "-700px"
                    });
                }



                jQuery(this).addClass("hidden");
            }



            if (!jQuery(this).hasClass("animation-complete")) {
                if (windowScrollPosBottom > objectOffsetTop) {
                    jQuery(this).animate({ "opacity": 1, "right": 0 }, speed).addClass("animation-complete");
                }
            }


        });


    }//end our function here

    windowHeight = jQuery(window).height();
    windowScrollPosTop = jQuery(window).scrollTop();
    windowScrollPosBottom = windowHeight + windowScrollPosTop;

    jQuery(window).scroll(function () {

        windowHeight = jQuery(window).height();
        windowScrollPosTop = jQuery(window).scrollTop();
        windowScrollPosBottom = windowHeight + windowScrollPosTop;


        jQuery("ul li").revealOnScroll("right", 1000);
        // in future I am planning to use these effects more effectively for better presentation



    });



})
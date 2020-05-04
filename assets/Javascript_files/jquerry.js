jQuery(document).ready(function () {
   
    let windowHeight = jQuery(window).height();
    let windowScrollPosTop = jQuery(window).scrollTop();
    let windowScrollPosBottom = windowHeight + windowScrollPosTop;
   
    jQuery.fn.revealOnScroll = function (direction, speed) {

        return this.each(function () {
            var objectOffset = jQuery(this).offset();
            var objectOffsetTop = objectOffset.top;
            
            if(!jQuery(this).hasClass("hidden")) {

                        if (direction == "right") {
                            jQuery(this).css({
                                "opacity" : 0,
                                "right"   : "700px"
                            });
                        }else{
                                jQuery(this).css({
                                "opacity" : 0,
                                "right"   : "-700px"
                            });
                        }



                    jQuery(this).addClass("hidden");
            }

          

            if (!jQuery(this).hasClass("animation-complete")) {
                if (windowScrollPosBottom > objectOffsetTop) {
                    jQuery(this).animate({ "opacity": 1, "right" : 0 }, speed).addClass("animation-complete");
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


        jQuery("ul li").revealOnScroll("right", 9000);
         // jQuery(".section-1").revealOnScroll();
       
         jQuery("#myChart").revealOnScroll("right");
         
    });



})
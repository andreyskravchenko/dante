jQuery(document).ready(function() {

    if (jQuery('.d_types-container .d_gallery-visible').is(':visible')) {

        jQuery('.d_types-container .owl-carousel').owlCarousel({
            loop:true,
            responsive:{
                0:{
                    items:1,
                    margin:15
                },
                600:{
                    items:2,
                    margin:35
                }
            }
        });

    }

    if (jQuery('.d_process-container .d_gallery-visible').is(':visible')) {

        jQuery('.d_process-container .owl-carousel').owlCarousel({
            responsive:{
                0:{
                    items:1,
                    margin:15
                },
                600:{
                    items:2,
                    margin:35
                },
                900:{
                    items:3,
                    margin:35
                }
            }
        });

    }



    jQuery('[data-event="scroll-to"]').click(function() {
        var thisData = jQuery(this).attr('data-link');
        var addHeight = 0;
        if (thisData == 'photos' || thisData == 'reviews') {
            addHeight = 80;
        }
        jQuery('html,body').animate({scrollTop: jQuery('[data-anchor="'+ thisData +'"]').offset().top - jQuery('.d_header').height() - addHeight}, 1000);
    });

});

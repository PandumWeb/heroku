/* Loading Script */
$(window).load(function(){
	$('#loader').fadeOut("slow");
});

/* Flickr Carousel */
$('#flickr_slider').jflickrfeed({
    limit: 14, // number of images to show
    qstrings: {
        id: '13547802@N05' // id of flickr gallery (use idgettr.com to get flickr gallery id)
    },
    itemTemplate: '<a href="{{image_b}}" target="_blank"><img src="{{image}}" class="img-responsive" alt="" /></a>'
}, function(data) {
    $('#dc_flickr_slider div').hide();

    var owl = $("#flickr_slider");
    owl.owlCarousel({
        itemsCustom: [
            [0, 1],
            [480, 3],
            [600, 3],
            [700, 3],
            [1000, 2],
            [1200, 2],
            [1201, 3],
            [1400, 3],
            [1600, 3]
        ],
        navigation: true,
        pagination: false
    });

});

/* Responsive Menu */
(function($) {

    $.fn.menumaker = function(options) {

        var nav_menu = $(this),
            settings = $.extend({
                title: "Menu",
                format: "dropdown",
                sticky: false
            }, options);

        return this.each(function() {
            nav_menu.prepend('<div id="menu-button">' + settings.title + '</div>');
            $(this).find("#menu-button").on('click', function() {
                $(this).toggleClass('menu-opened');
                var mainmenu = $(this).next('ul');
                if (mainmenu.hasClass('open')) {
                    mainmenu.hide().removeClass('open');
                } else {
                    mainmenu.show().addClass('open');
                    if (settings.format === "dropdown") {
                        mainmenu.find('ul').show();
                    }
                }
            });

            nav_menu.find('li ul').parent().addClass('has-sub');

            multiTg = function() {
                nav_menu.find(".has-sub").prepend('<span class="submenu-button"></span>');
                nav_menu.find('.submenu-button').on('click', function() {
                    $(this).toggleClass('submenu-opened');
                    if ($(this).siblings('ul').hasClass('open')) {
                        $(this).siblings('ul').removeClass('open').hide();
                    } else {
                        $(this).siblings('ul').addClass('open').show();
                    }
                });
            };

            if (settings.format === 'multitoggle') multiTg();
            else nav_menu.addClass('dropdown');

            if (settings.sticky === true) nav_menu.css('position', 'fixed');

            resizeFix = function() {
                if ($(window).width() > 1050) {
                    nav_menu.find('ul').show();
                }

                if ($(window).width() <= 1050) {
                    nav_menu.find('ul').hide().removeClass('open');
                }
            };
            resizeFix();
            return $(window).on('resize', resizeFix);

        });
    };

    $("#nav_menu").menumaker({
        title: "Menu",
        format: "multitoggle"
    });
})(jQuery);

$(document).ready(function() {
    $("#tweetfeed").owlCarousel({
        autoPlay: 3000,
        stopOnHover: true,
        navigation: true,
        pagination: false,
        goToFirstSpeed: 2000,
        singleItem: true,
        autoHeight: true,
        transitionStyle: "fade"
    });

    $('#tabs li a').click(function(e) {
        $('#tabs li, #content, .current').removeClass('current');
        $('#content p').removeClass('fadeInLeft animated');
        $(this).parent().addClass('current');
        var currentTab = $(this).attr('href');
        $(currentTab).addClass('current');
        $('#content p').addClass('fadeInLeft animated');
        e.preventDefault();
    });

   // Vertical Tab
    "use strict";
    $('#verticalTab2').easyResponsiveTabs({
        type: 'vertical',
        width: 'auto',
        fit: true
    });

    // Prettyphoto
    "use strict";
    $("a[class^='prettyPhoto']").prettyPhoto({
        theme: 'pp_default'
    });

    // Vertical Tab
    "use strict";
    $('#verticalTab').easyResponsiveTabs({
        type: 'vertical',
        width: 'auto',
        fit: true
    });

    // Vertical Tab
    "use strict";
    $('#verticalTab3').easyResponsiveTabs({
        type: 'horizontal',
        width: 'auto',
        fit: true
    });

    // Clients
    "use strict";
    var owl = $("#m-clients");
    owl.owlCarousel({
        itemsCustom: [
            [0, 1],
            [450, 2],
            [600, 2],
            [700, 2],
            [1000, 3],
            [1200, 4],
            [1400, 4],
            [1600, 4]
        ],
        navigation: true,
        pagination: false
    });

    // Animated Skills
    $('.round-skills').appear(function() {
        options = {
            img1: 'images/c1.png',
            img2: 'images/c3.png',
            speed: 10,
            percent: 10,
            limit: 42,
            onInit: function() {
                console.log('init');
            },
            onProgress: function(p) { /*console.log('progress',p);*/ },
            onComplete: function(p) {
                console.log('complete', p);
            }
        };
        myplugin = $('#skill1').cprogress(options);
    }, {
        accX: 0,
        accY: -200
    });

    $('.round-skills').appear(function() {
        options = {
            img1: 'images/c1.png',
            img2: 'images/c3.png',
            speed: 10,
            percent: 10,
            limit: 68,
            onInit: function() {
                console.log('init');
            },
            onProgress: function(p) { /*console.log('progress',p);*/ },
            onComplete: function(p) {
                console.log('complete', p);
            }
        };
        myplugin = $('#skill2').cprogress(options);
    }, {
        accX: 0,
        accY: -200
    });

    $('.round-skills').appear(function() {
        options = {
            img1: 'images/c1.png',
            img2: 'images/c3.png',
            speed: 10,
            percent: 10,
            limit: 30,
            onInit: function() {
                console.log('init');
            },
            onProgress: function(p) { /*console.log('progress',p);*/ },
            onComplete: function(p) {
                console.log('complete', p);
            }
        };
        myplugin = $('#skill3').cprogress(options);
    }, {
        accX: 0,
        accY: -200
    });

    // Testimonials
    "use strict";
    $("#testimonials").owlCarousel({
        navigation: true, // Show next and prev buttons
        pagination: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true
    });

    // Animated Flat Skills
    "use strict";
    $('.flat-skills').appear(function() {
        $("#f-skill1 span").attr('style', 'width:95%;');
        $("#f-skill2 span").attr('style', 'width:39%;');
        $("#f-skill3 span").attr('style', 'width:75%;');
        $("#f-skill4 span").attr('style', 'width:23%;');
        $("#f-skill5 span").attr('style', 'width:52%;');
    }, {
        accX: 0,
        accY: -200
    });

    $("html").niceScroll();

    $('#toggle-view li').click(function() {
        var text = $(this).children('div.panel');
        if (text.is(':hidden')) {
            text.slideDown('200');
            $(this).children('span').addClass('minus-ico');
            $(this).children('span').removeClass('plus-ico');
        } else {
            text.slideUp('200');
            $(this).children('span').addClass('plus-ico');
            $(this).children('span').removeClass('minus-ico');
        }
    });

});

$(window).load(function() {
    $('#home-slider').flexslider({
        animation: "slide",
        slideshow: true,
        directionNav: false,
        slideshowSpeed: 3000,
        animationSpeed: 700,
        controlsContainer: ".slider",
        controlNav: true,
        manualControls: ".home-slider-nav li",
        start: function(slider) {
            $('body').removeClass('loading');
        }
    });
});

// Google Map
$(function() {
    var map = new GMaps({
        el: "#map",
        lat: 40.714353,
        lng: -74.005973,
        zoom: 16,
        zoomControl: false,
        scrollwheel: false,
        controls: false,
        zoomControlOpt: {
            position: "TOP_LEFT"
        },
        panControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        overviewMapControl: false,
        styles: [{
            "featureType": "road",
            "elementType": "labels",
            "styles": [{
                "visibility": "simplified"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "administrative.land_parcel",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "landscape.man_made",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "road.local",
            "elementType": "labels",
            "stylers": [{
                "visibility": "simplified"
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "visibility": "simplified"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "labels",
            "stylers": [{
                "visibility": "simplified"
            }]
        }, {
            "featureType": "poi",
            "elementType": "labels",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "labels",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "water",
            "elementType": "all",
            "stylers": [{
                "hue": "#a1cdfc"
            }, {
                "saturation": 30
            }, {
                "lightness": 49
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [{
                "hue": "#f49935"
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "hue": "#fad959"
            }]
        }]
    });

    map.addMarker({
        lat: 40.714353,
        lng: -74.005973,
        icon: "images/marker.png"
    });
});

/* Animation */
$('[data-animated]').each(function() {
    $(this).addClass('animated-out');
});

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var height = $(window).height();
    $('.animated-out[data-animated]').each(function() {
        var $this = $(this);
        if (scroll + height >= $this.offset().top) {
            var delay = parseInt($this.attr('data-animated'));
            if (isNaN(delay) || 0 === delay) {
                $this.removeClass('animated-out').addClass('animated-in');
            } else {
                setTimeout(function() {
                    $this.removeClass('animated-out').addClass('animated-in');
                }, delay);
            }
        }
    });
});
$(document).ready(function () {

  'use strict';

  /************************************************************************************ PRELOADER STARTS */


	$('body').jpreLoader({
		preMainSection: '#main-preloader',
		prePerText: '.preloader-percentage-text',
		preBar: '.preloader-bar',
	});

	$('.navbar-collapse a').click(function () {
		$(".navbar-collapse").collapse('hide');
	});

/************************************************************************************ TEAM & TESTIMONIALS CAROUSELS STARTS */
	

var owl = $('.services-carousel');
owl.owlCarousel({

	autoplay: false,
	autoplayHoverPause: true,
	nav: true,
	dots: false,
	mouseDrag: true,
	smartSpeed: 500,
	margin: 24,
	loop: true,
	singleItem: true,
	navText: [
		"<i class='las la-angle-left'></i>", "<i class='las la-angle-right'></i>"
	],
	responsive: {
		0: {
			items: 1
		},
		600: {
			items: 1
		},
		991: {
			items: 2
		},
		1200: {
			items: 3
		}
	}
});

var owl = $('.team-carousel');
	owl.owlCarousel({

		autoplay: false,
		autoplayHoverPause: true,
		nav: true,
		dots: false,
		mouseDrag: true,
		smartSpeed: 500,
		margin: 24,
		loop: true,
		singleItem: true,
		navText: [
			"<i class='las la-angle-left'></i>", "<i class='las la-angle-right'></i>"
		],
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			1000: {
				items: 3
			}
		}
	});


	var owl = $('.testimonials-carousel');
	owl.owlCarousel({

		autoplay: false,
		autoplayHoverPause: true,
		nav: true,
		dots: false,
		mouseDrag: true,
		smartSpeed: 500,
		margin: 24,
		loop: true,
		singleItem: true,
		navText: [
			"<i class='las la-angle-left'></i>", "<i class='las la-angle-right'></i>"
		],
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	});

  /************************************************************************************ MAGNIFIC POPUPS STARTS */

	
	$('.image-popup-vertical-fit').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}

	});

	$('.image-popup-fit-width').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		image: {
			verticalFit: false
		}
	});

	$('.image-popup-no-margins').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function (item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});


	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});

/************************************************************************************ TOP NAV WHITE BACKGROUND STARTS */
	// Top Navigation White Background.
	$(window).scroll(() => {
		if ($(window).width() > 991) {
			var windowTop = $(window).scrollTop();
			windowTop > 0 ? $('nav').addClass('nav-bg') : $('nav').removeClass('nav-bg');
		
		}

	});
	$(window).on('resize', function () {
		if ($(window).width() < 992) {
			$('nav').addClass('nav-bg');
		} else {
			$('nav').removeClass('nav-bg');
		}
	});
	$(document).ready(function () {
		$(window).trigger('resize');
	});

  /************************************************************************************ SCROLL TO TOP STARTS */
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.back-to-top').fadeIn();
		} else {
			$('.back-to-top').fadeOut();
		}
	});

	$('.back-to-top').fadeOut();


});
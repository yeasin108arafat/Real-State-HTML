$(document).ready(function () {
	// Preloader
	$(".loader").delay(1000).fadeOut("slow");
	$("#overlayer").delay(1000).fadeOut("slow");

	//Owl Carousel
	$('.all-testimonis').owlCarousel({
	    items:2,
	    margin:30,
	    smartSpeed:450,
	    dots:true,
		loop:false,
		responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	            nav:false
	        },
	        576:{
	            items:1,
	            nav:false
	        },
	        768:{
	            items:2,
	            nav:false
	        }
	    }
	});

	/*Off Cavous Menu */
	$('.bars-btn').click(function () {
		$('.menu-area').addClass('open-menu');
	});
	$('.close-btn').click(function () {
		$('.menu-area').removeClass('open-menu');
	});

	$('.bars-btn').click(function () {
		$('body').addClass('hide');
	});
	$('.close-btn').click(function () {
		$('body').removeClass('hide');
	});
});

//Sticky Header
$(window).scroll(function() {
	if ($(window).scrollTop() > 200) {
	  $('.header-area').addClass('sticky-nav animated fadeInDown');
	} else {
	  $('.header-area').removeClass('sticky-nav animated fadeInDown');
	}
});
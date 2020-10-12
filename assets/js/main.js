(function ($) {
	"use strict";

/* carousel */	
$('.post-carousel').owlCarousel({
	dots:false,
	nav:true,
	margin:30,
	navText:['<i class="fa fa-angle-double-left" aria-hidden="true"></i>','<i class="fa fa-angle-double-right" aria-hidden="true"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
});
$('.banner-carousel').owlCarousel({
	autoplay:true,
	dots:false,
	loop:true,
	nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

/* search overlay */
 $('#close-btn').on('click', function () {
    $('#search-overlay').fadeOut();
    $('#search-btn').show();
  });
   $('#search-btn').on('click', function () {
    $(this).hide();
    $('#search-overlay').fadeIn();
  });

/* slimmenu */
$('.slimmenu').slimmenu({
        resizeWidth: '991',
        animSpeed: 'medium',
        indentChildren: true,
    });

/* scrollUp */
    jQuery.scrollUp({
    scrollName: 'scrollUp', 
    topDistance: '300', 
    topSpeed: 4000, 
    animation: 'fade', 
	animationInSpeed: 1000, 
    animationOutSpeed: 1000, 
    scrollText: '<i class="fa fa-long-arrow-up" aria-hidden="true"></i>', 
    activeOverlay: false, 
  });
  
 /*  aos js*/
AOS.init({
  disable: false, 
  startEvent: 'DOMContentLoaded', 
  initClassName: 'aos-init', 
  offset: 120, 
  delay: 0, 
  duration: 400, 
  easing: 'ease', 
  once: true, 
  mirror: false, 
  anchorPlacement: 'top-bottom',

});








	// Fit ideos
	var $allVideos = $(".videoWrapper iframe"),
		$fluidEl = $("body");
	$allVideos.each(function() {

	  $(this)
		.data('aspectRatio', this.height / this.width)
		.removeAttr('height')
		.removeAttr('width');

	});
	$(window).resize(function() {

	  var newWidth = $fluidEl.width();
	  $allVideos.each(function() {

		var $el = $(this);
		$el
		  .width(newWidth)
		  .height(newWidth * $el.data('aspectRatio'));

	  });

	}).resize();
























}(jQuery));
 
$(window).on('load',function(){

/*  Preloader js*/
        var preLoder = $(".overlay-loader");
        preLoder.fadeOut(1000);
       
    });    
		
/*  Sidebar panel */	
function openNav() {
  document.getElementById("mySidepanel").style.right = "0px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.right = "-500px";
}         
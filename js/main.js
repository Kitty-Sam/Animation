(function($) {
"use strict";

	/*---------------------------------------------------- */
	/* link
	------------------------------------------------------ */

$('a[href^="#sec2"]').bind('click.smoothscroll',function (e) {
 e.preventDefault();
 
var target = this.hash,
 $target = $(target);
 
$('html, body').stop().animate({
 'scrollTop': $target.offset().top
 }, 1000, 'swing', function () {
 
 });
 });

/*---------------------------------------------------- */
	/* open/close text
	------------------------------------------------------ */
$( document ).ready(function() {
  
$('.text_prepod  #open').on('click',function(e) {
	e.preventDefault();
	if($(this).html() == "Подробнее"){
		$(this).html("Закрыть");
	}else{$(this).html("Подробнее");}
	
	$(this).parent().find(".text_polny").slideToggle('slow'); 

});
  
});
	
	// ------------- img svg--------------

$('img.ic_im').each(function(){
  var $img = $(this);
  var imgClass = $img.attr('class');
  var imgURL = $img.attr('src');
  $.get(imgURL, function(data) {
    var $svg = $(data).find('svg');
    if(typeof imgClass !== 'undefined') {
      $svg = $svg.attr('class', imgClass+' replaced-svg');
    }
    $svg = $svg.removeAttr('xmlns:a');
    if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
      $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
    }
    $img.replaceWith($svg);
  }, 'xml');
});

	/*-----------------------------------------------------*/
	/* Mobile Menu
	 ------------------------------------------------------ */
	 /*
if($(window).width()< 992){
var switcher = $('.menu-switcher');
var overlay	 = $(".overlay");
var nav = $("ul.nav");
	$('.menu-switcher, .overlay, ul.nav li a').unbind( "click" ).bind( "click", function( ) {

	if(!switcher.hasClass( "change-close" )){
		switcher.addClass( "change-close" );
		overlay.addClass( "act" );
		$('body').removeAttr('style').css( "overflow", 'hidden' );
		nav.fadeIn();
	}
 	else{
 		switcher.removeClass( "change-close" );
		nav.fadeOut();
 		overlay.removeClass( "act" );
 		$('body').css( "overflow", 'visible' );
 	}

 	});
}
*/

/*----------------------------------------------------*/
/* Slick clider
/*----------------------------------------------------*/


  
var $status = $('.pagingInfo');
var $slickElement = $('.single-slide');

$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {

  var i = (currentSlide ? currentSlide : 0) + 1;
  $status.text(i + ' / ' + slick.slideCount);
});


	$slickElement.slick({
    dots: false,
	autoplay:true,
	prevArrow: '<div class="aprew"><img src="land_img/Arrow1.svg"></div>',
	nextArrow: '<div class="anext"><img src="land_img/Arrow2.svg"></div>',
	autoplaySpeed: 3500,
	arrows: true,
	slidesToShow : 4,
	slidesToScroll: 1
	});
  


/*----------------------------------------------------*/
/* back-to-top
/*----------------------------------------------------*/

$(document).ready(function backToTop() {
	 let button = $('.back-to-top');
	 
	 $(window).on('scroll', () => {
		if ($(this).scrollTop() >= 200) {
		  button.fadeIn();
		} else {
			button.fadeOut();
		}
	 });
	 
	 button.on('click', (e) => {
		e.preventDefault();
		$('html').animate({scrollTop:0}, 800);
	 });
});



	/*----------------------------------------------------*/
	/* OWL carousel
	
var $status = $('.pagingInfo');
var $slickElement = $('.slick');

$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
  var i = (currentSlide ? currentSlide : 0) + 1;
  $status.text(i + ' из ' + slick.slideCount);
});
$slickElement.on('init reInit', function (event, slick, currentSlide, nextSlide) {
//console.log($('#reviews .col').height());
	$('#reviews .col').css('min-height', $('#reviews .col').height()+'px')

});

	$slickElement.slick({
	  centerMode: true,
	  centerPadding: '22%',
	prevArrow: '<div class="aprew"><img src="img/icon/back.svg"></div>',
	nextArrow: '<div class="anext"><img src="img/icon/right-arrow.svg"></div>',
	  slidesToShow: 1,
	  responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        centerPadding: '20px'
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        centerPadding: '0px'
	      }
	    }
	  ]
	});
/*----------------------------------------------------*/

	/*----------------------------------------------------*/
	/* Smooth Scrolling
	------------------------------------------------------*/


var wow = new WOW({mobile: false});
wow.init();

})(jQuery);

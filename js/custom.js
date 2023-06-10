// slider---------------------------------------------------------------------

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots:true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    800:{
      items:2,
    },
    1000: {
      items: 1,
    },
  },
});

// scrolling---------------------------------------------------------------------

$(function() {
  var header = $(".navbar");

  $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll >= 1) {
          header.addClass("scrolled");
      } else {
          header.removeClass("scrolled");
      }
  });

});

$('.scrollTo').click(function(){
  $('html, body').animate({
      scrollTop: $( $(this).attr('href') ).offset().top
  }, 500);
  return false;
});


// img popup---------------------------------------------------------------------

// Makes the clicked image full screen (uses a <div> with a background image)
$('.img-full-screen').click(function(){

  // Prevents scrolling
	$('body').addClass('scroll-disabled');

  // Optional: Enables pinch and zoom
	$('meta[name=viewport]').attr('content','width = device-width, initial-scale = 1.00, minimum-scale = 1.00, maximum-scale = 2.00, user-scalable=yes');

  // Get image path source
	var imagePath = $(this).attr('src');

  // Set image path source
	$('.img-placeholder').attr('style','background-image: url(' + imagePath + ')');

  // Show image
	$('.img-placeholder').fadeIn();

});

$('.img-placeholder').click(function(){

  // Enables scrolling again
  $('body').removeClass('scroll-disabled');

  // Optional: Disables pinch and zoom
  $('meta[name=viewport]').attr('content','width = device-width, initial-scale = 1.00, minimum-scale = 1.00, maximum-scale = 1.00');

  // Hide image
  $('.img-placeholder').fadeOut();
});

// nav color change---------------------------------------------------------------------





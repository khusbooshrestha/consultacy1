$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	       // window.location.hash = target;
	    });
	});
});
/**fly wheel */


$(document).ready(function() {
	/******************************
		BOTTOM SCROLL TOP BUTTON
	 ******************************/
  
	// declare variable
	var scrollTop = $(".scrollTop");
  
	$(window).scroll(function() {
	  // declare variable
	  var topPos = $(this).scrollTop();
  
	  // if user scrolls down - show scroll to top button
	  if (topPos > 100) {
		$(scrollTop).css("opacity", "1");
  
	  } else {
		$(scrollTop).css("opacity", "0");
	  }
  
	}); // scroll END
  
	//Click event to scroll to top
	$(scrollTop).click(function() {
	  $('html, body').animate({
		scrollTop: 0
	  }, 800);
	  return false;
  
	});
  
  });
$('.owl-two').owlCarousel({
	loop: true,
	margin: 10,
	nav: false,
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
$('.owl-one').owlCarousel({
	loop: true,
	margin: 32,
	nav: false,
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
})
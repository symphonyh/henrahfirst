$( document ).ready(function() {

	// Set carousel options
	$('.carousel').carousel({
	  interval: 4000 // 4 seconds vs. default 5
	});

});

$( document ).ready(function() {

  $('.navbar [href^=#]').click(function (e) {
    e.preventDefault();
    var div = $(this).attr('href');
    $("html, body").animate({
      scrollTop: $(div).position().top
    }, "slow");
  });

});




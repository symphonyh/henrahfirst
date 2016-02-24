$( document ).ready(function() {

	// Set carousel options
	$('.carousel').carousel({
	  interval: 4000 
	});

	//Enable swiping...
	$(".carousel-inner").swipe( {
		//Generic swipe handler for all directions
		swipeRight:function(event, direction, distance, duration, fingerCount) {
			$(this).parent().carousel('prev');
		},
		swipeLeft: function() {
			$(this).parent().carousel('next');
		},
		//Default is 75px, set to 0 so any distance triggers swipe
		threshold:0
	});

});

$("#btn1").click(function(e){    
	$("#new").style.display("none");    
	$("#t2").show();
   e.preventDefault();
 })
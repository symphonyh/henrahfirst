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



var imgdefereds=[];
$('img').each(function(){
 var dfd=$.Deferred();
 $(this).bind('load',function(){
  dfd.resolve();
 }).bind('error',function(){
 
 })
 if(this.complete) setTimeout(function(){
  dfd.resolve();
 },1000);
 imgdefereds.push(dfd);
})
$.when.apply(null,imgdefereds).done(function(){
    callback();
});
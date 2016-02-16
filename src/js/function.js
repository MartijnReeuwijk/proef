$( document ).ready(function() {

	$('.btmnavbutton').click(function(){
		$('.mapmenu').toggleClass('fullscreen');
		$('.layerbtn').toggleClass('scale');
	});

	$('.layerbtn').click(function(){
		$('.maplayer').toggleClass('scale');
	});


});

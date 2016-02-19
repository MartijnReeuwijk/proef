$( document ).ready(function() {

	$('.btmnavbutton').click(function(){
		$('.mapmenu').toggleClass('fullscreen');
		$('.layerbtn').toggleClass('scale');

	});

	$('.layerbtn').click(function(){
		$('.maplayer').toggleClass('scale');
	});

	$('#yourdest').keypress(function (e) {
	  if (e.which == 13) {
		$('#yourloc').submit();
	    $('#yourdest').submit();
		$("#yourdest").select().blur();
		$('.layerbtn').toggleClass('scale');
		$('.mapmenu').toggleClass('fullscreen');

	  }
	});

});

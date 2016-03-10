$( document ).ready(function() {

	$('.btmnavbutton').click(function(){
		$('.mapmenu').toggleClass('fullscreen');
		$('.layerbtn').toggleClass('scale');
		$('.navbtn').toggleClass('disnone');


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

	$('#yoursearch').keypress(function (e) {
	  if (e.which == 13) {
		$('#yoursearch').submit();
		$("#yoursearch").select().blur();
		$('.sidemenu').toggleClass('leftmove');
		$('.first').toggleClass('disnone');

	  }
	});

	$('.navbtn').click(function(){
		$('.locframe').toggleClass('pushleft');
		$('.first').toggleClass('pushleft');
		// $('.first').toggleClass('disnone');
	});

});

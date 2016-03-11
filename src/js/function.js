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
			$('.collapsible').toggleClass('disnone');

		}
	});

	$('.navbtn').click(function(){
		$('.locframe').toggleClass('pushleft');
		$('.first').toggleClass('pushleft');
		$('.sidemenu').removeClass('leftmove');
	});

	$(document).ready(function(){
		$('.collapsible').collapsible({
			accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
		});
	});

});

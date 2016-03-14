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
			$('.navbtn').toggleClass('disnone');

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

	$('.info').click(function(){
		$(this).next($('.extrainfo')).toggleClass('disnone');
	});

	$('.close').click(function(){
		$('.sidemenu').toggleClass('leftmove');
		$('.first').toggleClass('disnone');
		$('.collapsible').toggleClass('disnone');
	});

	$('.navbtn').click(function(){
		$('.locframe').toggleClass('pushleft');
		$('.locframe').toggleClass('disnone');
		$('.searchholder').toggleClass('disnone');

		$('.first').toggleClass('pushleft');
		$('.sidemenu').removeClass('leftmove');
		$('.sidemenu').toggleClass('disnone');
	});

	$(document).ready(function(){

		$('[data-click]').on('click', function (e) {
			$( $(this).attr('href') ).trigger('click');
		});

		$('.collapsible').collapsible({
			accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
		});
	});


});

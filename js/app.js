$(document).ready(function(){

	/* dropdown menu */

	$('.hamburger').click(function(){
		$(this).toggleClass('open');
		$('.drop-down-menu').toggleClass('open');
	});
	$('.drop-down-menu').click(function(){
		$(this).removeClass('open');
		$('.hamburger').removeClass('open');
	});


	/* toggle filters */

	$('.filters li').click(function(){
		$(this).toggleClass('active-filter');
	});
});
$(document).ready(function(){
	$('.hamburger').click(function(){
		$(this).toggleClass('open');
		$('.drop-down-menu').toggleClass('open');
	});
});
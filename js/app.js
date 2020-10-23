$(document).ready(function(){
	$('.hamburger').click(function(){
		$(this).toggleClass('open');
		$('.drop-down-menu-bg').toggleClass('open');
	});
});
$(document).ready(function(){

	/* favicon */

	function addHTML() {
		var el, i, domEl, fileName, xmlHttp;
		
         /*Iterate all DOM*/
		el = document.getElementsByTagName("*");
		for (i = 0; i < el.length; i++) {
			domEl = el[i];
			
            /*find the element having w3-include-html attribute*/
			fileName = domEl.getAttribute("w3-include-html");
			if (fileName) {
				
               /*http request with attribute value as file name*/
				xmlHttp = new XMLHttpRequest();
				xmlHttp.onreadystatechange = function() {
					if (this.readyState == 4) {
						if (this.status == 200) {
							domEl.innerHTML = this.responseText;
						}
						if (this.status == 404) {
							domEl.innerHTML = "Page not found.";
						}
						
                     /* Remove the attribute and invoke the function again*/
						domEl.removeAttribute("w3-include-html");
						addHTML();
					}
				}
				xmlHttp.open("GET", fileName, true);
				xmlHttp.send();
				
               /*function ends*/
				return;
			}
		}
	}
	addHTML();

	/* dropdown menu */

	$('.hamburger').click(function(){
		$(this).toggleClass('open');
		$('.drop-down-menu').toggleClass('open');
	});
	$('.drop-down-menu').click(function(){
		$(this).removeClass('open');
		$('.hamburger').removeClass('open');
	});


	/* make header smaller on scroll */

	$(window).scroll(function() {
		var scroll = $(window).scrollTop();

		if (scroll >= 30) {
			$(".main-menu, .drop-down-menu").addClass("scrolled");
		} else {
			$(".main-menu, .drop-down-menu").removeClass("scrolled");
		}
	});

	/* make scroll indicator disappear on scroll */

	$(window).scroll(function() {
		var scroll = $(window).scrollTop();

		if (scroll >= 30) {
			$(".ca3-scroll-down-link").hide();
		} /*else {
			$(".scroll-downs").show();
		}*/
		});


	/* toggle filters */

	/*$('.filters li').click(function(){
		$(this).toggleClass('active-filter');
	});*/

	$('.filters li.web-design-filter').click(function(){
		if ( $(this).hasClass('active-filter') ) {
			$(this).removeClass('active-filter');
			$('.project-grid-card').removeClass('hide');
		} else {
			$(this).addClass('active-filter');
			$('.graphic-design-filter, .illustration-filter, .photography-filter').removeClass('active-filter');
			$('.project-grid-card').addClass('hide');
			$('.project-grid-card.web-design').removeClass('hide');
		} 
	});

	$('.filters li.graphic-design-filter').click(function(){
		if ( $(this).hasClass('active-filter') ) {
			$(this).removeClass('active-filter');
			$('.project-grid-card').removeClass('hide');
		} else {
			$(this).addClass('active-filter');
			$('.web-design-filter, .illustration-filter, .photography-filter').removeClass('active-filter');
			$('.project-grid-card').addClass('hide');
			$('.project-grid-card.graphic-design').removeClass('hide');
		} 
	});

	$('.filters li.illustration-filter').click(function(){
		if ( $(this).hasClass('active-filter') ) {
			$(this).removeClass('active-filter');
			$('.project-grid-card').removeClass('hide');
		} else {
			$(this).addClass('active-filter');
			$('.web-design-filter, .graphic-design-filter, .photography-filter').removeClass('active-filter');
			$('.project-grid-card').addClass('hide');
			$('.project-grid-card.illustration').removeClass('hide');
		} 
	});

	$('.filters li.photography-filter').click(function(){
		if ( $(this).hasClass('active-filter') ) {
			$(this).removeClass('active-filter');
			$('.project-grid-card').removeClass('hide');
		} else {
			$(this).addClass('active-filter');
			$('.web-design-filter, .illustration-filter, .graphic-design-filter').removeClass('active-filter');
			$('.project-grid-card').addClass('hide');
			$('.project-grid-card.photography').removeClass('hide');
		} 
	});

	/*filters = [];
$(".filters li").on('click', function(event){
	current = $(this).attr('data-filter');
	if (filters.includes(current)) {
		filters.splice(filters.indexOf(current), 1);
	} else {
		filters.push(current);
		console.log($(this).attr('data-filter'));
	}
	
	if (filters.length > 0) {
		$(".project-grid-card").hide();
		filters.forEach((element) => {$("." + element).show() })
	} else {
		$(".project-grid-card").show();
	}
});*/

});
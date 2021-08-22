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

	/*$('.filters li').click(function(){
		$(this).toggleClass('active-filter');
	});*/

	$('.filters li.web-design-filter').click(function(){
        if ( $(this).hasClass('active-filter') ) {
            $(this).removeClass('active-filter');
            $('.single-project').removeClass('hide');
        } else {
            $(this).addClass('active-filter');
            $('.graphic-design-filter, .illustration-filter, .photography-filter').removeClass('active-filter');
            $('.single-project').addClass('hide');
            $('.single-project.web-design').removeClass('hide');
        } 
    });

    $('.filters li.graphic-design-filter').click(function(){
        if ( $(this).hasClass('active-filter') ) {
            $(this).removeClass('active-filter');
            $('.single-project').removeClass('hide');
        } else {
            $(this).addClass('active-filter');
            $('.web-design-filter, .illustration-filter, .photography-filter').removeClass('active-filter');
            $('.single-project').addClass('hide');
            $('.single-project.graphic-design').removeClass('hide');
        } 
    });

    $('.filters li.illustration-filter').click(function(){
        if ( $(this).hasClass('active-filter') ) {
            $(this).removeClass('active-filter');
            $('.single-project').removeClass('hide');
        } else {
            $(this).addClass('active-filter');
            $('.web-design-filter, .graphic-design-filter, .photography-filter').removeClass('active-filter');
            $('.single-project').addClass('hide');
            $('.single-project.illustration').removeClass('hide');
        } 
    });

    $('.filters li.photography-filter').click(function(){
        if ( $(this).hasClass('active-filter') ) {
            $(this).removeClass('active-filter');
            $('.single-project').removeClass('hide');
        } else {
            $(this).addClass('active-filter');
            $('.web-design-filter, .illustration-filter, .graphic-design-filter').removeClass('active-filter');
            $('.single-project').addClass('hide');
            $('.single-project.photography').removeClass('hide');
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
        $(".single-project").hide();
        filters.forEach((element) => {$("." + element).show() })
    } else {
        $(".single-project").show();
    }
});*/

});
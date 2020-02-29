$('.menu-item').click(function(){
    if ($(this).children('div').is(':visible')){
        $(this).children('div').slideToggle(200);
    } else {
        $('.menu-item').children('div').slideUp(200);
        $(this).children('div').slideToggle(200);
    }
});

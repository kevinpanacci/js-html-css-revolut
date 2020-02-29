$('.menu-item').click(function(){
    if ($(this).children('div').is(':visible')){
        $(this).children('div').slideToggle(50);
    } else {
        $('.menu-item').children('div').slideToggle(50);
        $(this).children('div').slideToggle(50);
    }
});

// $('.menu-item').click(function() {
//     $(this).children('div').slideToggle(50);
// });

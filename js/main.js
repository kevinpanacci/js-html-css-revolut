// $('.menu-item').mouseenter(function(){
//     $(this).addClass('selected');
// });
// $('.menu-item').mouseleave(function(){
//     $(this).removeClass('selected');
// });
$('.menu-item > a').click(function(){
    if ($(this).next().is(':visible')){
        $(this).next().slideToggle(50);
    } else {
        $('.menu-item > a').next().slideToggle(50);
        $(this).next().slideToggle(50);
    }
});

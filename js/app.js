
$(document).on('ready', function () {
    $('.header').addClass('header-unactive');
    $(window).on('scroll', () => {
        console.log($(window).scrollTop());
        if ($(window).scrollTop() > 50) {
            $('.header').removeClass('header-unactive');
            $('.header').addClass('header-active');

        } else {
            $('.header').addClass('header-unactive');
            $('.header').removeClass('header-active');
        }
    })


})

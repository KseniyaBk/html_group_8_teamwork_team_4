$('.slider').slick({
    autoplay: true,
    autoplaySpeed: 10000,
    asNavFor: '.sl2',
    mobileFirst: true
});

$('.sl2').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider',
    centerMode: false,
    focusOnSelect: true,
    arrows: false,
});

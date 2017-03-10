$('.slider').slick({
    // autoplay: true,
    // autoplaySpeed: 5000,
    asNavFor: '.sl2',
    mobileFirst: true
});

$('.sl2').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider',
    centerMode: false,
    centerPadding: '2%',
    focusOnSelect: true,
    arrows: false,
    mobileFirst: true,
    responsive: [
        {
            breakpoint: 320,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 5
            }
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 6
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 7
            }
        },
        {
            breakpoint: 960,
            settings: {
                slidesToShow: 8
            }
        },
        {
            breakpoint: 1023,
            settings: {
                slidesToShow: 10
            }
        }
    ]
});

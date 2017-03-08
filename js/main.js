$('.slider').slick({
    autoplay: true,
    autoplaySpeed: 10000,
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    responsive: [{


        breakpoint: 320,
        settings: {
            slidesToShow: 1,

        }

    },
        {

            breakpoint: 600,
            settings: {
                slidesToShow: 1,

            }

        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                infinite: true,
                speed: 500,
                fade: true,
                cssEase: 'linear'
            }

        }]
});
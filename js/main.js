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
// BLOG AUDIO!!!
$( 'audio' ).audioPlayer(
    {
        classPrefix: 'audioplayer',
        strPlay: 'Play',
        strPause: 'Pause',
        strVolume: 'Volume'
    });
// Map Contact.html
function initMap() {
    // Create a map object and specify the DOM element for display.
    var bishkek = {lat:42.846257, lng:74.597216};
    var map = new google.maps.Map(document.getElementById('map'), {
        center: bishkek,
        scrollwheel: false,
        zoom:16
    });
    var marker = new google.maps.Marker({
        position: bishkek,
        map: map
    })
}
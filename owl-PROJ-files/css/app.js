// JQuery
$(document).ready(function () {

    // alert("hello");


    // product slider
    $(".product-slider").owlCarousel({
        loop: true,
        margin: 10,
        dots: true,
        nav: true,
        navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        // autoplay: true,
        autoplayHoverPause: true,
        lazyLoad: true,
        margin: 5,
        stagePadding: 5,

        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });


});

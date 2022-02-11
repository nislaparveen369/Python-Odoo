$(document).ready(function() {
    $('#banner-owl').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        dots: false,

        navText: [
            '<i class="bi bi-chevron-left" ></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            992: {
                items: 1
            },

            576: {
                items: 2
            },
            0: {
                items: 1
            }
        }
    });

    $('#category-owl').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        dots: false,

        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            },
            1300: {
                items: 6
            }
        }
    })
    $(document).ready(function() {

        $('#latest-owl').owlCarousel({
            smartSpeed: 1000,
            margin: 0,
            autoplay: true,
            autoplayHoverPause: true,
            nav: false,
            dots: false,
            loop: true,
            margin: 25,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                768: {
                    items: 2.7
                },
                1000: {
                    items: 4.7,
                }
            }
        });
        $('#popular-owl').owlCarousel({
            smartSpeed: 1000,
            margin: 0,
            autoplay: true,
            autoplayHoverPause: true,
            nav: false,
            dots: false,
            loop: true,
            margin: 25,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                768: {
                    items: 2.7
                },
                1000: {
                    items: 4.7,
                }
            }
        });
    });

    $('#logo-owl').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 3
            },
            992: {
                items: 3
            },
            1300: {
                items: 5
            }
        }
    })
});
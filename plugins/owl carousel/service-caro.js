$('.service-bst-slide').owlCarousel({
    loop: true,
    autoplay: true,
    margin: 30,
    nav: false,
    dots: false,
    slideSpeed: 100,
    responsive:{
        0:{
            items:1
        },
        420:{
            items:1
        },
        600:{
            items:2
        },
        900:{
            items:3
        },
        1070:{
            items:3
        },
        1300:{
            items:3
        },
        1500:{
            items:4
        }
    }
})

var owl = $('.owl-carousel');
owl.owlCarousel();
// Go to the next item
$('.next-arrow3').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.prev-arrow3').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})
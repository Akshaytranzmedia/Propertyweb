$('.testi-slider').slick({
    dots: false,
    arrows: true,
    autoplay: false,
    prevArrow: $('.prev-arrow2'),
    nextArrow: $('.next-arrow2'),
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
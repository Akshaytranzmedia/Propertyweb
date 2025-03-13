$('.serviceslider').slick({
    dots: false,
    arrows: true,
    autoplay: true,
    prevArrow: $('.prev-arrow'),
    nextArrow: $('.next-arrow'),
    infinite: true,
    speed: 200,
    slidesToShow: 6,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


 
  $('.proerty-slider-container').slick({
    dots: false,
    arrows: true,
    autoplay: true,
    prevArrow: $('.prev-arrow1'),
    nextArrow: $('.next-arrow1'),
    infinite: true,
    speed: 800,
    slidesToShow: 3,
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
  $('.single-item').slick({
    dots: false,
    arrows: true,
    autoplay: true,
    prevArrow: $('.lft-arw'),
    nextArrow: $('.rigt-arw')
  });


$('.partnerslider').slick({
    dots: false,
    arrows: true,
    autoplay: true,
    prevArrow: $('.prev-arrow3'),
    nextArrow: $('.next-arrow3'),
    infinite: true,
    speed: 200,
    slidesToShow: 6,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 2
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
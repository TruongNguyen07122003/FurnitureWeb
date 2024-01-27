
$('.single-carousel').slick({
    centerMode: true,
    centerPadding: '60px',
    arrows: true,
        prevArrow: '<button class="slick-prev"><i class=" fa fa-angle-left"></i></button>',
        nextArrow: '<button class="slick-next"><i class="fa fa-angle-right"></i></button>',
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 4
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      }
    ]
    
  });
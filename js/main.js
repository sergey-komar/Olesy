$(function(){


    $(".slider__inner").slick({
      arrows: false,
      dots: true,
    });

    $(".slider__inner1").slick({
      arrows: false,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    });



    $(".works__inner").slick({
      slidesToShow: 4,
      slidesToScroll:1,
      prevArrow: '<button class="slick-arrow slick-prev"><img src="./images/slider/slide-right.svg" alt=""></button>',
      nextArrow: '<button class="slick-arrow slick-next"><img src="./images/slider/slide-left.svg" alt=""></button>', 
      responsive: [
        {
          breakpoint: 950,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 681,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 455,
          settings: {
            slidesToShow: 1,
          }
        },   
      ]
    });


    $(".header__menu-btn").on("click", function(){
      $(".header__menu ul").slideToggle();
    })
  });
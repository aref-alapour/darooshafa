$(document).ready(function () {
    const swiper_product = new Swiper('.special-slider', {
        loop: true,
      slidesPerView: 1,
  spaceBetween: 20,
autoplay: {
        delay: 10000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
  },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
  },
  breakpoints: {
         468: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 2,
          spaceBetween: 25,
          autoplay: {
        delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
  },
          },
        1280: {
          slidesPerView: 3,
          spaceBetween: 25,
          autoplay: {
        delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
  },
          },
      },
    });
  const swiper_product_home = new Swiper('.product-slider', {
        loop: true,
      slidesPerView: 1,
  spaceBetween: 20,
autoplay: {
        delay: 10000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
  },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
  },
  breakpoints: {
         468: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 25,
          autoplay: {
        delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
  },
          },
        1280: {
          slidesPerView: 4,
          spaceBetween: 25,
          autoplay: {
        delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
  },
          },
      },
    });
    $('.humburger-menu-icon').click(function (e) { 
        $('#background-overlay').toggle();
        $('.mobile-list').addClass('active');
        $('.mobile-list-close').addClass('active');
    });
    $('.mobile-list-close').click(function (e) { 
        $('#background-overlay').toggle();
        $('.mobile-list').removeClass('active');
        $('.mobile-list-close').removeClass('active');
    });
    $('#background-overlay').click(function (e) { 
        $('#background-overlay').toggle();
        $('.mobile-list').removeClass('active');
        $('.mobile-list-close').removeClass('active');
    });
  $('.mobile-dropdown').after().click(function (e) {
    $(this).children('ul').fadeToggle();
    $(this).toggleClass('active');
    e.stopPropagation();
  });
});
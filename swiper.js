const swiper = new Swiper('.swiper-header', {
    loop: true,
    autoplay: {
        delay: 3000,
      },
    pagination: {
      el: '.swiper-pagination',
    },

  });
  const swiperReviews = new Swiper('.swiper-reviews', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    autoplay: {
      delay: 3000,
    },
    slidesPerView: 1,
  });
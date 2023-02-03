
 var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 30,
    // mousewheel: false,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },

    loop: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    cssMode: false,

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
     },
  });



  var swiper2 = new Swiper(".mySwiper2", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 30,
    // mousewheel: true,

    autoplay: {
        delay: 3400,
        disableOnInteraction: false,
    },

    loop: true,

    cssMode: false,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
     },
  });



var swiper = new Swiper('.homepage-hero-slider', {
		slidesPerView: 1,
      	spaceBetween: 30,
		loop: true,
	autoplay: {
        delay: 10000,
        disableOnInteraction: false,
      },
	keyboard: {
        enabled: true,
      },
      	navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

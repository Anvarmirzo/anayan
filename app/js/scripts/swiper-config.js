export function initSliders() {
	const headerSwiper = new Swiper('.maps-slider', {
		direction: 'vertical',
		effect: 'fade',
		loop: true,
		allowTouchMove: false,
		speed: 1000,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		autoplay: {
			delay: 6000,
			disableOnInteraction: false,
		},
		breakpoints: {
			// when window width is >= 320px
			300: {
				autoplay: {
					disableOnInteraction: false,
				},
				allowTouchMove: false,
			},

			900: {
				allowTouchMove: true,
			},
		},
	});

	const followSlider = new Swiper('.follow-slider', {
		spaceBetween: 115,
		speed: 700,
		autoplay: {
			disableOnInteraction: false,
			delay: 2000,
		},
		breakpoints: {
			// when window width is >= 320px
			300: {
				slidesPerView: 1,
				centeredSlides: true,
				spaceBetween: 20,
			},
			575: {
				spaceBetween: 70,
				slidesPerView: 2,
				centeredSlides: false,
			},
			767: {
				spaceBetween: 100,
				slidesPerView: 2.45,
			},
			991: {
				spaceBetween: 45,
				slidesPerView: 3,
			},
			1200: {
				spaceBetween: 115,
				slidesPerView: 3.5,
			},
		},
	});
}

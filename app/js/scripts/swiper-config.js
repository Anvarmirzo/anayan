export function initSliders() {
	const headerSwiper = new Swiper('.hero-swiper', {
		loop: true,
		initialSlide: 1,
		speed: 1500,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},

		effect: 'fade',
		pagination: {
			el: '.swiper-pagination',
			dynamicBullets: true,
			clickable: true,
		},
	});
}

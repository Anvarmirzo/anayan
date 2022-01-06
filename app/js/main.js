import { fancyboxConfig } from './scripts/fancybox-config';
import { filter, shortFilter } from './scripts/filter';
import { imageZoom } from './scripts/imageZoom';
import { hideNavOnScroll, showNavMenu, showSearch } from './scripts/nav';
import { scrollPolyfill } from './scripts/scroll-behavior-polyfill';
import { initSliders } from './scripts/swiper-config';
import { textareaHeight } from './scripts/textarea';

document.addEventListener('DOMContentLoaded', function () {
	showSearch();
	showNavMenu();
	hideNavOnScroll();
	scrollPolyfill();
	imageZoom();
	initSliders();
	filter();
	shortFilter();
	fancyboxConfig();
	textareaHeight();
});

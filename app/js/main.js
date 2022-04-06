import { filter, shortFilter } from './scripts/filter';
import {formSubmit} from './scripts/form';
import { imageZoom } from './scripts/imageZoom';
import {
	hideNavOnScroll,
	showDropdown,
	showLangDropdown,
	showNavMenu,
	showSearch,
} from './scripts/nav';
import { scrollPolyfill } from './scripts/scroll-behavior-polyfill';
import { initSliders } from './scripts/swiper-config';
import { textareaHeight } from './scripts/textarea';

document.addEventListener('DOMContentLoaded', function () {
	showSearch();
	showNavMenu();
	showDropdown();
	showLangDropdown();
	hideNavOnScroll();
	scrollPolyfill();
	imageZoom();
	initSliders();
	filter();
	shortFilter();
	textareaHeight();
  formSubmit();
});

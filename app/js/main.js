import { imageZoom } from './scripts/imageZoom';
import { showNavMenu, showSearch } from './scripts/nav';
import { initSliders } from './scripts/swiper-config';
import { filter, shortFilter } from './scripts/filter';

document.addEventListener('DOMContentLoaded', function () {
	showSearch();
	showNavMenu();
	imageZoom();
	initSliders();
	filter();
	shortFilter();
});

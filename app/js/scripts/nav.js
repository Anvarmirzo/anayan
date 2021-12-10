export const showSearch = () => {
	const showSearch = document.getElementById('show-search-btn');
	const searchInput = document.getElementById('header-search-form');

	if (showSearch && searchInput) {
		showSearch.addEventListener('click', function (e) {
			e.preventDefault();
			showSearch.classList.remove('active');
			searchInput.classList.add('active');
		});
	}
};

export const showNavMenu = () => {
	const burgerBtn = document.getElementById('burger-btn');
	const navMenu = document.getElementById('responsive-nav');
	if (burgerBtn && navMenu) {
		burgerBtn.addEventListener('click', function (e) {
			navMenu.classList.toggle('active');
		});
	}
};

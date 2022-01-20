export const showSearch = () => {
	const wrappers = document.querySelectorAll('.header-widgets');

	wrappers.forEach((wrapper) => {
		const showSearch = wrapper.querySelector('#show-search-btn');
		const searchForm = wrapper.querySelector('#header-search-form');
		const input = wrapper.querySelector('.header-search__input');

		if (showSearch && searchForm) {
			showSearch.addEventListener('click', function (e) {
				e.preventDefault();
				e.stopPropagation();

				showSearch.classList.remove('active');
				searchForm.classList.add('active');
				setTimeout(() => {
					input.focus();
				}, 500);

				document.addEventListener('click', function (e) {
					e.stopPropagation();

					if (
						!showSearch.classList.contains('active') &&
						input !== document.activeElement
					) {
						showSearch.classList.add('active');
						searchForm.classList.remove('active');
					}
				});
			});
		}
	});
};

export const showNavMenu = () => {
	const burgerBtn = document.getElementById('burger-btn');
	const navMenu = document.getElementById('responsive-nav');
	if (burgerBtn && navMenu) {
		burgerBtn.addEventListener('click', function (e) {
			navMenu.classList.toggle('active');

			burgerBtn.classList.toggle('burger-btn--opened');
			burgerBtn.classList.toggle('burger-btn--closed');

			document.body.classList.toggle('hidden');
		});
	}
};

export const hideNavOnScroll = () => {
	let prevScrollpos = window.pageYOffset;
	const nav = document.getElementById('navbar');
	if (nav) {
		window.onscroll = function () {
			const currentScrollPos = window.pageYOffset;

			if (prevScrollpos > currentScrollPos) {
				nav.style.top = '0';
			} else {
				nav.style.top = '-57px';
			}

			prevScrollpos = currentScrollPos;
		};
	}
};

export const showDropdown = () => {
	const dropdown = document.querySelector('.dropdown');
	const toggler = document.querySelector('.dropdown-toggler');
	const isHover = (e) => e.parentElement.querySelector(':hover') === e;

	if (dropdown && toggler) {
		document.addEventListener('click', function (e) {
			if (window.innerWidth < 1101) {
				if (
					e.target.classList.contains('dropdown') ||
					e.target.classList.contains('dropdown-toggler')
				) {
					dropdown.classList.toggle('active');
				} else {
					if (dropdown.classList.contains('active')) {
						dropdown.classList.remove('active');
					}
				}
			}
		});
	}
};

export const showLangDropdown = () => {
	const langCurrent = document.getElementById('lang-current');
	const langList = document.getElementById('lang-list');

	if (langList && langCurrent) {
		langCurrent.addEventListener('click', function (e) {
			langList.classList.add('active');
		});

		langList.addEventListener('click', function (e) {
			if (!e.target.hasAttribute('href')) {
				langList.classList.toggle('active');
			}
		});
	}
};

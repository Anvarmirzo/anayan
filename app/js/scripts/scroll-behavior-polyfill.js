export const scrollPolyfill = () => {
	const scrollToSection = (event) => {
		if (supportsSmoothScrolling()) {
			return;
		}
		event.preventDefault();
		const scrollToElem = document.getElementById('section');
		SmoothVerticalScrolling(scrollToElem, 300, 'top');
	};

	const supportsSmoothScrolling = () => {
		const body = document.body;
		const scrollSave = body.style.scrollBehavior;
		body.style.scrollBehavior = 'smooth';
		const hasSmooth = getComputedStyle(body).scrollBehavior === 'smooth';
		body.style.scrollBehavior = scrollSave;
		return hasSmooth;
	};

	const SmoothVerticalScrolling = (element, time, position) => {
		const eTop = element.getBoundingClientRect().top;
		const eAmt = eTop / 100;
		let curTime = 0;
		while (curTime <= time) {
			window.setTimeout(SVS_B, curTime, eAmt, position);
			curTime += time / 100;
		}
	};

	const SVS_B = (eAmt, position) => {
		if (position == 'center' || position == '') window.scrollBy(0, eAmt / 2);
		if (position == 'top') window.scrollBy(0, eAmt);
	};

	const links = document.querySelectorAll('.dropdown-list a');
	if (links) {
		links.forEach((link) =>
			link.addEventListener('click', function (e) {
				scrollToSection(e);
			}),
		);
	}
};

export const filter = () => {
	// сountry city architecture island year
	const countryList = ['Belarus', 'Cyprus', 'Malta', 'Vatican'];
	const cityList = [
		'Astana',
		'Albena',
		'Açores',
		'Alupka',
		'Alushta',
		'Bern',
		'Berlin',
		'Brest',
		'Bali',
		'Bakhchisaray',
		'Deventer',
		'Echmiatsin',
		'Grodna',
		'Gdainsk',
		'Gdainsk',
		'Homel',
		's-Hertogenbosch',
		'Jerusalem',
		'Kiev',
		'Kaunas',
		'Krakow',
		'Lagoysk',
		'Larnaca',
		'Lviv',
		'Lisbon',
		'Mir',
		'Minsk',
		'Mahilev',
		'Malbork',
		'Moscow',
		'Nesvizh',
		'Mangup',
		'Novogrudok',
		'Nessebyr',
		'Pinsk',
		'Polock',
		'Postavy',
		'Potsdam',
		'Porto',
		'Riga',
		'Slonim',
		'Sozopol',
		'Sicily',
		'St. Petersburg',
		'Sudak',
		'The Golden Sands',
		'Trakai',
		'Vicebsk',
		'Venice',
		'Vilnius',
		'Warsaw',
		'Nesvizh',
		'Yerevan',
		'Yevpatoriya',
		'Yalta',
	];
	const architectureList = [
		'Angkor Vat',
		'Berlin (Cathedral)',
		'Mir (Castle)',
		'Nesvizh (Castle)',
		'Nessebyr & Sunny Beach',
		'Polock (Monastery)',
		'Slanchev Bryag',
		'Trakai (Castle)',
		'Venice (Lagoon)',
		'Vilnius (Cathedral)',
		'Vilnius (St. Anna church)',
		'Vilnius (St. Peter & St. Paul ch.)',
		'Zhirovichi (Monastery)',
		'Zurich',
	];
	const islandList = ['Crimea', 'Chersonesos', 'Komodo'];
	const yearList = ['Kiev (2000)'];

	const unsortedList = [
		...countryList,
		...cityList,
		...architectureList,
		...islandList,
		...yearList,
	];

	const sortedList = {}; // will accumulate list of: {letter: DocumentFragment }

	const select = document.getElementById('map-filter');
	const letterList = document.querySelectorAll('[data-filter]');

	const renderList = (list) => {
		// iteration each letter from DOM
		letterList.length &&
			letterList.forEach((letter) => {
				letter.innerHTML = '';
				const currentLetterName = []; // will accumulate names of current letter

				// iteration each place from data(JSON/Array/etc)
				list.length &&
					list.forEach((name) => {
						// sort each place by first letter and put to the matched cell
						if (
							name.charAt(0).toLowerCase() === letter.dataset.filter &&
							name !== 's-Hertogenbosch'
						) {
							currentLetterName.push(name);
						}

						//  find exception and move it to the desired cell
						else if (
							name === 's-Hertogenbosch' &&
							letter.dataset.filter === 'h'
						) {
							currentLetterName.push(name);
						}
					});

				// sort all names in current letter
				currentLetterName.sort((a, b) => a.localeCompare(b));

				// creation "busket" to storage all created DOM Elems
				const busket = document.createDocumentFragment();

				// wrap and move sorted list to "busket"
				currentLetterName.forEach((place) => {
					const li = document.createElement('li');
					const a = document.createElement('a');
					const linkURL = place.replace(/[\s]/g, '');

					a.href = `./map-${linkURL}.html/`;

					if (place.includes('(')) {
						let wrappedWithSpan = place
							.replace(/[(]/g, '<span>(')
							.replace(/[)]/g, ')</span>');

						a.innerHTML = wrappedWithSpan;
						li.appendChild(a);
						busket.appendChild(li);
					} else {
						a.innerHTML = place;
						li.appendChild(a);
						busket.appendChild(li);
					}
				});

				// save sorted list in object
				sortedList[letter.dataset.filter] = busket;
				// move all accumulated DOM Elems from "busket" to Filter Cell in DOM
				letter.append(sortedList[letter.dataset.filter]);
			});
	};

	// check elements to be in DOM
	if (select && letterList.length) {
		renderList(unsortedList);

		select.addEventListener('change', function (e) {
			switch (e.target.value) {
				case 'сountry':
					renderList(countryList);
					break;
				case 'city':
					renderList(cityList);
					break;
				case 'architecture':
					renderList(architectureList);
					break;
				case 'island':
					renderList(islandList);
					break;
				case 'year':
					renderList(yearList);
					break;

				default:
					renderList(letterList);
					break;
			}
		});
	}
};

export const shortFilter = () => {
	const showBtn = document.getElementById('show-map-catalog');
	const list = document.getElementById('maps-catalog-body');
	const showBtnText = document.getElementById('text-content');

	if (showBtn && showBtnText && list) {
		showBtn.addEventListener('click', function (e) {
			showBtn.classList.toggle('active');
			setTimeout(() => {
				showBtn.classList.toggle('active');
				list.classList.toggle('active');
				list.classList.contains('active')
					? (showBtnText.textContent = 'Show less')
					: (showBtnText.textContent = 'Show more');
			}, 1000);
		});
	}
};

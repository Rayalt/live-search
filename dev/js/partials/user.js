'use strict';

window.onload = function() {
	const inputClear = document.querySelector('.input__clear'),
		input = document.querySelector('.input__search'),
		searchItemList = document.querySelectorAll('.card-header__title'), //, .pill, .card-header__subtitle, .card-descr__text, .card-descr__title
		sectionList = document.querySelectorAll('.courses__section'),
		cardCoursesItemList = document.querySelectorAll('.card-courses__item'),
		dropSearch = document.querySelector('.drop-search');

	inputClear.style.display = 'none';
	dropSearch.style.display = 'none';
	
	input.addEventListener('input', () => {
		cardCoursesItemList.forEach(cardCoursesItem => cardCoursesItem.style.display = 'none');
		sectionList.forEach(section => section.style.display = 'none');
		dropSearch.style.display = 'block';
		let inputValue = input.value.trim();

		function getListIdx(str, substr) {
			let listIdx = [];
			let lastIndex = -1;
			while ((lastIndex = str.indexOf(substr, lastIndex + 1)) !== -1) {
				listIdx.push(lastIndex);
			}
			return listIdx;
		}
		
		if (inputValue.length >= 3) {
			 function searchList() {
				let item;
				for (let searchItem of searchItemList) {
					if (searchItem.innerHTML.toLowerCase().indexOf(inputValue.toLowerCase()) === -1) {
						item = true;
					} else {
						item = false;
						return item;
					}
				}
				return item;
			}
			if (searchList()) {
				dropSearch.innerHTML = `
					<li class="drop-search__item">
						<div class="drop-search__message">Ничего не найдено</div>
					</li>
				`;
			} else {
				dropSearch.innerHTML = '';
				for (let searchItem of searchItemList) {
					if (searchItem.innerHTML.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1) {
						
						//let nbspIndex = getListIdx(searchItem.innerHTML, '&nbsp;');
						searchItem.parentNode.parentNode.parentNode.style.display = 'flex';
						searchItem.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.style.display = 'block';

						//searchItem.innerHTML = searchItem.innerHTML.replace(/&nbsp;/gi, ' ');
						
						let li = document.createElement('li'),
							link = document.createElement('a');
						dropSearch.append(li);
						li.className = 'drop-search__item';
						li.append(link);
						link.className = 'drop-search__link';
						link.href = '#';
						
						for (let index of getListIdx(searchItem.innerHTML.toLowerCase(), inputValue.toLowerCase())) {
							let strongEx = searchItem.innerHTML.slice(index, index + inputValue.length);
							link.innerHTML = searchItem.innerHTML.split(strongEx).join(`<strong>${strongEx}</strong>`);
						}

						// for (let i of nbspIndex) {
						// 	searchItem.innerHTML = searchItem.innerHTML.replace(i, '&nbsp;');
						// }
					}
				}
			}
		} else if (inputValue.length >= 1 && inputValue.length <= 2) {
			// for (let searchItem of searchItemList) {
			// 	searchItem.innerHTML = searchItem.innerHTML.replace(/&nbsp;/gi, ' ');
			// }
		}  else {
			dropSearch.style.display = 'none';
			cardCoursesItemList.forEach(cardCoursesItem => cardCoursesItem.style.display = 'flex');
			sectionList.forEach(section => section.style.display = 'block');
			// for (let searchItem of searchItemList) {
			// 	searchItem.innerHTML = searchItem.innerHTML.replace(' ', '&nbsp;');
			// }
		}

		if (inputValue !== '') {
			inputClear.style.display = 'block';
		} else {
			inputClear.style.display = 'none';
		}
	});
	inputClear.addEventListener('click', () => {
		input.value = '';
		inputClear.style.display = 'none';

		dropSearch.style.display = 'none';
		cardCoursesItemList.forEach(cardCoursesItem => cardCoursesItem.style.display = 'flex');
		sectionList.forEach(section => section.style.display = 'block');
	});
}
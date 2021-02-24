const util = UIkit.util;
const search = util.$('.search-fld');
const searchVal = util.$('.search-filter');
const searchValAll = util.$('.search-filter-all');
const searchValNone = util.$('.search-filter-none');
const filterBtn = util.$$('li[data-uk-filter-control] a');
const formEl = util.$('#search-form');
let debounce,searchTerm, value;

// when write on field
util.on(search, 'keyup', () => {
	clearTimeout(debounce);
	
	debounce = setTimeout(() => {
		// get input value and convert to lower case
		value = search.value.toLowerCase();

		if (value.length) {
			searchTerm = '[data-tags*="' + value + '"]';
			util.attr(searchVal, 'data-uk-filter-control', searchTerm);
			// click on hidden link that gives 0 results, allow to click again filter link
			searchValNone.click();
			// click hidden link that filter the search
			searchVal.click();
		} else {
			// if search field is empty
			searchTerm = '[data-tags*=""]';
			// empty attribute
			util.attr(searchVal, 'data-uk-filter-control', searchTerm);
			// click hidden show all link
			searchValAll.click();
		}
	}, 300);
});

// prevent send form on press enter
util.on(formEl, 'keypress', e => {
	const key = e.charCode || e.keyCode || 0;
	if (key == 13) {
		e.preventDefault();
		console.log('Prevent submit on press enter');
	}
});

// empty field and attribute on click filter button
util.on(filterBtn, 'click', () => {
	if (search.value.length) {
		// empty field
		search.value = '';
		searchTerm = '[data-tags*=""]';
		// empty attribute
		util.attr(searchVal, 'data-uk-filter-control', searchTerm);
		console.log('empty field and attribute');
	}
});

util.on(searchValNone, 'click', e => {
	e.preventDefault();
})
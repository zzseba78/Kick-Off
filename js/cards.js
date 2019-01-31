var search = UIkit.util.$('.search-fld');
var searchVal = UIkit.util.$('.search-filter');
var filterBtn = UIkit.util.$$('li[data-uk-filter-control] a');
var formEl = UIkit.util.$('#search-form');
var debounce;

UIkit.util.on(search, 'keyup', function() {
	clearTimeout(debounce);
	debounce = setTimeout(function() {
		var value = search.value;
		var finalValue = value.toLowerCase();
		var searchTerm = '';

		if (value.length) searchTerm = '[data-tags*="' + finalValue + '"]';
		UIkit.util.attr(searchVal, 'data-uk-filter-control', searchTerm);
		searchVal.click();
	}, 300);
});

// prevent send form on press enter
UIkit.util.on(formEl, 'keypress', function(e) {
	var key = e.charCode || e.keyCode || 0;
	if (key == 13) {
		e.preventDefault();
		console.log('Prevent submit on press enter');
	}
});

// empty field and attribute on click filter button
UIkit.util.on(filterBtn, 'click', function() {
	var inputVal = search.value;
	if (inputVal.length) {
		// empty field
		search.value = '';
		searchTerm = '[data-tags*=""]';
		// empty attribute
		UIkit.util.attr(searchVal, 'data-uk-filter-control', searchTerm);
		console.log('empty field and attribute');
	}
});

var search = document.querySelector('.search-fld');
var searchVal = document.querySelector('.search-filter');
var debounce;

search.addEventListener('keyup', function(e) {
	clearTimeout(debounce);
	debounce = setTimeout(function() {
		var value = search.value;
		var searchTerm = '';

		if (value.length) searchTerm = '[data-tags*="' + search.value + '"]';

		searchVal.setAttribute('data-uk-filter-control', searchTerm);
		searchVal.click();
	}, 300);
});

// prevent send for on click enter
document.getElementById("search-form").onkeypress = function(e) {
	var key = e.charCode || e.keyCode || 0;
	if (key == 13) {
		console.log('Prevent submit on hit enter');
		e.preventDefault();
	}
}

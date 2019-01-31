var search = UIkit.util.$('.search-fld');
var searchVal = UIkit.util.$('.search-filter');
var filterBtn = UIkit.util.$$('li[data-uk-filter-control] a');
var debounce;

search.addEventListener('keyup', function(e) {
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

// prevent send for on click enter
document.getElementById("search-form").onkeypress = function(e) {
	var key = e.charCode || e.keyCode || 0;
	if (key == 13) {
		console.log('Prevent submit on hit enter');
		e.preventDefault();
	}
}

// empty field on click filter
UIkit.util.on(filterBtn, 'click', function(){
	var inputVal = search.value;
	if (inputVal.length) {
		// empty field
		search.value = '';
		searchTerm = '[data-tags*=""]';
		// empty attribute
		UIkit.util.attr(searchVal, 'data-uk-filter-control', searchTerm);
		console.log('empty field and value');
	}
});

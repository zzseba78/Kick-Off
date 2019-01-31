var search = document.querySelector('.search-fld');
var searchVal = document.querySelector('.search-filter');
var debounce;

search.addEventListener('keyup', function() {
  clearTimeout(debounce);
  debounce = setTimeout(function() {
    var value = search.value;
    var searchTerm = '';
    
    if(value.length) searchTerm = '[data-tags*="' + search.value + '"]';
    
    searchVal.setAttribute('data-uk-filter-control', searchTerm);
    searchVal.click();
  }, 300);
});

/* eslint-disable */
/**
 * from the tourism site
 */
(function($) {
var locationsElms = $('#townName').find('option').toArray();
var locations = [];

locationsElms.forEach((o) => {
	var text = o.innerText.trim();

	if (text.toLowerCase().indexOf('county') === -1) {
		locations.push(text)
	}
});

console.log(JSON.stringify(locations));
})(jQuery);


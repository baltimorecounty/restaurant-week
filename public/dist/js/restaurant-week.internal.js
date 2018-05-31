'use strict';

namespacer('restaurantWeek');

restaurantWeek.internalPages = function ($, debounce) {
	var fbWidgetSelector = '.fb-page';

	var getColumnWidth = function getColumnWidth() {
		return parseFloat($(fbWidgetSelector).closest('[class^="col"]').css('width'));
	};

	var onWindowResize = function onWindowResize() {
		var targetWidth = getColumnWidth();

		updateFacebookPluginStyles(targetWidth);
	};

	var updateFacebookPluginStyles = function updateFacebookPluginStyles(width) {
		if (!isNaN(width) && window.FB) {
			$(fbWidgetSelector).attr('data-width', width);
			FB.XFBML.parse();
		}
	};

	var init = function init() {
		window.addEventListener('resize', function () {
			debounce(function () {
				onWindowResize();
			}, 250);
		});
	};

	return {
		init: init
	};
}(jQuery, restaurantWeek.debounce);
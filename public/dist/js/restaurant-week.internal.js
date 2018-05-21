'use strict';

namespacer('restaurantWeek');

restaurantWeek.internalPages = function ($, debounce) {
	var fbWidgetSelector = '.fb-page';

	var updateFacebookPlugin = function updateFacebookPlugin(width) {
		if (!isNaN(width)) {
			$(fbWidgetSelector).attr('data-width', width);
			FB.XFBML.parse();
		}
	};

	var init = function init() {
		window.addEventListener('resize', debounce(function () {
			var targetWidth = parseFloat($(fbWidgetSelector).closest('[class^="col"]').css('width'));

			updateFacebookPlugin(targetWidth);
		}), 250);
	};

	return {
		init: init
	};
}(jQuery, restaurantWeek.debounce);
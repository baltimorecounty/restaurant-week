'use strict';

namespacer('restaurantWeek');

restaurantWeek.internalPages = (($, debounce) => {
	const fbWidgetSelector = '.fb-page';

	const updateFacebookPlugin = (width) => {
		if (!isNaN(width)) {
			$(fbWidgetSelector).attr('data-width', width);
			FB.XFBML.parse();
		}
	};

	const init = () => {
		window.addEventListener('resize', debounce(() => {
			const targetWidth = parseFloat($(fbWidgetSelector).closest('[class^="col"]').css('width'));

			updateFacebookPlugin(targetWidth);
		}), 250);
	};

	return {
		init,
	};
})(jQuery, restaurantWeek.debounce);

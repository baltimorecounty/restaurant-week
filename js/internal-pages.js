'use strict';

namespacer('restaurantWeek');

restaurantWeek.internalPages = (($, debounce) => {
	const fbWidgetSelector = '.fb-page';

	const updateFacebookPluginStyles = (width) => {
		if (!isNaN(width) && window.FB) {
			$(fbWidgetSelector).attr('data-width', width);
			FB.XFBML.parse();
		}
	};
	const getColumnWidth = () => parseFloat($(fbWidgetSelector).closest('[class^="col"]').css('width'));

	const onWindowResize = () => {
		const targetWidth = getColumnWidth();

		updateFacebookPluginStyles(targetWidth);
	};

	const init = () => {
		window.addEventListener('resize', () => {
			debounce(onWindowResize, 250);
		});
	};

	return {
		init,
	};
})(jQuery, restaurantWeek.debounce);

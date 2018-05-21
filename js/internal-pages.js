'use strict';

namespacer('restaurantWeek');

restaurantWeek.internalPages = (($) => {
	const updateFacebookPlugin = (width, height) => {
		const fbWidgetSelector = '.fb-page';

		if (!isNaN(width) && !isNaN(height)) {
			$(fbWidgetSelector).attr('data-width', width).attr('data-height', height);
		}
		FB.XFBML.parse();
	 };

	const init = () => {

	};

	return {
		init,
	};
})(jQuery);

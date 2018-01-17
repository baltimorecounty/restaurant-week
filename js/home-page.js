'use strict';

namespacer('restaurantWeek');

restaurantWeek.homePage = (($) => {
	const slickOptions = {
		autoplay: true,
		autoplaySpeed: 5000,
		infinite: true,
		arrows: false,
	};

	const init = () => {
		$('.hero-carousel').slick(slickOptions);
	};

	return {
		init,
	};
})(jQuery);

// On Document Ready
$(() => {
	restaurantWeek.homePage.init();
});

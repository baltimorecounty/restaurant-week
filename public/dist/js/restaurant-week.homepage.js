'use strict';

namespacer('restaurantWeek');

restaurantWeek.homePage = function ($) {
	var slickOptions = {
		autoplay: true,
		autoplaySpeed: 5000,
		infinite: true,
		arrows: false
	};

	var init = function init() {
		$('.hero-carousel').slick(slickOptions);
	};

	return {
		init: init
	};
}(jQuery);

// On Document Ready
$(function () {
	restaurantWeek.homePage.init();
});
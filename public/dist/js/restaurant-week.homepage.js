'use strict';

namespacer('restaurantWeek');

restaurantWeek.homePage = function ($) {
	var slickOptions = {
		autoplay: true,
		autoplaySpeed: 5000,
		infinite: true,
		prevArrow: '<img src="//baltimorecountymd.gov/sebin/f/m/carousel-arrow-left.png " class="slick-prev" style="display: block;">',
		nextArrow: '<img src="//baltimorecountymd.gov/sebin/v/i/carousel-arrow-right.png" class="slick-next" style="display: block;">'
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
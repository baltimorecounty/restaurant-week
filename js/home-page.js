

namespacer('restaurantWeek');

restaurantWeek.homePage = (($) => {
	const slickOptions = {
		autoplay: true,
		autoplaySpeed: 5000,
		infinite: true,
		prevArrow: '<img src="//baltimorecountymd.gov/sebin/f/m/carousel-arrow-left.png " class="slick-prev" style="display: block;">',
		nextArrow: '<img src="//baltimorecountymd.gov/sebin/v/i/carousel-arrow-right.png" class="slick-next" style="display: block;">',
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

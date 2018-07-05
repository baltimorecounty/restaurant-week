namespacer('restaurantWeek');

restaurantWeek.windowResize = (debounce => (fn) => {
	window.addEventListener('resize', () => {
		debounce(fn, 250);
	});
})(restaurantWeek.debounce);

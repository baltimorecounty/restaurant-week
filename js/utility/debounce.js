
namespacer('restaurantWeek');

restaurantWeek.debounce = (() => (fn, time) => {
	let timeout;

	return function innerDebounce() {
		const functionCall = () => fn.apply(this, arguments); // eslint-disable-line

		clearTimeout(timeout);
		timeout = setTimeout(functionCall, time);
	};
})();

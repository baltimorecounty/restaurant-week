'use strict';

((app) => {
	const categoryFilter = () => {
		const filterRestaurants = (restaurants, selectedItem, targetProperty) => {
			if (!selectedItem.length) {
				return restaurants;
			}
			const filtered = [];

			restaurants.forEach((restaurant) => {
				let numberOfMatches = 0;
				for (let i = 0, len = selectedItem.length; i < len; i += 1) {
					const category = selectedItem[i];

					if (restaurant[targetProperty].indexOf(category) > -1) {
						numberOfMatches += 1;

						if (numberOfMatches === len) {
							filtered.push(restaurant);
							break;
						}
					}
				}
			});

			return filtered;
		};

		return filterRestaurants;
	};

	app.filter('category', categoryFilter);
})(angular.module('rwApp'));

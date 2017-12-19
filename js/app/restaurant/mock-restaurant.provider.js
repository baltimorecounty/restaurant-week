((app) => {
	const restaurantProvider = ($http, constants) => {
		const getRestaurants = callback =>
			$http.get(constants.urls.restaurantMockData)
				.then(callback);

		return {
			getRestaurants,
		};
	};

	app
		.factory('restaurantProvider', ['$http', 'constants', restaurantProvider]);
})(angular.module('restaurantWeekApp'));

/**
 * Provides data from a json file that was generated from the previous site
 */
((app) => {
	const restaurantMockProvider = ($http, constants) => {
		const getRestaurants = callback =>
			$http.get(constants.urls.restaurantMockData)
				.then(callback);

		return {
			getRestaurants,
		};
	};

	app
		.factory('restaurantMockProvider', ['$http', 'CONSTANTS', restaurantMockProvider]);
})(angular.module('restaurantWeekApp'));

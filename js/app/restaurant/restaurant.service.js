((app) => {
	const restaurantService = (restaurantProvider) => {
		const getRestaurants = callback => restaurantProvider.getRestaurants(callback);

		return {
			getRestaurants,
		};
	};

	app
		.factory('restaurantService', ['restaurantMockProvider', restaurantService]);
})(angular.module('restaurantWeekApp'));

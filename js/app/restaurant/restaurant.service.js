((app) => {
	const restaurantService = (restaurantProvider) => {
		const getRestaurants = callback => restaurantProvider.getRestaurants(callback);

		return {
			getRestaurants,
		};
	};

	app
		.factory('rwApp.restaurantService', ['rwApp.restaurantMockProvider', restaurantService]);
})(angular.module('rwApp'));

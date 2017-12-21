((app) => {
	const restaurantService = (restaurantProvider) => {
		const getRestaurants = () => restaurantProvider.getRestaurants();

		return {
			getRestaurants,
		};
	};

	app
		.factory('rwApp.restaurantService', ['rwApp.restaurantMockProvider', restaurantService]);
})(angular.module('rwApp'));

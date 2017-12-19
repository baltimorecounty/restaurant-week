((app) => {
	const restaurantService = (restaurantProvider) => {
		const getRestaurants = async () => restaurantProvider.getRestaurants();

		return {
			getRestaurants,
		};
	};

	app
		.factory('restaurantService', ['restaurantProvider', restaurantService]);
})(angular.module('restaurantWeekApp'));

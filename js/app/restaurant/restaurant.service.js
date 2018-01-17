'use strict';

((app) => {
	const restaurantService = (restaurantProvider) => {
		const getRestaurants = () => restaurantProvider.getRestaurants();

		return {
			getRestaurants,
		};
	};

	restaurantService.$inject = ['rwApp.restaurantStructuredContentProvider'];

	app.factory('rwApp.restaurantService', restaurantService);
})(angular.module('rwApp'));

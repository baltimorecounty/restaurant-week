((app) => {
	const RestaurantListCtrl = function RestaurantListCtrl($scope, restaurantService) {
		const self = this;

		self.restaurantList = restaurantService.getRestaurants();
	};

	app.controller('rwApp.RestaurantListCtrl', ['$scope', 'rwApp.restaurantService', RestaurantListCtrl]);
})(angular.module('rwApp'));

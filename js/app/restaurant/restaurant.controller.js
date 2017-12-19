((app) => {
	const RestaurantListCtrl = function RestaurantListCtrl($scope, restaurantService) {
		const self = this;

		restaurantService.getRestaurants((resp) => {
			self.restaurantList = resp.data ? resp.data.restaurants : [];
		});
	};

	app.controller('RestaurantListCtrl', ['$scope', 'restaurantService', RestaurantListCtrl]);
})(angular.module('restaurantWeekApp'));

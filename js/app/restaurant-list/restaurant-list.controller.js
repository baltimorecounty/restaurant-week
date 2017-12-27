'use strict';

((app) => {
	const RestaurantListCtrl = function RestaurantListCtrl($scope, dataService, restaurantService) {
		const vm = this;
		vm.restaurantList = [];
		vm.categories = [];
		vm.locations = [];


		// set the list of restaurants
		restaurantService.getRestaurants()
			.then((list) => {
				vm.restaurantList = list;
			});

		// add categories for use with filter
		dataService.getCategories()
			.then((categories) => {
				vm.categories = categories;
			});


		// add locations for use with filter
		dataService.getLocations()
			.then((locations) => {
				vm.locations = locations;
			});
	};

	app.controller('rwApp.RestaurantListCtrl', ['$scope', 'rwApp.dataService', 'rwApp.restaurantService', RestaurantListCtrl]);
})(angular.module('rwApp'));

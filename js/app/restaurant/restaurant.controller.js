'use strict';

((app) => {
	const RestaurantCtrl = function RestaurantCtrl($scope, dataService, restaurantService) {
		const vm = this;
		vm.restaurantList = [];
		vm.categories = [];
		vm.locations = [];
		vm.restaurantFilter = '';


		// set the list of restaurants
		restaurantService.getRestaurants()
			.then((list) => {
				vm.restaurantList = list;
			});
	};

	app.controller('rwApp.RestaurantCtrl', ['$scope', 'rwApp.dataService', 'rwApp.restaurantService', RestaurantCtrl]);
})(angular.module('rwApp'));

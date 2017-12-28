'use strict';

((app) => {
	const RestaurantListCtrl = function RestaurantListCtrl($scope, $location) {
		const vm = this;

		vm.filters = {
			categories: [],
			location: '',
		};

		vm.filterRestaurants = (filters) => {
			const categories = filters.categories || vm.filters.categories;
			vm.filters.location = filters.location || vm.filters.location;


			categories.forEach((category) => {
				if (vm.filters.categories.indexOf(category) === -1) {
					vm.filters.categories.push(category);
				}
			});
		};

		vm.clearFilter = (name, type) => {
			if (typeof vm.filters[type] === 'string') {
				vm.filters[type] = '';
				return;
			}
			vm.filters[type] = vm.filters[type].filter(filter => filter !== name);
		};

		vm.clearFilters = () => {
			vm.filters.categories = [];
			vm.filters.location = '';
		};

		const locationSearch = $location.search();
		if (locationSearch && locationSearch.q) {
			vm.restaurantFilter = locationSearch.q; // eslint-disable-line no-param-reassign
		}
	};

	app.controller('rwApp.RestaurantListCtrl', ['$scope', '$location', RestaurantListCtrl]);
})(angular.module('rwApp'));

'use strict';

((app) => {
	const restaurantListDirective = ($location, constants) => {
		const directive = {
			restrict: 'E',
			scope: {
				list: '=',
				filtermodel: '=',
			},
			templateUrl: constants.urls.templates.restaurantList,
			link: (scope, element, attrs) => {
				scope.filters = {
					categories: [],
					location: '',
				};

				scope.filterRestaurants = (filters) => {
					const categories = filters.categories || scope.filters.categories;
					scope.filters.location = filters.location || scope.filters.location;


					categories.forEach((category) => {
						if (scope.filters.categories.indexOf(category) === -1) {
							scope.filters.categories.push(category);
						}
					});

				};

				scope.clearFilter = (name, type) => {
					if (typeof scope.filters[type] === 'string') {
						scope.filters[type] = '';
						return;
					}
					scope.filters[type] = scope.filters[type].filter(filter => filter !== name);
				};

				scope.clearFilters = () => {
					scope.filters.categories = [];
					scope.filters.locations = '';
				};

				const locationSearch = $location.search();
				if (locationSearch && locationSearch.q) {
					scope.restaurantFilter = locationSearch.q; // eslint-disable-line no-param-reassign
				}
			},
		};

		return directive;
	};

	app.directive('restaurantList', ['$location', 'rwApp.CONSTANTS', restaurantListDirective]);
})(angular.module('rwApp'));

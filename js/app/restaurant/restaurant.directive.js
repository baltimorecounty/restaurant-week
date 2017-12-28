'use strict';

((app) => {
	const restaurantDirective = (constants) => {
		const directive = {
			restrict: 'E',
			scope: {
				restaurant: '=',
			},
			templateUrl: constants.urls.templates.restaurant,
			link: (scope, element, attrs) => {
				scope.filterCategory = (selectedCategory) => {
					scope.$parent.$parent.restaurantList.filterRestaurants({
						categories: [selectedCategory],
					});
				};

				scope.filterLocation = (selectedLocation) => {
					scope.$parent.$parent.restaurantList.filterRestaurants({
						location: selectedLocation,
					});
				};
			},
		};

		return directive;
	};

	app.directive('restaurant', ['rwApp.CONSTANTS', restaurantDirective]);
})(angular.module('rwApp'));

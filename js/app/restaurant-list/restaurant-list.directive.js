'use strict';

((app) => {
	const restaurantListDirective = (constants) => {
		const directive = {
			restrict: 'E',
			scope: {
				list: '=',
				filtermodel: '=',
			},
			templateUrl: constants.urls.templates.restaurantList,
			controller: 'rwApp.RestaurantListCtrl',
			controllerAs: 'restaurantList',
			bindToController: true,
		};

		return directive;
	};

	app.directive('restaurantList', ['rwApp.CONSTANTS', restaurantListDirective]);
})(angular.module('rwApp'));

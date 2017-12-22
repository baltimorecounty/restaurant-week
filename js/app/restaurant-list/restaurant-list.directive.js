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

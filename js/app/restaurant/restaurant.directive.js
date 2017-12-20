((app) => {
	const restaurantDirective = (constants) => {
		const directive = {
			restrict: 'E',
			scope: {
				restaurant: '=',
			},
			templateUrl: constants.urls.templates.restaurant,
		};

		return directive;
	};

	app.directive('restaurant', ['rwApp.CONSTANTS', restaurantDirective]);
})(angular.module('rwApp'));

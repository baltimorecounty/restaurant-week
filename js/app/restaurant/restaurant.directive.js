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

	app.directive('restaurant', ['CONSTANTS', restaurantDirective]);
})(angular.module('restaurantWeekApp'));

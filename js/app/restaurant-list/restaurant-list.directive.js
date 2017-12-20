((app) => {
	const restaurantListDirective = (constants) => {
		const directive = {
			restrict: 'E',
			scope: {
				list: '=',
			},
			templateUrl: constants.urls.templates.restaurantList,
		};

		return directive;
	};

	app.directive('restaurantList', ['rwApp.CONSTANTS', restaurantListDirective]);
})(angular.module('rwApp'));

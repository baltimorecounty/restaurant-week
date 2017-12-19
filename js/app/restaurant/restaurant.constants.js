((app) => {
	const constants = {
		urls: {
			templates: {
				restaurant: 'dist/templates/restaurant/restaurant.template.html',
				restaurantList: 'dist/templates/restaurant/restaurant-list.template.html',
			},
			restaurantMockData: '../../../dist/data/restaurants.json',
		},
		dataProvider: 'restaurantMockProvider',
	};

	app.constant('CONSTANTS', constants);
})(angular.module('restaurantWeekApp'));

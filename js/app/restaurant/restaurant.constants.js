((app) => {
	const constants = {
		urls: {
			templates: {
				restaurant: 'dist/templates/restaurant/restaurant.template.html',
				restaurantList: 'dist/templates/restaurant-list/restaurant-list.template.html',
			},
			restaurantMockData: '../../../dist/data/restaurants.json',
		},
		dataProvider: 'restaurantMockProvider',
	};

	app.constant('rwApp.CONSTANTS', constants);
})(angular.module('rwApp'));

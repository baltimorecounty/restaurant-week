'use strict';

((app) => {
	const constants = {
		urls: {
			templates: {
				restaurant: '//staging.baltimorecountymd.gov/_Restaurant Week/app/restaurant.template.html',
				restaurantList: '//staging.baltimorecountymd.gov/_Restaurant Week/app/restaurant-list.template.html',
			},
			apiRoot: 'dist/data',
			restaurantMockData: 'dist/data/restaurants.json',
		},
		dataProvider: 'restaurantMockProvider',
	};

	app.constant('rwApp.CONSTANTS', constants);
})(angular.module('rwApp'));

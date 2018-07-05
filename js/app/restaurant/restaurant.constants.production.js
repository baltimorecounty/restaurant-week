'use strict';

((app) => {
	const constants = {
		urls: {
			templates: {
				restaurant: '/Restaurant Week/app/restaurant.template.html',
				restaurantList: '/Restaurant Week/app/restaurant-list.template.html',
			},
			apiRoot: 'dist/data',
			restaurantMockData: 'dist/data/restaurants.json',
			structuredContent: {
				restaurants: '/RW_Restaurant?format=json',
				imagePath: '',
			},
		},
	};

	app.constant('rwApp.CONSTANTS', constants);
})(angular.module('rwApp'));

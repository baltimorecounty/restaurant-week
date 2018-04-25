'use strict';

((app) => {
	const constants = {
		urls: {
			templates: {
				restaurant: '/_TEST/_templates/restaurant/restaurant.template.html',
				restaurantList: '/_TEST/_templates/restaurant-list/restaurant-list.template.html',
			},
			apiRoot: 'dist/data',
			structuredContent: {
				restaurants: '/_TEST/RW_Restaurant?format=json',
				imagePath: '',
			},
		},
	};

	app.constant('rwApp.CONSTANTS', constants);
})(angular.module('rwApp'));

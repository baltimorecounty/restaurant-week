'use strict';

((app) => {
	const constants = {
		urls: {
			templates: {
				restaurant: '/dist/templates/restaurant/restaurant.template.html',
				restaurantList: '/dist/templates/restaurant-list/restaurant-list.template.html',
			},
			apiRoot: 'dist/data',
			structuredContent: {
				restaurants: '/dist/data/mock-structured-content-restaurants.json',
				imagePath: 'http://staging.baltimorecountymd.gov',
			},
		},
	};

	app.constant('rwApp.CONSTANTS', constants);
})(angular.module('rwApp'));

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
			structuredContent: {
				restaurants: '//staging.baltimorecountymd.gov/_Restaurant%20Week/RW_Restaurant?format=json',
			},
		},
	};

	const localConstants = {
		urls: {
			templates: {
				restaurant: '/dist/restaurant/templates/restaurant.template.html',
				restaurantList: '/dist/restaurant-list/restaurant-list.template.html',
			},
			apiRoot: 'dist/data',
			structuredContent: {
				restaurants: '/dist/data/mock-structured-content-restaurants.json',
			},
		},
	};


	app.constant('rwApp.CONSTANTS', constants);
})(angular.module('rwApp'));

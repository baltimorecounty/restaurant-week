'use strict';

((app) => {
	const constants = {
		urls: {
			templates: {
				restaurant: '//staging.baltimorecountymd.gov/_Restaurant Week/app/restaurant.template.html',
				restaurantList: '//staging.baltimorecountymd.gov/_Restaurant Week/app/restaurant-list.template.html',
			},
			apiRoot: 'dist/data',
			structuredContent: {
				restaurants: '//staging.baltimorecountymd.gov/_Restaurant%20Week/RW_Restaurant?format=json',
				imagePath: '',
			},
		},
	};

	app.constant('rwApp.CONSTANTS', constants);
})(angular.module('rwApp'));
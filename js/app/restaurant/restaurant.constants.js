'use strict';

((app, window) => {
	app.constant('rwApp.CONSTANTS', window.restaurantWeekConstants);
})(angular.module('rwApp'), window);

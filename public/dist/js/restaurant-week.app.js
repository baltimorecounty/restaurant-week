'use strict';

(function () {
	angular.module('restaurantWeekApp', []);
})();
'use strict';

(function (app) {
	var constants = {
		urls: {
			templates: {
				restaurant: 'dist/templates/restaurant/restaurant.template.html',
				restaurantList: 'dist/templates/restaurant/restaurant-list.template.html'
			},
			restaurantMockData: '../../../dist/data/restaurants.json'
		},
		dataProvider: 'restaurantMockProvider'
	};

	app.constant('CONSTANTS', constants);
})(angular.module('restaurantWeekApp'));
'use strict';

(function (app) {
	var RestaurantModel = function RestaurantModel() {
		var Restaurant = function Restaurant(restaurant) {
			var self = undefined;

			self.name = restaurant.name || '';
			self.imageUrl = restaurant.imageUrl || 'defaultimageurl.png';
			self.imageAlt = restaurant.imgAlt || '';
			self.websiteUrl = restaurant.websiteUrl || '';
			self.websiteUrlTitle = restaurant.websiteUrl || '';
			self.addressLine1 = restaurant.addressLine1 || '';
			self.addressLine2 = restaurant.addressLine2 || '';
			self.phone = restaurant.phone || '';

			return self;
		};

		return Restaurant;
	};

	app.factory('RestaurantModel', RestaurantModel);
})(angular.module('restaurantWeekApp'));
'use strict';

/**
 * Provides data from a json file that was generated from the previous site
 */
(function (app) {
	var restaurantMockProvider = function restaurantMockProvider($http, constants) {
		var getRestaurants = function getRestaurants(callback) {
			return $http.get(constants.urls.restaurantMockData).then(callback);
		};

		return {
			getRestaurants: getRestaurants
		};
	};

	app.factory('restaurantMockProvider', ['$http', 'CONSTANTS', restaurantMockProvider]);
})(angular.module('restaurantWeekApp'));
'use strict';

/**
 * Returns Data from the html that is loaded on the page
 */
(function (app) {
	var restaurantPageProvider = function restaurantPageProvider(RestaurantModel) {
		var getRestaurants = function getRestaurants() {
			var list = [];

			angular.element('.restaurant-list .restaurant-item').forEach(function (restaurantElm) {
				var image = angular.element(restaurantElm).find('img');
				var link = angular.element(restaurantElm).find('.headline-link');
				var restaurant = new RestaurantModel({
					name: angular.element(restaurantElm).find('.restaurant-name').text(),
					imageUrl: angular.element(image).attr('href'),
					imageAlt: angular.element(image).attr('alt'),
					websiteUrl: angular.element(link).attr('href'),
					websiteUrlTitle: angular.element(link).attr('title'),
					addressLine1: angular.element(restaurantElm).find('.restaurant-address1').text(),
					addressLine2: angular.element(restaurantElm).find('.restaurant-address2').text(),
					phone: angular.element(restaurantElm).find('.restaurant-phone').text()
				});

				list.push(restaurant);
			});

			return list;
		};

		return {
			getRestaurants: getRestaurants
		};
	};

	app.factory('restaurantPageProvider', ['RestaurantModel', restaurantPageProvider]);
})(angular.module('restaurantWeekApp'));
'use strict';

(function (app) {
	var restaurantService = function restaurantService(restaurantProvider) {
		var getRestaurants = function getRestaurants(callback) {
			return restaurantProvider.getRestaurants(callback);
		};

		return {
			getRestaurants: getRestaurants
		};
	};

	app.factory('restaurantService', ['restaurantMockProvider', restaurantService]);
})(angular.module('restaurantWeekApp'));
'use strict';

(function (app) {
	var restaurantListDirective = function restaurantListDirective(constants) {
		var directive = {
			restrict: 'E',
			scope: {
				list: '='
			},
			templateUrl: constants.urls.templates.restaurantList
		};

		return directive;
	};

	app.directive('restaurantList', ['CONSTANTS', restaurantListDirective]);
})(angular.module('restaurantWeekApp'));
'use strict';

(function (app) {
	var restaurantDirective = function restaurantDirective(constants) {
		var directive = {
			restrict: 'E',
			scope: {
				restaurant: '='
			},
			templateUrl: constants.urls.templates.restaurant
		};

		return directive;
	};

	app.directive('restaurant', ['CONSTANTS', restaurantDirective]);
})(angular.module('restaurantWeekApp'));
'use strict';

(function (app) {
	var RestaurantListCtrl = function RestaurantListCtrl($scope, restaurantService) {
		var self = this;

		restaurantService.getRestaurants(function (resp) {
			self.restaurantList = resp.data ? resp.data.restaurants : [];
		});
	};

	app.controller('RestaurantListCtrl', ['$scope', 'restaurantService', RestaurantListCtrl]);
})(angular.module('restaurantWeekApp'));
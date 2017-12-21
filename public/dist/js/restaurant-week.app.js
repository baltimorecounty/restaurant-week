'use strict';

(function () {
	angular.module('rwApp', []);
})();
'use strict';

(function (app) {
	var constants = {
		urls: {
			templates: {
				restaurant: 'dist/templates/restaurant/restaurant.template.html',
				restaurantList: 'dist/templates/restaurant-list/restaurant-list.template.html'
			},
			apiRoot: '../../../dist/data',
			restaurantMockData: '../../../dist/data/restaurants.json'
		},
		dataProvider: 'restaurantMockProvider'
	};

	app.constant('rwApp.CONSTANTS', constants);
})(angular.module('rwApp'));
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

	app.factory('rwApp.RestaurantModel', RestaurantModel);
})(angular.module('rwApp'));
'use strict';

/**
 * Provides data from a json file that was generated from the previous site
 */
(function (app) {
	var restaurantMockProvider = function restaurantMockProvider($http, $q, constants) {
		var handleResponseSuccess = function handleResponseSuccess(resp, deferred) {
			deferred.resolve(resp.data.restaurants);
			return deferred.promise;
		};

		var handleResponseFailure = function handleResponseFailure(err, deferred) {
			deferred.reject(err);
			return deferred.promise;
		};

		var getRestaurants = function getRestaurants() {
			var deferred = $q.defer();

			return $http.get(constants.urls.restaurantMockData).then(function (resp) {
				return handleResponseSuccess(resp, deferred);
			}, function (err) {
				return handleResponseFailure(err, deferred);
			} // eslint-disable-line
			);
		};

		return {
			getRestaurants: getRestaurants
		};
	};

	app.factory('rwApp.restaurantMockProvider', ['$http', '$q', 'rwApp.CONSTANTS', restaurantMockProvider]);
})(angular.module('rwApp'));
'use strict';

/**
 * Returns Data from the html that is loaded on the page
 */
(function (app) {
	var restaurantPageProvider = function restaurantPageProvider(RestaurantModel) {
		var getRestaurants = function getRestaurants() {
			var list = [];

			var items = angular.element('.restaurant-list .restaurant-item');

			angular.forEach(items, function (restaurantElm) {
				var image = angular.element(restaurantElm).find('img');
				var link = angular.element(restaurantElm).find('.headline-link');
				var restaurant = RestaurantModel({
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

	app.factory('restaurantPageProvider', ['rwApp.RestaurantModel', restaurantPageProvider]);
})(angular.module('rwApp'));
'use strict';

(function (app) {
	var dataService = function dataService($http, $q, constants) {
		var apiRoot = constants.urls.apiRoot;


		var handleReponseSuccess = function handleReponseSuccess(resp, targetProperty, deferred) {
			deferred.resolve(resp.data[targetProperty]);
			return deferred.promise;
		};

		var handleResponseFailure = function handleResponseFailure(err, deferred) {
			deferred.reject(err);
			return deferred.promise;
		};

		var getLocations = function getLocations() {
			var deferred = $q.defer();

			return $http.get(apiRoot + '/locations.json').then(function (resp) {
				return handleReponseSuccess(resp, 'locations', deferred);
			}).catch(function (err) {
				return handleResponseFailure(err, deferred);
			});
		};

		var getCategories = function getCategories() {
			var deferred = $q.defer();

			return $http.get(apiRoot + '/categories.json').then(function (resp) {
				return handleReponseSuccess(resp, 'categories', deferred);
			}).catch(function (err) {
				return handleResponseFailure(err, deferred);
			});
		};

		return {
			getCategories: getCategories,
			getLocations: getLocations
		};
	};

	app.factory('rwApp.dataService', ['$http', '$q', 'rwApp.CONSTANTS', dataService]);
})(angular.module('rwApp'));
'use strict';

(function (app) {
	var restaurantService = function restaurantService(restaurantProvider) {
		var getRestaurants = function getRestaurants() {
			return restaurantProvider.getRestaurants();
		};

		return {
			getRestaurants: getRestaurants
		};
	};

	app.factory('rwApp.restaurantService', ['rwApp.restaurantMockProvider', restaurantService]);
})(angular.module('rwApp'));
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

	app.directive('restaurant', ['rwApp.CONSTANTS', restaurantDirective]);
})(angular.module('rwApp'));
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

	app.directive('restaurantList', ['rwApp.CONSTANTS', restaurantListDirective]);
})(angular.module('rwApp'));
'use strict';

(function (app) {
	var RestaurantListCtrl = function RestaurantListCtrl($scope, dataService, restaurantService) {
		var vm = this;
		vm.restaurantList = [];
		vm.categories = [];
		vm.locations = [];

		// set the list of restaurants
		restaurantService.getRestaurants().then(function (list) {
			vm.restaurantList = list;
		});

		// add categories for use with filter
		dataService.getCategories().then(function (categories) {
			vm.categories = categories;
		});

		// add locations for use with filter
		dataService.getLocations().then(function (locations) {
			vm.locations = locations;
		});
	};

	app.controller('rwApp.RestaurantListCtrl', ['$scope', 'rwApp.dataService', 'rwApp.restaurantService', RestaurantListCtrl]);
})(angular.module('rwApp'));
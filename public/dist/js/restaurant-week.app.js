'use strict';

(function () {
	angular.module('rwApp', []).config(function ($locationProvider) {
		$locationProvider.html5Mode({
			enabled: true,
			requireBase: false
		});
	});
})();
'use strict';

(function (app) {
	var constants = {
		urls: {
			templates: {
				restaurant: 'dist/templates/restaurant/restaurant.template.html',
				restaurantList: 'dist/templates/restaurant-list/restaurant-list.template.html'
			},
			apiRoot: 'dist/data',
			restaurantMockData: 'dist/data/restaurants.json'
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
/**
 * Provides data from a json file that was generated from the previous site
 */

'use strict';

(function (app) {
	var restaurantMockProvider = function restaurantMockProvider($http, $q, constants) {
		var addLocation = function addLocation(restaurants) {
			restaurants.forEach(function (restaurant) {
				var restaurantParts = restaurant.addressLine2.split(',');
				var zip = restaurantParts[1] && restaurantParts[1].indexOf(' ') > -1 ? restaurantParts[1].trim().split(' ')[1] : '';

				restaurant.town = restaurantParts[0] ? restaurantParts[0].trim() : '';
				restaurant.state = 'Maryland';
				restaurant.zip = zip;
			});
		};

		var handleResponseSuccess = function handleResponseSuccess(resp, deferred) {
			addLocation(resp.data.restaurants);
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
/**
 * Returns Data from the html that is loaded on the page
 */

'use strict';

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

	restaurantService.$inject = ['rwApp.restaurantMockProvider'];

	app.factory('rwApp.restaurantService', restaurantService);
})(angular.module('rwApp'));
'use strict';

(function (app) {
	var categoryFilter = function categoryFilter() {
		var filterRestaurants = function filterRestaurants(restaurants, selectedItem, targetProperty) {
			if (!selectedItem.length) {
				return restaurants;
			}
			var filtered = [];

			restaurants.forEach(function (restaurant) {
				var numberOfMatches = 0;
				for (var i = 0, len = selectedItem.length; i < len; i += 1) {
					var category = selectedItem[i];

					if (restaurant[targetProperty].indexOf(category) > -1) {
						numberOfMatches += 1;

						if (numberOfMatches === len) {
							filtered.push(restaurant);
							break;
						}
					}
				}
			});

			return filtered;
		};

		return filterRestaurants;
	};

	app.filter('category', categoryFilter);
})(angular.module('rwApp'));
'use strict';

(function (app) {
	var restaurantDirective = function restaurantDirective(constants) {
		var directive = {
			restrict: 'E',
			scope: {
				restaurant: '='
			},
			templateUrl: constants.urls.templates.restaurant,
			link: function link(scope, element, attrs) {
				scope.filterCategory = function (selectedCategory) {
					scope.$parent.filterRestaurants({
						categories: [selectedCategory]
					});
				};

				scope.filterLocation = function (selectedLocation) {
					scope.$parent.filterRestaurants({
						location: selectedLocation
					});
				};
			}
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
				list: '=',
				filtermodel: '='
			},
			templateUrl: constants.urls.templates.restaurantList,
			controller: 'rwApp.RestaurantListCtrl'
		};

		return directive;
	};

	app.directive('restaurantList', ['rwApp.CONSTANTS', restaurantListDirective]);
})(angular.module('rwApp'));
'use strict';

(function (app) {
	var RestaurantCtrl = function RestaurantCtrl($scope, dataService, restaurantService) {
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

	app.controller('rwApp.RestaurantCtrl', ['$scope', 'rwApp.dataService', 'rwApp.restaurantService', RestaurantCtrl]);
})(angular.module('rwApp'));
'use strict';

(function (app) {
	var RestaurantListCtrl = function RestaurantListCtrl($scope, $location) {
		var vm = $scope;

		vm.filters = {
			categories: [],
			location: ''
		};

		vm.filterRestaurants = function (filters) {
			var categories = filters.categories || vm.filters.categories;
			vm.filters.location = filters.location || vm.filters.location;

			categories.forEach(function (category) {
				if (vm.filters.categories.indexOf(category) === -1) {
					vm.filters.categories.push(category);
				}
			});
		};

		vm.clearFilter = function (name, type) {
			if (typeof vm.filters[type] === 'string') {
				vm.filters[type] = '';
				return;
			}
			vm.filters[type] = vm.filters[type].filter(function (filter) {
				return filter !== name;
			});
		};

		vm.clearFilters = function () {
			vm.filters.categories = [];
			vm.filters.locations = '';
		};

		var locationSearch = $location.search();
		if (locationSearch && locationSearch.q) {
			vm.restaurantFilter = locationSearch.q; // eslint-disable-line no-param-reassign
		}
	};

	app.controller('rwApp.RestaurantListCtrl', ['$scope', '$location', RestaurantListCtrl]);
})(angular.module('rwApp'));
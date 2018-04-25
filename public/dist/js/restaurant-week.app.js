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
				restaurant: '/dist/templates/restaurant/restaurant.template.html',
				restaurantList: '/dist/templates/restaurant-list/restaurant-list.template.html'
			},
			apiRoot: 'dist/data',
			structuredContent: {
				restaurants: '/dist/data/mock-structured-content-restaurants.json',
				imagePath: 'http://staging.baltimorecountymd.gov'
			}
		}
	};

	app.constant('rwApp.CONSTANTS', constants);
})(angular.module('rwApp'));
'use strict';

(function (app) {
	var RestaurantModel = function RestaurantModel() {
		var Restaurant = function Restaurant(restaurant) {
			var model = {};

			model.name = restaurant.name || '';
			model.imageUrl = restaurant.imageUrl || 'defaultimageurl.png';
			model.imageAlt = restaurant.imgAlt || '';
			model.websiteUrl = restaurant.websiteUrl || '';
			model.websiteUrlTitle = restaurant.websiteUrl || '';
			model.addressLine1 = restaurant.addressLine1 || '';
			model.addressLine2 = restaurant.addressLine2 || '';
			model.phone = restaurant.phone || '';
			model.categories = restaurant.categories || [];
			model.town = restaurant.town || '';
			model.zip = restaurant.zip || '';
			model.state = 'Maryland';
			model.menuLink = restaurant.menuLink || '';
			model.reservationsLink = restaurant.reservationsLink || '';

			return model;
		};

		return Restaurant;
	};

	app.factory('rwApp.RestaurantModel', RestaurantModel);
})(angular.module('rwApp'));
/**
 * Provides data from a json feed provided by Site Executive Structured Content
 */

'use strict';

(function (app) {
	var restaurantProvider = function restaurantProvider(constants, RestaurantModel, $http, $q) {
		var formatCategories = function formatCategories(categories) {
			return categories.filter(function (category) {
				return !!category;
			}).map(function (category) {
				return category.LABEL;
			});
		};
		var formatPhoneNumber = function formatPhoneNumber(number) {
			return number.toString().replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
		};

		var mapRestaurants = function mapRestaurants(structuredContentData) {
			if (!structuredContentData || !structuredContentData.length) return structuredContentData;

			return structuredContentData.map(function (restaurantToMap) {
				var website = restaurantToMap.website,
				    logo = restaurantToMap.logo;

				var restaurantModel = RestaurantModel({
					name: restaurantToMap._title.VALUE, // eslint-disable-line no-underscore-dangle
					imageUrl: constants.urls.structuredContent.imagePath + logo.URL || '',
					imageAlt: logo.ALTTEXT || '',
					websiteUrl: website.VALUE.LINK || '',
					websiteUrlTitle: website.VALUE.LINKTEXT || '',
					addressLine1: restaurantToMap.addressLine1.VALUE || '',
					addressLine2: restaurantToMap.addressLine2.VALUE || '',
					town: restaurantToMap.town.VALUE || '',
					zip: restaurantToMap.ZipCode.VALUE || '',
					phone: formatPhoneNumber(restaurantToMap.Phone_Number.VALUE) || '',
					categories: restaurantToMap.Categories && restaurantToMap.Categories.length ? formatCategories(restaurantToMap.Categories) : [],
					menuLink: restaurantToMap.menuLink.VALUE.LINK || '',
					reservationsLink: restaurantToMap.reservations_link.VALUE.LINK || ''
				});

				return restaurantModel;
			});
		};

		var handleResponseSuccess = function handleResponseSuccess(response, deferred) {
			if (response.data && response.data.CONTENTS && response.data.CONTENTS.length) {
				var restaurants = mapRestaurants(response.data.CONTENTS);
				deferred.resolve(restaurants);
			} else {
				deferred.reject('Did not receive a list of restaurants');
			}
			return deferred.promise;
		};

		var handleResponseFailure = function handleResponseFailure(err, deferred) {
			deferred.reject(err);
			return deferred.promise;
		};

		var getRestaurants = function getRestaurants() {
			var deferred = $q.defer();

			return $http.get(constants.urls.structuredContent.restaurants).then(function (response) {
				return handleResponseSuccess(response, deferred);
			}, function (err) {
				return handleResponseFailure(err, deferred);
			} // eslint-disable-line
			);
		};

		return {
			getRestaurants: getRestaurants,
			mapRestaurants: mapRestaurants
		};
	};

	restaurantProvider.$inject = ['rwApp.CONSTANTS', 'rwApp.RestaurantModel', '$http', '$q'];

	app.factory('rwApp.restaurantProvider', restaurantProvider);
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

	restaurantService.$inject = ['rwApp.restaurantProvider'];

	app.factory('rwApp.restaurantService', restaurantService);
})(angular.module('rwApp'));
'use strict';

(function (app) {
	var objectPropertyFilter = function objectPropertyFilter() {
		var filterObjects = function filterObjects(objectList, selectedItems, targetProperty) {
			if (!selectedItems || !selectedItems.length) {
				return objectList;
			}
			var filtered = [];

			objectList.forEach(function (obj) {
				var numberOfMatches = 0;
				for (var i = 0, len = selectedItems.length; i < len; i += 1) {
					var category = selectedItems[i];
					var hasProperty = Object.prototype.hasOwnProperty.call(obj, targetProperty);
					if (hasProperty) {
						if (obj[targetProperty].indexOf(category) > -1) {
							numberOfMatches += 1;

							if (numberOfMatches === len) {
								filtered.push(obj);
								break;
							}
						}
					}
				}
			});

			return filtered;
		};

		return filterObjects;
	};

	app.filter('objectProperty', objectPropertyFilter);
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
					scope.$parent.$parent.restaurantList.filterRestaurants({
						categories: [selectedCategory]
					});
				};

				scope.filterLocation = function (selectedLocation) {
					scope.$parent.$parent.restaurantList.filterRestaurants({
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
				filterModel: '='
			},
			templateUrl: constants.urls.templates.restaurantList,
			controller: 'rwApp.RestaurantListCtrl',
			controllerAs: 'restaurantList',
			bindToController: true
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
		vm.restaurantFilter = '';
		vm.isLoading = true;

		vm.clearRestaurantFilter = function () {
			vm.restaurantFilter = '';
		};

		// set the list of restaurants
		restaurantService.getRestaurants().then(function (list) {
			vm.restaurantList = list;
			vm.isLoading = false;
		});
	};

	app.controller('rwApp.RestaurantCtrl', ['$scope', 'rwApp.dataService', 'rwApp.restaurantService', RestaurantCtrl]);
})(angular.module('rwApp'));
'use strict';

(function (app) {
	var RestaurantListCtrl = function RestaurantListCtrl($scope, $location) {
		var vm = this;

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
			vm.filters.location = '';
		};

		var locationSearch = $location.search();
		if (locationSearch && locationSearch.q) {
			vm.restaurantFilter = locationSearch.q; // eslint-disable-line no-param-reassign
		}
	};

	app.controller('rwApp.RestaurantListCtrl', ['$scope', '$location', RestaurantListCtrl]);
})(angular.module('rwApp'));
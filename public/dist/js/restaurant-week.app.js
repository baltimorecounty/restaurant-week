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
	var restaurantMockProvider = function restaurantMockProvider() {
		var restaurants = [{
			addressLine1: '118 Shawan Road, Suite D',
			addressLine2: 'Hunt Valley, Maryland 21030',
			imageUrl: '//www.baltimorecountyrestaurantweek.com/sebin/x/c/logo-barretts.jpg',
			imageAlt: "Barrett's Grill logo",
			websiteUrl: 'http://www.barrettsgrill.com/home',
			websiteUrlTitle: "Link to Barrett's Grill website",
			name: "Barrett's Grill",
			phone: ' (410) 527-0999'
		}, {
			addressLine1: '11 West Aylesbury Road',
			addressLine2: 'Timonium, Maryland 21093',
			imageUrl: '//www.baltimorecountyrestaurantweek.com/sebin/m/n/logo-bluestone.gif',
			imageAlt: 'Bluestone logo',
			websiteUrl: 'http://www.bluestoneonline.net/',
			websiteUrlTitle: 'Link to Bluestone website',
			name: 'BlueStone',
			phone: ' (410) 561-1100'
		}, {
			addressLine1: '17434 Foreston Road',
			addressLine2: 'Upperco, Maryland 21155',
			imageUrl: '//www.baltimorecountyrestaurantweek.com/sebin/f/t/logo-friendly-farm.jpg',
			imageAlt: 'Friendly Farm logo',
			websiteUrl: 'http://friendlyfarm.net/',
			websiteUrlTitle: 'Link to Friendly Farm website',
			name: 'Friendly Farm',
			phone: ' (410) 239-7400'
		}, {
			addressLine1: '4844 Butler Road',
			addressLine2: 'Glyndon, Maryland 21071',
			imageUrl: '//www.baltimorecountyrestaurantweek.com/sebin/q/x/logo-glyndon-grill.gif',
			imageAlt: 'Glyndon Grill logo',
			websiteUrl: 'http://www.glyndongrill.com/home',
			websiteUrlTitle: 'Link to Glyndon Grill website',
			name: 'Glyndon Grill',
			phone: ' (443) 881-4183'
		}, {
			addressLine1: '6526 Holabird Avenue',
			addressLine2: 'Baltimore, Maryland 21224',
			imageUrl: '//www.baltimorecountyrestaurantweek.com/sebin/x/j/logo-jimmys-seafood.jpg',
			imageAlt: "Jimmy's Famous Seafood logo",
			websiteUrl: 'http://jimmysfamousseafood.com/',
			websiteUrlTitle: "Link to Jimmy's Famous Seafood website",
			name: "Jimmy's Famous Seafood",
			phone: ' (410) 633-4040'
		}, {
			addressLine1: '2620 Quarry Lake Drive',
			addressLine2: 'Baltimore, Maryland 21209',
			imageUrl: '//www.baltimorecountyrestaurantweek.com/sebin/v/z/logo-la-food-marketa.jpg',
			imageAlt: 'La Food Marketa logo',
			websiteUrl: 'http://www.lafoodmarketa.com/#restaurant',
			websiteUrlTitle: 'Link to La Food Marketa website',
			name: 'La Food Marketa',
			phone: ' (410) 415-0606'
		}, {
			addressLine1: '5005 Honeygo Center Drive',
			addressLine2: 'Perry Hall, Maryland 21128',
			imageUrl: '//www.baltimorecountyrestaurantweek.com/sebin/r/r/logo-liberatores-perryhall.jpg',
			imageAlt: "Liberatore's Perry Hall logo",
			websiteUrl: 'http://www.liberatores.com/perry-hall/about-perry-hall.html',
			websiteUrlTitle: "Link to Liberatore's Perry Hall website",
			name: "Liberatore's – Perry Hall",
			phone: ' (410) 529-4567'
		}, {
			addressLine1: '5009 Honeygo Center Drive, Suite 101',
			addressLine2: 'Perry Hall, Maryland 21128',
			imageUrl: '//www.baltimorecountyrestaurantweek.com/sebin/y/j/logo-libs-grill.gif',
			imageAlt: "Lib's Grill logo",
			websiteUrl: 'http://libsgrill.com/',
			websiteUrlTitle: "Link to Lib's Grill website",
			name: "Lib's Grill",
			phone: ' (410) 513-7133 '
		}, {
			addressLine1: '25 Crossroads Drive',
			addressLine2: 'Owings Mills, Maryland 21117',
			imageUrl: '//www.baltimorecountyrestaurantweek.com/sebin/g/u/logo-linwoods.gif',
			imageAlt: 'Linwoods logo',
			websiteUrl: 'http://www.linwoods.com/',
			websiteUrlTitle: 'Link to Linwoods website',
			name: 'Linwoods',
			phone: ' (410) 356-3030'
		}, {
			addressLine1: '14833 York Road',
			addressLine2: 'Sparks, Maryland 21152',
			imageUrl: '//www.baltimorecountyrestaurantweek.com/sebin/o/w/logo-the-milton-inn.gif',
			imageAlt: 'Milton Inn logo',
			websiteUrl: 'http://www.miltoninn.com/',
			websiteUrlTitle: 'Link to the Milton Inn website',
			name: 'The Milton Inn',
			phone: '(410) 771-4366'
		}, {
			addressLine1: '2450 Broad Avenue',
			addressLine2: 'Timonium, Maryland 21093',
			imageUrl: '//www.baltimorecountyrestaurantweek.com/sebin/n/n/logo-mothers-north-grille.jpg',
			imageAlt: "Mother's North Grille logo",
			websiteUrl: 'http://www.mothersgrille.com/timonium/',
			websiteUrlTitle: "Link to Mother's North Grille website",
			name: "Mother's North Grille",
			phone: ' (443) 991-5256'
		}, {
			addressLine1: '1201 Shawan Road',
			addressLine2: 'Cockeysville, Maryland 21030',
			imageUrl: '//www.baltimorecountyrestaurantweek.com/sebin/w/o/logo-the-oregon-grille.gif',
			imageAlt: 'The Oregon Grille logo',
			websiteUrl: 'http://www.theoregongrille.com/',
			websiteUrlTitle: 'Link to The Oregon Grille website',
			name: 'The Oregon Grille',
			phone: '(410) 771-0505'
		}, {
			addressLine1: '113 Back River Neck Road',
			addressLine2: 'Baltimore, Maryland 21221',
			imageUrl: '//www.baltimorecountyrestaurantweek.com/sebin/z/h/logo-pizza-johns.jpg',
			imageAlt: 'Pizza Johns logo',
			websiteUrl: 'http://pizzajohns.info/',
			websiteUrlTitle: 'Link to Pizza Johns website',
			name: "Pizza John's",
			phone: '(410) 687-7733'
		}, {
			addressLine1: '523 York Road',
			addressLine2: 'Towson, MD 21204',
			imageUrl: '//www.baltimorecountyrestaurantweek.com/sebin/v/b/the_point-logo.jpg',
			imageAlt: 'The Point logo',
			websiteUrl: 'https://www.thepointtowson.com/',
			websiteUrlTitle: 'Link to The Point Towsons website',
			name: 'The Point in Towson',
			phone: '(443) 463-9949'
		}, {
			addressLine1: '207 Nanticoke Road',
			addressLine2: 'Essex, Maryland 21221',
			imageUrl: '//www.baltimorecountyrestaurantweek.com/sebin/j/d/logo-river-watch.png',
			imageAlt: 'River Watch Restaurant logo',
			websiteUrl: 'http://www.riverwatchrestaurant.com/index.php',
			websiteUrlTitle: 'Link to River Watch Restaurant website',
			name: 'River Watch Restaurant',
			phone: ' (410) 687-1422'
		}, {
			addressLine1: '1777 Reisterstown Road',
			addressLine2: 'Pikesville, Maryland 21208',
			imageUrl: '//www.baltimorecountyrestaurantweek.com/sebin/z/z/logo-ruths-chris.jpg',
			imageAlt: "Ruth's Chris Pikesville logo",
			websiteUrl: 'http://www.ruthschris-pikesville.com/',
			websiteUrlTitle: "Link to Ruth's Chris Pikesville website",
			name: "Ruth's Chris – Pikesville",
			phone: '(410) 837-0033'
		}, {
			addressLine1: '10501 Falls Road',
			addressLine2: 'Lutherville-Timonium, Maryland 21093',
			imageUrl: '//www.baltimorecountyrestaurantweek.com/sebin/b/b/logo-the-valley-inn.jpg',
			imageAlt: 'The Valley Inn logo',
			websiteUrl: 'http://www.thevalleyinn.us/',
			websiteUrlTitle: 'Link to the Valley Inn website',
			name: 'The Valley Inn',
			phone: ' (410) 828-0002'
		}];

		var getRestaurants = function getRestaurants() {
			return restaurants;
		};

		return {
			getRestaurants: getRestaurants
		};
	};

	app.factory('rwApp.restaurantMockProvider', ['$http', 'rwApp.CONSTANTS', restaurantMockProvider]);
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
	var restaurantService = function restaurantService(restaurantProvider) {
		var getRestaurants = function getRestaurants(callback) {
			return restaurantProvider.getRestaurants(callback);
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
	var RestaurantListCtrl = function RestaurantListCtrl($scope, restaurantService) {
		var self = this;

		self.restaurantList = restaurantService.getRestaurants();
	};

	app.controller('rwApp.RestaurantListCtrl', ['$scope', 'rwApp.restaurantService', RestaurantListCtrl]);
})(angular.module('rwApp'));
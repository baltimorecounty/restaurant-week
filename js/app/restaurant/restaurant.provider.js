/**
 * Provides data from a json feed provided by Site Executive Structured Content
 */

'use strict';

((app) => {
	const restaurantProvider = (constants, RestaurantModel, $http, $q) => {
		const formatCategories = categories => categories.map(category => category.LABEL);
		const formatPhoneNumber = number => number.toString().replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');

		const mapRestaurants = (structuredContentData) => {
			const mappedRestaurants = [];

			structuredContentData.forEach((mappedRestaurant) => {
				const { website, logo } = mappedRestaurant;

				const restaurant = RestaurantModel({
					name: mappedRestaurant._title.VALUE, // eslint-disable-line no-underscore-dangle
					imageUrl: constants.urls.structuredContent.imagePath + logo.URL || '',
					imageAlt: logo.ALTTEXT || '',
					websiteUrl: website.VALUE.LINK || '',
					websiteUrlTitle: website.VALUE.LINKTEXT || '',
					addressLine1: mappedRestaurant.addressLine1.VALUE || '',
					addressLine2: mappedRestaurant.addressLine2.VALUE || '',
					town: mappedRestaurant.town.VALUE || '',
					zip: mappedRestaurant.ZipCode.VALUE || '',
					phone: mappedRestaurant.Phone.VALUE ? formatPhoneNumber(mappedRestaurant.Phone.VALUE) : '',
					categories: mappedRestaurant.Categories && mappedRestaurant.Categories.length ?
						formatCategories(mappedRestaurant.Categories) :
						[],
				});

				mappedRestaurants.push(restaurant);
			});

			return mappedRestaurants;
		};

		const handleresponseonseSuccess = (response, deferred) => {
			if (response.data && response.data.CONTENTS && response.data.CONTENTS.length) {
				const restaurants = mapRestaurants(response.data.CONTENTS);
				deferred.resolve(restaurants);
			} else {
				deferred.reject('Did not receive a list of restaurants');
			}
			return deferred.promise;
		};

		const handleresponseonseFailure = (err, deferred) => {
			deferred.reject(err);
			return deferred.promise;
		};

		const getRestaurants = () => {
			const deferred = $q.defer();

			return $http.get(constants.urls.structuredContent.restaurants)
				.then(
					response => handleresponseonseSuccess(response, deferred),
					err => handleresponseonseFailure(err, deferred) // eslint-disable-line
				);
		};

		return {
			getRestaurants,
			mapRestaurants,
		};
	};


	restaurantProvider.$inject = [
		'rwApp.CONSTANTS',
		'rwApp.RestaurantModel',
		'$http',
		'$q',
	];

	app.factory('rwApp.restaurantProvider', restaurantProvider);
})(angular.module('rwApp'));

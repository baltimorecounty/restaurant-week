/**
 * Provides data from a json feed provided by Site Executive Structured Content
 */

'use strict';

((app) => {
	const restaurantProvider = (constants, RestaurantModel, $http, $q) => {
		const formatCategories = categories => categories
			.filter(category => !!category)
			.map(category => category.LABEL);
		const formatPhoneNumber = number => number.toString().replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');

		const mapRestaurants = (structuredContentData) => {
			const mappedRestaurants = [];

			structuredContentData.forEach((restaurantToMap) => {
				const { website, logo } = restaurantToMap;

				const restaurant = RestaurantModel({
					name: restaurantToMap._title.VALUE, // eslint-disable-line no-underscore-dangle
					imageUrl: constants.urls.structuredContent.imagePath + logo.URL || '',
					imageAlt: logo.ALTTEXT || '',
					websiteUrl: website.VALUE.LINK || '',
					websiteUrlTitle: website.VALUE.LINKTEXT || '',
					addressLine1: restaurantToMap.addressLine1.VALUE || '',
					addressLine2: restaurantToMap.addressLine2.VALUE || '',
					town: restaurantToMap.town.VALUE || '',
					zip: restaurantToMap.ZipCode.VALUE || '',
					phone: restaurantToMap.Phone_Number.VALUE || '',
					categories: restaurantToMap.Categories && restaurantToMap.Categories.length ?
						formatCategories(restaurantToMap.Categories) :
						[],
				});

				mappedRestaurants.push(restaurant);
			});

			return mappedRestaurants;
		};

		const handleResponseSuccess = (response, deferred) => {
			if (response.data && response.data.CONTENTS && response.data.CONTENTS.length) {
				const restaurants = mapRestaurants(response.data.CONTENTS);
				deferred.resolve(restaurants);
			} else {
				deferred.reject('Did not receive a list of restaurants');
			}
			return deferred.promise;
		};

		const handleResponseFailure = (err, deferred) => {
			deferred.reject(err);
			return deferred.promise;
		};

		const getRestaurants = () => {
			const deferred = $q.defer();

			return $http.get(constants.urls.structuredContent.restaurants)
				.then(
					response => handleResponseSuccess(response, deferred),
					err => handleResponseFailure(err, deferred) // eslint-disable-line
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

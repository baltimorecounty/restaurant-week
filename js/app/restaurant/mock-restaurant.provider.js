/**
 * Provides data from a json file that was generated from the previous site
 */

'use strict';

((app) => {
	const restaurantMockProvider = ($http, $q, constants) => {
		const addLocation = (restaurants) => {
			restaurants.forEach((restaurant) => {
				const restaurantParts = restaurant.addressLine2.split(',');
				const zip = restaurantParts[1] && restaurantParts[1].indexOf(' ') > -1 ? restaurantParts[1].trim().split(' ')[1] : '';

				restaurant.town = restaurantParts[0] ? restaurantParts[0].trim() : '';
				restaurant.state = 'Maryland';
				restaurant.zip = zip;
			});
		};

		const handleResponseSuccess = (resp, deferred) => {
			if (resp.data && resp.data.restaurants && resp.data.restaurants.length) {
				addLocation(resp.data.restaurants);
				deferred.resolve(resp.data.restaurants);
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

			return $http.get(constants.urls.restaurantMockData)
				.then(
					resp => handleResponseSuccess(resp, deferred),
					err => handleResponseFailure(err, deferred) // eslint-disable-line
				);
		};

		return {
			getRestaurants,
		};
	};

	app.factory('rwApp.restaurantMockProvider', [
		'$http',
		'$q',
		'rwApp.CONSTANTS',
		restaurantMockProvider,
	]);
})(angular.module('rwApp'));

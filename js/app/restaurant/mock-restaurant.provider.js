/**
 * Provides data from a json file that was generated from the previous site
 */
((app) => {
	const restaurantMockProvider = ($http, $q, constants) => {
		const handleResponseSuccess = (resp, deferred) => {
			deferred.resolve(resp.data.restaurants);
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

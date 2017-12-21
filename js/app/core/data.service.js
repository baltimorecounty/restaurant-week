((app) => {
	const dataService = ($http, $q, constants) => {
		const { apiRoot } = constants.urls;

		const handleReponseSuccess = (resp, targetProperty, deferred) => {
			deferred.resolve(resp.data[targetProperty]);
			return deferred.promise;
		};

		const handleResponseFailure = (err, deferred) => {
			deferred.reject(err);
			return deferred.promise;
		};

		const getLocations = () => {
			const deferred = $q.defer();

			return $http.get(`${apiRoot}/locations.json`)
				.then(resp => handleReponseSuccess(resp, 'locations', deferred))
				.catch(err => handleResponseFailure(err, deferred));
		};

		const getCategories = () => {
			const deferred = $q.defer();

			return $http.get(`${apiRoot}/categories.json`)
				.then(resp => handleReponseSuccess(resp, 'categories', deferred))
				.catch(err => handleResponseFailure(err, deferred));
		};

		return {
			getCategories,
			getLocations,
		};
	};

	app
		.factory('rwApp.dataService', ['$http', '$q', 'rwApp.CONSTANTS', dataService]);
})(angular.module('rwApp'));

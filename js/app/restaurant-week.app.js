'use strict';

(() => {
	angular
		.module('rwApp', [])
		.config(($locationProvider) => {
			$locationProvider.html5Mode({
				enabled: true,
				requireBase: false,
			});
		});
})();

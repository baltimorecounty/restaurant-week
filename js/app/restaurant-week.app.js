'use strict';

(() => {
	angular
		.module('rwApp', ['ngAria'])
		.config(($locationProvider) => {
			$locationProvider.html5Mode({
				enabled: true,
				requireBase: false,
			});
		});
})();

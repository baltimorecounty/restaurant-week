'use strict';

(app => {
    const restaurantService = restaurantProvider => {
        const sortByName = (a, b) => {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
		};

		const sortRestaurants = (restaurants) => restaurants.sort(sortByName);

        const getRestaurants = () =>
			restaurantProvider
				.getRestaurants()
				.then(sortRestaurants);

        return {
            getRestaurants
        };
    };

    restaurantService.$inject = ['rwApp.restaurantProvider'];

    app.factory('rwApp.restaurantService', restaurantService);
})(angular.module('rwApp'));

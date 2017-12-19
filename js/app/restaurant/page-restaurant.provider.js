/**
 * Returns Data from the html that is loaded on the page
 */
((app) => {
	const restaurantPageProvider = (RestaurantModel) => {
		const getRestaurants = () => {
			const list = [];

			angular.element('.restaurant-list .restaurant-item')
				.forEach((restaurantElm) => {
					const image = angular.element(restaurantElm).find('img');
					const link = angular.element(restaurantElm).find('.headline-link');
					const restaurant = new RestaurantModel({
						name: angular.element(restaurantElm).find('.restaurant-name').text(),
						imageUrl: angular.element(image).attr('href'),
						imageAlt: angular.element(image).attr('alt'),
						websiteUrl: angular.element(link).attr('href'),
						websiteUrlTitle: angular.element(link).attr('title'),
						addressLine1: angular.element(restaurantElm).find('.restaurant-address1').text(),
						addressLine2: angular.element(restaurantElm).find('.restaurant-address2').text(),
						phone: angular.element(restaurantElm).find('.restaurant-phone').text(),
					});

					list.push(restaurant);
				});

			return list;
		};

		return {
			getRestaurants,
		};
	};

	app
		.factory('restaurantPageProvider', ['RestaurantModel', restaurantPageProvider]);
})(angular.module('restaurantWeekApp'));

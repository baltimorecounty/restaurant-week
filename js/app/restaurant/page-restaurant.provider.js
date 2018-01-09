/**
 * Returns Data from the html that is loaded on the page
 */

'use strict';

((app) => {
	const restaurantPageProvider = (RestaurantModel) => {
		const getCategories = (categoriesContainer) => {
			const categories = [];
			const categoryItems = categoriesContainer.find('div');
			angular.forEach(categoryItems, (categoryElm) => {
				const formattedCategory = angular.element(categoryElm).text().trim();
				if (formattedCategory) {
					categories.push(formattedCategory);
				}
			});
			return categories;
		};
		const getRestaurants = () => {
			const list = [];
			const items = angular.element('.restaurant-list .restaurant-item');

			angular.forEach(items, (restaurantElm) => {
				const image = angular.element(restaurantElm).find('.restaurant-logo');
				const link = angular.element(restaurantElm).find('.restaurant-website-link');
				const categoriesContainer = angular.element(restaurantElm).find('.categories');
				const restaurant = RestaurantModel({
					name: angular.element(restaurantElm).find('.restaurant-name').text().trim(),
					imageUrl: angular.element(image).attr('src'),
					imageAlt: angular.element(image).attr('alt'),
					websiteUrl: angular.element(link).attr('href'),
					websiteUrlTitle: angular.element(link).attr('title'),
					addressLine1: angular.element(restaurantElm).find('.address-line-1').text().trim(),
					addressLine2: angular.element(restaurantElm).find('.address-line-2').text().trim(),
					phone: angular.element(restaurantElm).find('.restaurant-phone').text().trim(),
					categories: getCategories(categoriesContainer),
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
		.factory('restaurantPageProvider', ['rwApp.RestaurantModel', restaurantPageProvider]);
})(angular.module('rwApp'));

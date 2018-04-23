'use strict';

((app) => {
	const RestaurantModel = () => {
		const Restaurant = (restaurant) => {
			const model = {};

			model.name = restaurant.name || '';
			model.imageUrl = restaurant.imageUrl || 'defaultimageurl.png';
			model.imageAlt = restaurant.imgAlt || '';
			model.websiteUrl = restaurant.websiteUrl || '';
			model.websiteUrlTitle = restaurant.websiteUrl || '';
			model.addressLine1 = restaurant.addressLine1 || '';
			model.addressLine2 = restaurant.addressLine2 || '';
			model.phone = restaurant.phone || '';
			model.categories = restaurant.categories || [];
			model.town = restaurant.town || '';
			model.zip = restaurant.zip || '';
			model.state = 'Maryland';
			model.menuLink = restaurant.menuLink || '';
			model.reservationsLink = restaurant.reservationsLink || '';

			return model;
		};

		return Restaurant;
	};

	app.factory('rwApp.RestaurantModel', RestaurantModel);
})(angular.module('rwApp'));


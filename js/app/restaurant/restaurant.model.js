((app) => {
	const RestaurantModel = () => {
		const Restaurant = (restaurant) => {
			const self = this;

			self.name = restaurant.name || '';
			self.imageUrl = restaurant.imageUrl || 'defaultimageurl.png';
			self.imageAlt = restaurant.imgAlt || '';
			self.websiteUrl = restaurant.websiteUrl || '';
			self.websiteUrlTitle = restaurant.websiteUrl || '';
			self.addressLine1 = restaurant.addressLine1 || '';
			self.addressLine2 = restaurant.addressLine2 || '';
			self.phone = restaurant.phone || '';

			return self;
		};

		return Restaurant;
	};

	app.factory('RestaurantModel', RestaurantModel);
})(angular.module('restaurantWeekApp'));


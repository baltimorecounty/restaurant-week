const Restaurant = (restaurant) => {
	this.name = restaurant.name || '';
	this.imageUrl = restaurant.imageUrl || 'defaultimageurl.png';
	this.imageAlt = restaurant.imgAlt || '';
	this.websiteUrl = restaurant.websiteUrl || '';
	this.websiteUrlTitle = restaurant.websiteUrl || '';
	this.addressLine1 = restaurant.addressLine1 || '';
	this.addressLine2 = restaurant.addressLine2 || '';
	this.phone = restaurant.phone || '';
};

export { Restaurant }; // eslint-disable-line import/prefer-default-export


let basePath = window.__karma__ ? 'base' : ''; // eslint-disable-line
describe('Restaurant Page Provider', () => {
	beforeEach(() => {
		bard.appModule('rwApp');
		bard.inject('restaurantPageProvider');

		jasmine.getFixtures().fixturesPath = `${basePath}/tests/fixtures/app/restaurant`;
		loadFixtures('page-restaurant-provider.fixture.html');
	});

	it('should exist', () => {
		expect(restaurantPageProvider).toBeDefined();
	});

	describe('restaurant object being returned', () => {
		let restaurants;
		let firstRestaurant;
		const mockRestuarant = {
			name: 'Artful Gourmet Bistro',
			addressLine1: '9433 Common Brook Road #103',
			addressLine2: 'Owings Mills, Maryland 21117',
			phone: '4103562606',
			websiteUrl: 'http://www.artfulgourmet.com/',
			imageUrl: '/sebin/j/g/logo-artful-gourmet.jpg',
			imageAlt: '',
			categories: ['Fine Dining'],
		};


		beforeEach(() => {
			restaurants = restaurantPageProvider.getRestaurants();
			firstRestaurant = restaurants.length ? restaurants[0] : null;
		});

		it(`the restuarant returned should have a name and it should be equal "${mockRestuarant.name}"`, () => {
			const { name } = firstRestaurant;
			expect(name).toBeString();
			expect(name).toEqual(mockRestuarant.name);
		});

		it(`the restuarant returned should have a address line 1 and it should be equal "${mockRestuarant.addressLine1}"`, () => {
			const { addressLine1 } = firstRestaurant;
			expect(addressLine1).toBeString();
			expect(addressLine1).toEqual(mockRestuarant.addressLine1);
		});

		it(`the restuarant returned should have a address line 2 and it should be equal "${mockRestuarant.addressLine2}"`, () => {
			const { addressLine2 } = firstRestaurant;
			expect(addressLine2).toBeString();
			expect(addressLine2).toEqual(mockRestuarant.addressLine2);
		});

		it(`the restuarant returned should have a phone number and it should be equal "${mockRestuarant.phone}"`, () => {
			const { phone } = firstRestaurant;
			expect(phone).toBeString();
			expect(phone).toEqual(mockRestuarant.phone);
		});

		it(`the restuarant returned should have a link to their website and it should be equal "${mockRestuarant.websiteUrl}"`, () => {
			const { websiteUrl } = firstRestaurant;
			expect(websiteUrl).toBeString();
			expect(websiteUrl).toEqual(mockRestuarant.websiteUrl);
		});

		it(`the restuarant returned should have an image of their logo and it should be equal "${mockRestuarant.imageUrl}"`, () => {
			const { imageUrl } = firstRestaurant;
			expect(imageUrl).toBeString();
			expect(imageUrl).toEqual(mockRestuarant.imageUrl);
		});

		it('the restuarant returned have an array of categories and it should contain a list of string values', () => {
			const { categories } = firstRestaurant;
			expect(categories).toBeArray();
			expect(categories).toBeArrayOfStrings();
			expect(categories.length).toEqual(mockRestuarant.categories.length);
		});
	});
});


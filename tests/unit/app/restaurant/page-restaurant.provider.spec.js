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
		beforeEach(() => {
			restaurants = restaurantPageProvider.getRestaurants();
			firstRestaurant = restaurants.length ? restaurants[0] : null;
		});

		it('the restuarant should have a name and it should be equal "Artful Gourmet Bistro"', () => {
			const { name } = firstRestaurant;
			expect(typeof name).toBeString();
			expect(name).toEqual('Artful Gourmet Bistro');
		});
	});
});


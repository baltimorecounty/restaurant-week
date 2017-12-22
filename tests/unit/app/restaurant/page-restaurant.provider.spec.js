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

	it('should provide a list of restaurants based on the page\'s contents', () => {
		const restaurants = restaurantPageProvider.getRestaurants();
		const isRestaurantValid = !!restaurants && restaurants.length > 0;

		expect(isRestaurantValid).toEqual(true);
	});
});


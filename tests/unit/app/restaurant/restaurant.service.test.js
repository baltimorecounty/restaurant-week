/* eslint no-undef: 0 */
describe('Restaurant Service', () => {
	beforeEach(() => {
		bard.appModule('rwApp');
		bard.inject('rwApp.restaurantService');
	});

	describe('Restaurant Service', () => {
		it('should exist', () => {
			expect(restaurantService).toBeDefined();
		});

		describe('GET Restaurants', () => {
			let list;
			let listIsValid = false;

			beforeEach(() => {
				list = restaurantService.getRestaurants();
				listIsValid = !!list && list.length > 0;
			});

			it('should return a list of restaurants', () => {
				expect(listIsValid).toEqual(true);
			});

			it('should return ', () => {
				expect(listIsValid).toEqual(true);
			});
		});
	});
});

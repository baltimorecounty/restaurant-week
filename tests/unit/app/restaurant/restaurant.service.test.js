describe('Restaurant Service', () => {
	let service;

	beforeEach(() => {
		bard.appModule('rwApp');
		bard.inject('rwApp.restaurantService');

		service = restaurantService;
	});

	describe('Restaurant Service', () => {
		it('should exist', () => {
			expect(service).toBeDefined();
		});

		it('should return a list of restaurants', () => {
			const list = service.getRestaurants();
			const listIsValid = !!list && list.length > 0;
			expect(listIsValid).toEqual(true);
		});

		it('should return ', () => {
			const list = service.getRestaurants();
			const listIsValid = !!list && list.length > 0;
			expect(listIsValid).toEqual(true);
		});
	});
});

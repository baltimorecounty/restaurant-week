let restaurantListController;

const emptyFilters = {
	categories: [],
	location: '',
};

const mockFilters = {
	categories: ['American', 'Steaks'],
	location: 'Towson',
};


describe('Restaurant List Controller', () => {
	beforeEach(() => {
		bard.appModule('rwApp');
		bard.inject('$controller', '$q', '$rootScope');

		restaurantListController = $controller('rwApp.RestaurantListCtrl', {
			$scope: $rootScope.$new(),
		});
	});

	it('should exist', () => {
		expect(restaurantListController).toBeDefined();
	});

	it('should contain an empty filters object', () => {
		expect(restaurantListController.filters.location).toBeEmptyString();
		expect(restaurantListController.filters.categories).toBeEmptyArray();
	});

	describe('filters', () => {
		beforeEach(() => {
			restaurantListController.filters = mockFilters;
		});

		it('should clear all filters when the clearFilters method is called', () => {
			restaurantListController.clearFilters();

			expect(restaurantListController.filters.location).toBeEmptyString();
			expect(restaurantListController.filters.categories).toBeEmptyArray();
		});

		it('should clear a specific category when the clearFilter method is called', () => {
			restaurantListController.clearFilter('American', 'categories');
			const hasAmericanCategory = restaurantListController.filters.categories.indexOf('American') > -1;
			expect(hasAmericanCategory).toEqual(false);
		});

		it('should clear a specific location when the clearFilter method is called', () => {
			restaurantListController.clearFilter('Towson', 'location');
			expect(restaurantListController.filters.location).toBeEmptyString();
		});

		it('should add a category when when the filterRestaurants method is called', () => {
			restaurantListController.filterRestaurants({
				categories: ['Fine Dining'],
			});

			const hasFineDiningCategory = restaurantListController.filters.categories.indexOf('Fine Dining') > -1;
			expect(hasFineDiningCategory).toEqual(true);
		});

		it('should change the location when filterRestaurants method is called', () => {
			restaurantListController.filterRestaurants({
				location: 'Perry Hall',
			});
			expect(restaurantListController.filters.location).toEqual('Perry Hall');
		});
	});

	// describe('UI', () => {
	// 	it('should clear all filters when the clear filter button is selected', () => {
	// 		expect(false).toEqual(true);
	// 	});

	// 	it('should clear a single "American" category when the categories "American" tag with an "X" is selected', () => {
	// 		expect(false).toEqual(true);
	// 	});

	// 	it('should clear a single "Towson" location when the locations "Towson" tag with an "X" is selected', () => {
	// 		expect(false).toEqual(true);
	// 	});

	// 	it('should show the appropriate number of records filtered in a friendly mes', () => {
	// 		expect(false).toEqual(true);
	// 	});
	// });
});

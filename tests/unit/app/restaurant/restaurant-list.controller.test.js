describe('Restaurant Week App', () => {
	let restaurantListController;

	beforeEach(() => {
		bard.appModule('rwApp');
		bard.inject('$controller', '$rootScope', 'rwApp.restaurantService');

		// Spy and force the return value when UsersFactory.all() is called
		spyOn(restaurantService, 'getRestaurants').and.callFake(() => []);

		restaurantListController = $controller('rwApp.RestaurantListCtrl', { $scope: $rootScope.$new() });
	});

	describe('Restaurant List Controller', () => {
		it('should exist', () => {
			expect(restaurantListController).toBeDefined();
		});

		it('should call the restaurant service to get a list of restaurants', () => {
			expect(restaurantService.getRestaurants).toHaveBeenCalled();
		});
	});
});

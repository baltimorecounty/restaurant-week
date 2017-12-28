describe('Restaurant List Directive', () => {
	beforeEach(() => {
		bard.appModule('rwApp');
		bard.inject('$controller', '$q', '$rootScope');

		restaurantListController = $controller('rwApp.RestaurantListCtrl', {
			'rwApp.dataService': ds,
			'rwApp.restaurantService': rs,
			$scope: $rootScope.$new(),
		});
	});
});

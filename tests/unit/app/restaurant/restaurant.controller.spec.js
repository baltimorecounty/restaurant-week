let restaurantListController;

const mockCategories = {
	categories: [
		'Category1',
		'Category2',
		'Category3',
	],
};

const mockLocations = {
	locations: [
		'Location 1',
		'Location2',
		'Location3',
	],
};

const mockRestaurants = {
	restaurants: [
		{
			addressLine1: '118 Shawan Road, Suite D',
			addressLine2: 'Hunt Valley, Maryland 21030',
			imageUrl: '//www.baltimorecountyrestaurantweek.com/sebin/x/c/logo-barretts.jpg',
			imageAlt: "Barrett's Grill logo",
			websiteUrl: 'http://www.barrettsgrill.com/home',
			websiteUrlTitle: "Link to Barrett's Grill website",
			name: "Barrett's Grill",
			phone: ' (410) 527-0999',
		},
		{
			addressLine1: '11 West Aylesbury Road',
			addressLine2: 'Timonium, Maryland 21093',
			imageUrl: '//www.baltimorecountyrestaurantweek.com/sebin/m/n/logo-bluestone.gif',
			imageAlt: 'Bluestone logo',
			websiteUrl: 'http://www.bluestoneonline.net/',
			websiteUrlTitle: 'Link to Bluestone website',
			name: 'BlueStone',
			phone: ' (410) 561-1100',
		},
	],
};

const ds = {
	getCategories: () => $q.when(mockCategories.categories),
	getLocations: () => $q.when(mockLocations.locations),
};

const rs = {
	getRestaurants: () => $q.when(mockRestaurants.restaurants),
};


describe('Restaurant List Controller', () => {
	beforeEach(() => {
		bard.appModule('rwApp');
		bard.inject('$controller', '$q', '$rootScope');

		restaurantListController = $controller('rwApp.RestaurantCtrl', {
			'rwApp.dataService': ds,
			'rwApp.restaurantService': rs,
			$scope: $rootScope.$new(),
		});
	});

	it('should exist', () => {
		expect(restaurantListController).toBeDefined();
	});

	it('should have an empty restaurant list', () => {
		expect(restaurantListController.restaurantList).toBeArray();
		expect(restaurantListController.restaurantList.length).toEqual(0);
	});

	it('should have an empty list of categories', () => {
		expect(restaurantListController.categories).toBeArray();
		expect(restaurantListController.categories.length).toEqual(0);
	});

	it('should have an empty list of locations', () => {
		expect(restaurantListController.locations).toBeArray();
		expect(restaurantListController.locations.length).toEqual(0);
	});

	describe('after initilization', () => {
		beforeEach(() => {
			$rootScope.$apply();
		});

		it('should have a list of mock restaurants after initialization', () => {
			expect(restaurantListController.restaurantList.length).toBeGreaterThan(0);
		});

		it(`should return ${mockRestaurants.restaurants.length} mock restaurants`, () => {
			expect(restaurantListController.restaurantList.length).toEqual(mockRestaurants.restaurants.length); // eslint-disable-line max-len
		});

		it('should call the data service to get a list of mock categories', () => {
			expect(restaurantListController.categories.length).toBeGreaterThan(0);
		});

		it(`should return ${mockCategories.categories.length} mock categories`, () => {
			expect(restaurantListController.categories.length).toEqual(mockCategories.categories.length);
		});

		it('should call the data service to get a list of mock locations', () => {
			expect(restaurantListController.locations.length).toBeGreaterThan(0);
		});

		it(`should return ${mockLocations.locations.length} mock locations`, () => {
			expect(restaurantListController.locations.length).toEqual(mockLocations.locations.length);
		});
	});
});

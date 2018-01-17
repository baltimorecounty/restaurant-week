let restaurantController;

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


describe('Restaurant Controller', () => {
	beforeEach(() => {
		bard.appModule('rwApp');
		bard.inject('$controller', '$q', '$rootScope');

		restaurantController = $controller('rwApp.RestaurantCtrl', {
			'rwApp.dataService': ds,
			'rwApp.restaurantService': rs,
			$scope: $rootScope.$new(),
		});
	});

	it('should exist', () => {
		expect(restaurantController).toBeDefined();
	});

	it('should have an empty restaurant list', () => {
		expect(restaurantController.restaurantList).toBeArray();
		expect(restaurantController.restaurantList.length).toEqual(0);
	});

	it('should have an empty list of categories', () => {
		expect(restaurantController.categories).toBeArray();
		expect(restaurantController.categories.length).toEqual(0);
	});

	it('should have an empty list of locations', () => {
		expect(restaurantController.locations).toBeArray();
		expect(restaurantController.locations.length).toEqual(0);
	});

	describe('after initilization', () => {
		beforeEach(() => {
			$rootScope.$apply();
		});

		it('should have a list of mock restaurants after initialization', () => {
			expect(restaurantController.restaurantList.length).toBeGreaterThan(0);
		});

		it(`should return ${mockRestaurants.restaurants.length} mock restaurants`, () => {
			expect(restaurantController.restaurantList.length).toEqual(mockRestaurants.restaurants.length); // eslint-disable-line max-len
		});
	});
});

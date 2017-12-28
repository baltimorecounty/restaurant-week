/* eslint no-undef: 0 */
const mockRestaurantServiceSuccessResponse = {
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
			categories: ['American'],
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
			categories: ['Fine Dining'],
		},
	],
};

describe('Restaurant Service', () => {
	let contants;
	let endpoint;

	beforeEach(() => {
		bard.appModule('rwApp');
		bard.inject('$http', '$httpBackend', '$q', '$rootScope', 'rwApp.restaurantService', 'rwApp.CONSTANTS');
		constants = CONSTANTS;
		endpoint = constants.urls.restaurantMockData;
	});

	it('should exist', () => {
		expect(restaurantService).toBeDefined();
	});

	describe('GetRestaurants', () => {
		it('should hits the proper endpoint for getting restaurants as defined in the constants file', () => {
			$httpBackend.when('GET', endpoint).respond(200, mockRestaurantServiceSuccessResponse);

			restaurantService.getRestaurants()
				.then((data) => {
					expect(!!data).toEqual(true);
				});

			$httpBackend.flush();
		});

		it('should report an error if the server fails', () => {
			$httpBackend.when('GET', endpoint).respond(500, { description: 'You fail' });

			restaurantService.getRestaurants()
				.catch((err) => {
					expect(err.data.description).toEqual('You fail');
				});

			$httpBackend.flush();
		});
	});
});

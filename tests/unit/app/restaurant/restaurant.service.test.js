/* eslint no-undef: 0 */
describe('Restaurant Service', () => {
	let contants;
	let endpoint;

	beforeEach(() => {
		bard.appModule('rwApp');
		bard.inject('$http', '$httpBackend', '$q', '$rootScope', 'rwApp.restaurantService', 'rwApp.CONSTANTS');
		constants = CONSTANTS;
		endpoint = constants.urls.restaurantMockData;
	});

	describe('Restaurant Service', () => {
		it('should exist', () => {
			expect(restaurantService).toBeDefined();
		});

		describe('GetRestaurants', () => {
			it('should hits the proper endpoint for getting restaurants as defined in the constants file', () => {
				$httpBackend.when('GET', endpoint).respond(200, [{}]);

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
});

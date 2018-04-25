/* eslint no-undef: 0 */
describe('Data Service', () => {
	let apiRoot;

	beforeEach(() => {
		bard.appModule('rwApp');
		bard.inject('$http', '$httpBackend', '$q', '$rootScope', 'rwApp.dataService', 'rwApp.CONSTANTS');
		constants = CONSTANTS;
		({ apiRoot } = constants.urls);
	});

	it('should exist', () => {
		expect(dataService).toBeDefined();
	});

	describe('GetCategories', () => {
		it('should hits the proper endpoint for getting categories as defined in the constants file', () => {
			$httpBackend.when('GET', `${apiRoot}/categories.json`).respond(200, { categories: [] });

			dataService.getCategories()
				.then((data) => {
					expect(!!data).toEqual(true);
				});

			$httpBackend.flush();
		});

		it('should report an error if the server fails', () => {
			$httpBackend.when('GET', `${apiRoot}/categories.json`).respond(500, { description: 'You fail' });

			dataService.getCategories()
				.catch((err) => {
					expect(err.data.description).toEqual('You fail');
				});

			$httpBackend.flush();
		});
	});
	describe('GetLocations', () => {
		it('should hits the proper endpoint for getting locations as defined in the constants file', () => {
			$httpBackend.when('GET', `${apiRoot}/locations.json`).respond(200, { locations: [] });

			dataService.getLocations()
				.then((data) => {
					expect(!!data).toEqual(true);
				});

			$httpBackend.flush();
		});

		it('should report an error if the server fails', () => {
			$httpBackend.when('GET', `${apiRoot}/locations.json`).respond(500, { description: 'You fail' });

			dataService.getLocations()
				.catch((err) => {
					expect(err.data.description).toEqual('You fail');
				});

			$httpBackend.flush();
		});
	});
});

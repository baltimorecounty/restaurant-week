describe('Restaurant Strucutred Content Provider', () => {
	let endpoint;
	beforeEach(() => {
		bard.appModule('rwApp');
		bard.inject(['rwApp.restaurantStructuredContentProvider', 'rwApp.CONSTANTS', '$http', '$httpBackend', '$q', '$rootScope']);
		endpoint = CONSTANTS.urls.structuredContent.restaurants;
	});

	it('should exist', () => {
		expect(restaurantStructuredContentProvider).toBeDefined();
	});

	describe('restaurant object being returned', () => {
		let restaurants;
		const structuredContentResponse = [{
			_title: {
				VALUE: "Barrett's Grill",
			},
			_endDate: {
				VALUE: '',
			},
			menuLink: {
				VALUE: {
					ID: '',
					LINKTYPE: '',
					PARAM: '',
					LINKTEXT: '',
					LINK: '',
				},
			},
			addressLine1: {
				VALUE: '118 Shawan Road, Suite D',
			},
			addressLine2: {
				VALUE: 'Hunt Valley, Maryland 21030',
			},
			UUID: 'c1a01db6-df83-4b8d-86fca43d5ef71a73',
			town: {
				VALUE: 'Hunt Valley',
			},
			_startDate: {
				VALUE: 'January, 16 2018 00:00:00',
			},
			_urlTitle: {
				VALUE: 'barretts-grill',
			},
			website: {
				VALUE: {
					ID: 'EA731A8FA3DFC291488A661B3C991DAF',
					LINKTYPE: 'EXTERNAL',
					PARAM: '',
					LINKTEXT: "View more information about Barrett's Grill on their website",
					LINK: 'http://www.barrettsgrill.com/home',
				},
			},
			ZipCode: {
				VALUE: 21030,
			},
			Phone: {
				VALUE: 4105270999,
			},
			logo: {
				NAME: 'logo-barretts.jpg',
				DESCRIPTION: "Barrett's Grill logo",
				VALUE: 'C9C7828723CC3149E62781790F0860A0',
				ALTTEXT: "Barrett's Grill logo",
				HEIGHT: 100,
				SIZE: 5891,
				URL: '/sebin/x/d/logo-barretts.jpg',
				WIDTH: 190,
			},
			Categories: [{
				VALUE: 'american',
				LABEL: 'American',
			}, {
				VALUE: 'fine_dining',
				LABEL: 'Fine Dining',
			}],
			ACTIVE: true,
			_printDate: {
				VALUE: 'January, 16 2018 00:00:00',
			},
		}, {
			_title: {
				VALUE: 'Artful Gourmet Bistro',
			},
			_endDate: {
				VALUE: '',
			},
			menuLink: {
				VALUE: {
					ID: '',
					LINKTYPE: '',
					PARAM: '',
					LINKTEXT: '',
					LINK: '',
				},
			},
			addressLine1: {
				VALUE: '9433 Common Brook Road #103',
			},
			addressLine2: {
				VALUE: 'Owings Mills, Maryland 21117',
			},
			UUID: '44bcc20a-3dfb-484c-aa6ede5040befd88',
			town: {
				VALUE: 'Owings Mills',
			},
			_startDate: {
				VALUE: 'January, 16 2018 00:00:00',
			},
			_urlTitle: {
				VALUE: 'artful-gourmet-bistro',
			},
			website: {
				VALUE: {
					ID: 'D65603DF550E7FEA2CF237C31DEE3C68',
					LINKTYPE: 'EXTERNAL',
					PARAM: '',
					LINKTEXT: 'View more information about the Arful Gourmet Bistro by visiting their website',
					LINK: 'http://www.artfulgourmet.com/',
				},
			},
			ZipCode: {
				VALUE: 21117,
			},
			Phone: {
				VALUE: 4103562606,
			},
			logo: {
				NAME: 'logo-artful-gourmet.jpg',
				DESCRIPTION: 'Artful Gourmet Bistro Logo',
				VALUE: 'F53A69188085EFE1DA36466C1D985DFA',
				ALTTEXT: 'Artful Gourmet Bistro Logo',
				HEIGHT: 100,
				SIZE: 6287,
				URL: '/sebin/j/g/logo-artful-gourmet.jpg',
				WIDTH: 190,
			},
			Categories: [{
				VALUE: 'fine_dining',
				LABEL: 'Fine Dining',
			}],
			ACTIVE: true,
			_printDate: {
				VALUE: 'January, 16 2018 00:00:00',
			},
		}];
		const mockGetRestaurantsResponse = [
			{
				name: 'Artful Gourmet Bistro',
				addressLine1: '9433 Common Brook Road #103',
				addressLine2: 'Owings Mills, Maryland 21117',
				phone: '4103562606',
				websiteUrl: 'http://www.artfulgourmet.com/',
				imageUrl: '/sebin/j/g/logo-artful-gourmet.jpg',
				imageAlt: '',
				categories: ['Fine Dining'],
				town: 'Owings Mills',
				state: 'Maryland',
				zip: '21117',
			},
		];
		const mockRestuarant = mockGetRestaurantsResponse[0];

		beforeEach(() => {

		});

		describe('GetRestaurants', () => {
			let list = [];
			let barretsGrille;

			describe('Mapped Response', () => {
				beforeEach(() => {
					list = restaurantStructuredContentProvider
						.mapRestaurants(structuredContentResponse);
					barretsGrille = list[1];
				});

				it('should return an empty array if there are no records', () => {
					const list = restaurantStructuredContentProvider
						.mapRestaurants([]);

					expect(list).toBeEmptyArray();
				});

				it('should return two records from the mock object', () => {
					expect(list.length).toEqual(2);
				});

				it(`the restuarant returned should have a name and it should be equal "${mockRestuarant.name}"`, () => {
					const { name } = barretsGrille;
					expect(name).toBeString();
					expect(name).toEqual(mockRestuarant.name);
				});

				it(`the restuarant returned should have a address line 1 and it should be equal "${mockRestuarant.addressLine1}"`, () => {
					const { addressLine1 } = barretsGrille;
					expect(addressLine1).toBeString();
					expect(addressLine1).toEqual(mockRestuarant.addressLine1);
				});

				it(`the restuarant returned should have a address line 2 and it should be equal "${mockRestuarant.addressLine2}"`, () => {
					const { addressLine2 } = barretsGrille;
					expect(addressLine2).toBeString();
					expect(addressLine2).toEqual(mockRestuarant.addressLine2);
				});

				it(`the restuarant returned should have a phone number and it should be equal "${mockRestuarant.phone}"`, () => {
					const { phone } = barretsGrille;
					expect(phone).toBeString();
					expect(phone).toEqual(mockRestuarant.phone);
				});

				it(`the restuarant returned should have a link to their website and it should be equal "${mockRestuarant.websiteUrl}"`, () => {
					const { websiteUrl } = barretsGrille;
					expect(websiteUrl).toBeString();
					expect(websiteUrl).toEqual(mockRestuarant.websiteUrl);
				});

				it(`the restuarant returned should have an image of their logo and it should be equal "${mockRestuarant.imageUrl}"`, () => {
					const { imageUrl } = barretsGrille;
					expect(imageUrl).toBeString();
					expect(imageUrl).toEqual(mockRestuarant.imageUrl);
				});

				it('should return the zipcode', () => {
					expect(true).toEqual(false);
				});
				it('should return the town', () => {
					expect(true).toEqual(false);
				});

				it('the restuarant returned have an array of categories and it should contain a list of string values', () => {
					const { categories } = barretsGrille;
					expect(categories).toBeArray();
					expect(categories).toBeArrayOfStrings();
					expect(categories.length).toEqual(mockRestuarant.categories.length);
				});
			});
		});
	});
});


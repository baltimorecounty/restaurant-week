/* eslint-env jasmine */
basePath = window.__karma__ ? 'base' : ''; // eslint-disable-line
const selectors = {
	heroCarouselSelector: '.hero-carousel',
	heroUnitItemSelector: '.hero-carousel-item',
	slickInitSelector: 'slick-initialized',
};

describe('Homepage Scripts', () => {
	describe('Carousel', () => {
		beforeEach(() => {
			jasmine.getFixtures().fixturesPath = `${basePath}/tests/fixtures`;
			loadFixtures('homepage-heroUnit.fixture.html');
		});

		it('should exist', (done) => {
			setTimeout(() => {
				const heroUnitExists = $(selectors.heroCarouselSelector).length > 0;
				expect(heroUnitExists).toEqual(true);
				done();
			}, 500);
		});

		it('should contain 1 or more items', (done) => {
			setTimeout(() => {
				const items = $(selectors.heroCarouselSelector).find(selectors.heroUnitItemSelector);
				expect(items.length).toBeGreaterThanOrEqualTo(1);
				done();
			}, 500);
		});

		it(`should give the hero carousel a class of ${selectors.slickInitSelector}`, (done) => {
			setTimeout(() => {
				restaurantWeek.homePage.init();
				const isInitialized = $(selectors.heroCarouselSelector).hasClass(selectors.slickInitSelector);
				expect(isInitialized).toEqual(true);
				done();
			}, 1000);
		});
	});
});


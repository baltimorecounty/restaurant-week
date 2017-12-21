/* eslint-env jasmine */
basePath = window.__karma__ ? 'base' : ''; // eslint-disable-line
const selectors = {
	heroCarouselSelector: '.hero-carousel',
	heroUnitItemSelector: '.hero-carousel-item',
};

describe('Homepage Scripts', () => {
	describe('Carousel', () => {
		beforeEach(() => {
			jasmine.getFixtures().fixturesPath = `${basePath}/tests/fixtures`;
			loadFixtures('homepage-heroUnit.fixture.html');
		});

		it('should exist', () => {
			restaurantWeek.homePage.init();

			const heroUnitExists = $(selectors.heroCarouselSelector).length > 0;
			expect(heroUnitExists).toEqual(true);
		});

		it('should contain 1 or more items', () => {
			const items = $(selectors.heroCarouselSelector).find(selectors.heroUnitItemSelector);
			expect(items.length).toBeGreaterThanOrEqualTo(1);
		});

		it('should give the hero carousel a class of \'slick\'', (done) => {
			setTimeout(() => {
				const isInitialized = $(selectors.heroCarouselSelector).hasClass('slick-initialized');
				expect(isInitialized).toEqual(true);
				done();
			}, 500);
		});
	});
});


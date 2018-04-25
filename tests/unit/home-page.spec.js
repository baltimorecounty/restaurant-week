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
			$(document).ready(() => {
				const heroUnitExists = $(selectors.heroCarouselSelector).length > 0;
				expect(heroUnitExists).toEqual(true);
				done();
			});
		});

		it('should contain 1 or more items', (done) => {
			$(document).ready(() => {
				const items = $(selectors.heroCarouselSelector).find(selectors.heroUnitItemSelector);
				expect(items.length).toBeGreaterThanOrEqualTo(1);
				done();
			});
		});

		it(`should give the hero carousel a class of ${selectors.slickInitSelector}`, (done) => {
			$(document).ready(() => {
				restaurantWeek.homePage.init();
				const isInitialized = $(selectors.heroCarouselSelector).hasClass(selectors.slickInitSelector);
				expect(isInitialized).toEqual(true);
				done();
			});
		});
	});
});


var basePath = window.__karma__ ? 'base' : '';
/* eslint-env jasmine */
describe('Restaurant Week', function() {
		const activeAndMobileClass = 'active mobile';
		const selectors = {
			hamburgerIcon: 'fa-bars',
			closeIcon: 'fa-times',
			mobileNavBtn: '.mobile-nav-btn',
			mobileNavIcon: '.mobile-nav-icon',
			navigationList: '.navigation-list'
		};
		
		beforeEach(() => {
			jasmine.getFixtures().fixturesPath = basePath + '/tests/fixtures';
			loadFixtures('mobile-nav.fixture.html');
			// don't need to pass in options, defaults are fine
			restaurantWeek.mobileNav.init();
		});
	
		describe('Mobile Navigation Button', () => {
			it(`should have the hamburger menu class (${selectors.hamburgerIcon}) on page load`, () => {
				var hasHamburgerMenuClass = $(selectors.mobileNavBtn)
					.find(selectors.mobileNavIcon).hasClass(selectors.hamburgerIcon);
				expect(hasHamburgerMenuClass).toEqual(true);
			});

			it(`should have the hamburger menu class (${selectors.hamburgerIcon}) if the mobile nav is collapsed`, () => {
				var hasHamburgerMenuClass = $(selectors.mobileNavBtn).find(selectors.mobileNavIcon).hasClass(selectors.hamburgerIcon);
				expect(hasHamburgerMenuClass).toEqual(true);
			});

			it(`should have the close icon class (${selectors.closeIcon}) if the mobile nav is expanded`, () => {
				$(selectors.hamburgerIcon).click();
				setTimeout(() => {
					var hasCloseMenuClass = $(selectors.mobileNavBtn).find(selectors.mobileNavIcon).hasClass(selectors.closeIcon);
					expect(hasCloseMenuClass).toEqual(true);
				}, 500);
				
			});
		});

		describe('Mobile Navigation List', () => {
			it('should NOT have active or mobile classes on page load', () => {
				var hasActiveAndMobileClass = $(selectors.navigationList).hasClass(activeAndMobileClass);
				expect(hasActiveAndMobileClass).toEqual(false);
			});

			it('should NOT have active or mobile classes on page load if the mobile nav is collapsed', () => {
				var hasActiveAndMobileClass = $(selectors.navigationList).hasClass(activeAndMobileClass);
				expect(hasActiveAndMobileClass).toEqual(false);
			});

			it('should have active or mobile classes if the mobile nav is expanded', () => {
				$(selectors.hamburgerIcon).click();
				setTimeout(() => {
					var hasActiveAndMobileClass = $(selectors.navigationList).hasClass(activeAndMobileClass);
					expect(hasActiveAndMobileClass).toEqual(true);
				}, 500);
			});
		});
	});
	
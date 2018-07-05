/* eslint-env jasmine */
basePath = window.__karma__ ? 'base' : ''; // eslint-disable-line

describe('Mobile Navigation', () => {
	const activeAndMobileClass = 'active mobile';
	const selectors = {
		hamburgerIcon: 'fa-bars',
		closeIcon: 'fa-times',
		mobileNavBtn: '.mobile-nav-btn',
		mobileNavIcon: '.mobile-nav-icon',
		navigationList: '.navigation-list',
	};

	beforeEach(() => {
		jasmine.getFixtures().fixturesPath = `${basePath}/tests/fixtures`;
		loadFixtures('mobile-nav.fixture.html');
	});

	describe('Mobile Navigation Button', () => {
		it(`should have the hamburger menu class (${selectors.hamburgerIcon}) on page load`, (done) => {
			const hasHamburgerMenuClass = $(selectors.mobileNavBtn)
				.find(selectors.mobileNavIcon).hasClass(selectors.hamburgerIcon);
			expect(hasHamburgerMenuClass).toEqual(true);
			done();
		});

		it(`should have the hamburger menu class (${selectors.hamburgerIcon}) if the mobile nav is collapsed`, (done) => {
			const hasHamburgerMenuClass = $(selectors.mobileNavBtn)
				.find(selectors.mobileNavIcon).hasClass(selectors.hamburgerIcon);
			expect(hasHamburgerMenuClass).toEqual(true);
			done();
		});

		it(`should have the close icon class (${selectors.closeIcon}) if the mobile nav is expanded`, (done) => {
			$(selectors.mobileNavBtn).click();
			setTimeout(() => {
				const hasCloseMenuClass =
					$(selectors.mobileNavBtn).find(selectors.mobileNavIcon).hasClass(selectors.closeIcon);
				expect(hasCloseMenuClass).toEqual(true);
				done();
			}, 1000);
		});
	});

	describe('Mobile Navigation List', () => {
		it('should NOT have active or mobile classes on page load', (done) => {
			const hasActiveAndMobileClass = $(selectors.navigationList).hasClass(activeAndMobileClass);
			expect(hasActiveAndMobileClass).toEqual(false);
			done();
		});

		it('should NOT have active or mobile classes on page load if the mobile nav is collapsed', (done) => {
			const hasActiveAndMobileClass = $(selectors.navigationList).hasClass(activeAndMobileClass);
			expect(hasActiveAndMobileClass).toEqual(false);
			done();
		});

		it('should have active or mobile classes if the mobile nav is expanded', (done) => {
			$(selectors.mobileNavBtn).click();
			setTimeout(() => {
				const hasActiveAndMobileClass = $(selectors.navigationList).hasClass(activeAndMobileClass);
				expect(hasActiveAndMobileClass).toEqual(true);
				done();
			}, 1000);
		});
	});

	describe('getCssPropertyAsFloat', () => {
		it('should return the proper border width as a number', () => {
			$('.hero-unit').css('border-top', '25px solid blue'); // setup our test

			const actualBorderWidth = restaurantWeek.mobileNav.getCssPropertyAsFloat('.hero-unit', 'border-top-width');
			expect(actualBorderWidth).toEqual(25);
		});

		it('should return the proper border width as a number', () => {
			$('.hero-unit').css('height', '454px'); // setup our test

			const actualHeight = restaurantWeek.mobileNav.getCssPropertyAsFloat('.hero-unit', 'height');
			expect(actualHeight).toEqual(454);
		});

		it('should return 0 if the height is set to auto', () => {
			$('.hero-unit').css('height', 'auto'); // setup our test

			const actualHeight = restaurantWeek.mobileNav.getCssPropertyAsFloat('.hero-unit', 'height');
			expect(actualHeight).toEqual(0);
		});
	});
});


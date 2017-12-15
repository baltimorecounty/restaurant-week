/* eslint-env jasmine */


describe('Restaurant Week', () => {
		const activeAndMobileClass = 'active mobile';
		const selectors = {
			hamburgerIcon = 'fa-bars',
			closeIcon = 'fa-times',
			mobileNavBtn = '.mobile-nav-btn',
			navigationList = '.navigation-list'
		};

		beforeEach(() => {
			
		});
	
		describe('Mobile Navigation Button', () => {
			it(`should have the hamburger menu class(${selectors.hamburgerIcon}) on page load`, (done) => {
				var hasHamburgerMenuClass = $(selectors.mobileNavBtn).hasClass(selectors.hamburgerIcon);
				expect(hasHamburgerMenuClass).to.be.eql(true);
				done();
			});

			it(`should have the hamburger menu class(${selectors.hamburgerIcon}) if the mobile nav is collapsed`, (done) => {
				var hasHamburgerMenuClass = $(selectors.mobileNavBtn).hasClass(selectors.hamburgerIcon);
				expect(hasHamburgerMenuClass).to.be.eql(true);
				done();
			});

			it(`should have the close icon class${selectors.closeIcon}) if the mobile nav is expanded`, (done) => {
				$(selectors.hamburgerIcon).click();
				setTimeout(() => {
					var hasCloseMenuClass = $(selectors.mobileNavBtn).hasClass(selectors.closeIcon);
					expect(hasCloseMenuClass).to.be.eql(true);
					done();
				}, 500);
				
			});
		});

		describe('Mobile Navigation List', () => {
			it('should NOT have active or mobile classes on page load', () => {
				var hasActiveAndMobileClass = $(selectors.navigationList).hasClass(activeAndMobileClass);
				expect(hasActiveAndMobileClass).to.be.eql(false);
				done();
			});

			it('should NOT have active or mobile classes on page load if the mobile nav is collapsed', () => {
				var hasActiveAndMobileClass = $(selectors.navigationList).hasClass(activeAndMobileClass);
				expect(hasActiveAndMobileClass).to.be.eql(false);
				done();
			});

			it('should have active or mobile classes if the mobile nav is expanded', () => {
				$(selectors.hamburgerIcon).click();
				setTimeout(() => {
					var hasActiveAndMobileClass = $(selectors.navigationList).hasClass(activeAndMobileClass);
					expect(hasActiveAndMobileClass).to.be.eql(true);
					done();
				}, 500);
			});
		});
	});
	
/* eslint-env jasmine */


describe('Restaurant Week', () => {
		const selectors = {
			hamburgerIcon = '',
			closeIcon = '',
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
				expect(false).to.be.eql(true);
			});

			it('should NOT have active or mobile classes on page load if the mobile nav is collapsed', () => {
				expect(false).to.be.eql(true);
			});

			it('should have active or mobile classes if the mobile nav is expanded', () => {
				expect(false).to.be.eql(true);
			});
		});
	});
	
'use strict';

namespacer('restaurantWeek');

restaurantWeek.mobileNav = (($, onWindowResize) => {
	const self = {};
	const activeClass = 'active';
	const disableScrollClass = 'disable-scroll';
	self.isNavVisible = false;
	self.originalBottomPosition = 0;
	self.originalNavigationListHeight = 0;

	const init = (options) => {
		self.options = options || {};
		self.options.mobileNavButtonSelector = self.options.mobileNavButtonSelector || '.mobile-nav-btn';
		self.options.navigationListSelector = self.options.navigationListSelector || '.navigation-list';
		self.options.overlayTargetSelector = self.options.overlayTargetSelector || '.overlay';
		self.options.scrollTargetSelector = self.options.scrollTargetSelector || 'html';
		self.options.pageHeaderSelector = self.options.pageHeaderSelector || '.page-header';
		self.options.heroUnitSelector = self.options.heroUnitSelector || '.hero-unit';


		$(document).on('click', self.options.mobileNavButtonSelector, onMobileNavClick);
	};

	const getCssPropertyAsFloat = (selector, cssPropertyName) =>
		parseFloat($(selector).css(cssPropertyName).replace('px', ''));

	const getHeroBorderHeight = () => getCssPropertyAsFloat(self.options.heroUnitSelector, 'border-top-width');

	const getHeaderHeight = () => {
		const pageHeaderContainerHeight = $(self.options.pageHeaderSelector).height();
		const heroBorderHeight = getHeroBorderHeight();

		return pageHeaderContainerHeight + heroBorderHeight;
	};

	const isActive = () => $(self.options.navigationListSelector).hasClass('active');

	const makeFullScreen = () => {
		const headerHeight = getHeaderHeight();
		const windowHeight = window.innerHeight;
		const navigationListHeight = windowHeight - headerHeight;
		const headerBottomPosition = getCssPropertyAsFloat(self.options.pageHeaderSelector, 'bottom');
		const newTopPosition = headerBottomPosition - navigationListHeight - getHeroBorderHeight();

		self.originalBottomPosition = headerBottomPosition;
		self.originalNavigationListHeight = headerBottomPosition - navigationListHeight;

		$(self.options.navigationListSelector)
			.css('bottom', `${newTopPosition}px`)
			.height(`${navigationListHeight}px`);
	};

	const resetNav = () => {
		$(self.options.navigationListSelector)
			.removeAttr('style');
	};

	const toggleNavIcons = ($btn) => {
		$btn
			.find('i')
			.toggleClass('fa-bars')
			.toggleClass('fa-times');
	};

	const toggleNavVisibility = ($navList) => {
		$navList.toggleClass('active mobile');
	};

	const togglePageOverlay = () => {
		$(self.options.overlayTargetSelector)
			.toggleClass(activeClass);
	};

	const togglePageScroll = () => {
		$(self.options.scrollTargetSelector)
			.toggleClass(disableScrollClass);
	};

	const toggleNav = () => {
		const $btn = $(self.options.mobileNavButtonSelector);
		const $navList = $(self.options.navigationListSelector);

		toggleNavIcons($btn);

		toggleNavVisibility($navList);

		togglePageScroll();

		togglePageOverlay();

		self.isNavVisible = !self.isNavVisible;

		if (self.isNavVisible) {
			makeFullScreen();
		} else {
			resetNav();
		}
	};

	const onMobileNavClick = toggleNav;

	const handleWindowResize = () => {
		if (window.innerWidth >= 968 && isActive()) {
			toggleNav();
		}
	};

	onWindowResize(handleWindowResize);

	return {
		/* test-code */
		getCssPropertyAsFloat,
		onMobileNavClick,
		/* end-test-code */
		init,
		isActive,
		toggleNav,
	};
})(jQuery, restaurantWeek.windowResize);

// On Document Ready
$(document).ready(() => {
	restaurantWeek.mobileNav.init();
});

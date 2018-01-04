'use strict';

namespacer('restaurantWeek');

restaurantWeek.mobileNav = (($) => {
	const self = {};
	const activeClass = 'active';
	const disableScrollClass = 'disable-scroll';

	const init = (options) => {
		self.options = options || {};
		self.options.mobileNavButtonSelector = self.options.mobileNavButtonSelector || '.mobile-nav-btn';
		self.options.navigationListSelector = self.options.navigationListSelector || '.navigation-list';
		self.options.overlayTargetSelector = self.options.overlayTargetSelector || '.overlay';
		self.options.scrollTargetSelector = self.options.scrollTargetSelector || 'html';


		$(document).on('click', self.options.mobileNavButtonSelector, onMobileNavClick);
	};

	const onMobileNavClick = (clickEvent) => {
		const $btn = $(clickEvent.currentTarget);
		const $navList = $(self.options.navigationListSelector);

		$(self.options.scrollTargetSelector)
			.toggleClass(disableScrollClass);

		$(self.options.overlayTargetSelector)
			.toggleClass(activeClass);

		$btn
			.find('i')
			.toggleClass('fa-bars')
			.toggleClass('fa-times');

		$navList.toggleClass('active mobile');
	};

	return {
		/* test-code */
		onMobileNavClick,
		/* end-test-code */
		init,
	};
})(jQuery);

// On Document Ready
$(document).ready(() => {
	restaurantWeek.mobileNav.init();
});

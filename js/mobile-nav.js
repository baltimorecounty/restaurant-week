'use strict';

namespacer('restaurantWeek');

restaurantWeek.mobileNav = (($) => {
	const self = {};

	const init = (options) => {
		self.options = options || {};
		self.options.mobileNavButtonSelector = self.options.mobileNavButtonSelector || '.mobile-nav-btn';
		self.options.navigationListSelector = self.options.navigationListSelector || '.navigation-list';

		$(document).on('click', self.options.mobileNavButtonSelector, onMobileNavClick);
	};

	const onMobileNavClick = (clickEvent) => {
		const $btn = $(clickEvent.currentTarget);
		const $navList = $(self.options.navigationListSelector);

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

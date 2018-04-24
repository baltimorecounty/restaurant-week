'use strict';

namespacer('restaurantWeek');

restaurantWeek.mobileNav = (($, onWindowResize) => {
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

    const isActive = () => {
        return $(self.options.navigationListSelector).hasClass('active');
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
		onMobileNavClick,
		/* end-test-code */
        init,
        isActive,
        toggleNav
	};
})(jQuery, restaurantWeek.windowResize);

// On Document Ready
$(document).ready(() => {
	restaurantWeek.mobileNav.init();
});

namespacer("restaurantWeek");

restaurantWeek.mobileNav = ($ => {
  let self = {};

  const init = options => {
    self.options = self.options || {};
    self.options.mobileNavButtonSelector =
      self.options.mobileNavButtonSelector || ".mobile-nav-btn";
    self.options.navigationListSelector =
      self.options.navigationListSelector || ".navigation-list";

    $(document).on(
      "click",
      self.options.mobileNavButtonSelector,
      onMobileNavClick
    );
  };

  const onMobileNavClick = e => {
    var $btn = $(e.currentTarget);
    var $navList = $(self.options.navigationListSelector);

    $btn
      .find("i")
      .toggleClass("fa-bars")
      .toggleClass("fa-times");

    $navList.toggleClass("active mobile");
  };

  return {
    /* test-code */
    onMobileNavClick,
    /* end-test-code */
    init
  };
})(jQuery);

//On Document Ready
$(document).ready(() => {
	restaurantWeek.mobileNav.init();
  });

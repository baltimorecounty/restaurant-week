"use strict";

function namespacer(t) {
  var e = t.split("."),
      r = window;if (e.length) for (var n = 0, i = e.length; n < i; n++) {
    var o = e[n];void 0 === r[o] && (r[o] = {}), r = r[o];
  }
}namespacer("baltimoreCounty.utility"), baltimoreCounty.utility.binarySearch = function () {
  "use strict";
  return { binarySearch: function binarySearch(t, e) {
      for (var r, n = 0, i = t.length - 1; n <= i;) {
        if (r = Math.floor((n + i) / 2), t[r] === e) return r;t[r] < e ? n = r + 1 : i = r - 1;
      }return -1;
    } };
}(), namespacer("baltimoreCounty.utility"), baltimoreCounty.utility.cdnFallback = function () {
  var t = function t(_t, e) {
    var r = document.createElement("script");r.src = _t, e ? document.getElementsByTagName("head")[0].appendChild(r) : document.getElementsByTagName("body")[0].appendChild(r);
  };return { load: function load(e, r, n) {
      ("string" == typeof e ? window[e] : e) || t(r, n);
    } };
}(), namespacer("baltimoreCounty.utility"), baltimoreCounty.utility.debounce = function (t, e, r) {
  var n;return function (t, e, r) {
    var i = this,
        o = arguments,
        u = function u() {
      n = null, r || t.apply(i, o);
    },
        a = r && !n;clearTimeout(n), n = setTimeout(u, e), a && t.apply(i, o);
  };
}(), namespacer("baltimoreCounty.utility"), baltimoreCounty.utility.formValidator = function (t) {
  var e = function e(t) {
    return !(!t || void 0 === t.val() || 0 === t.val().length);
  };return { requiredFieldValidator: e, requiredFieldRadioValidator: function requiredFieldRadioValidator(t) {
      var r = t.attr("name"),
          n = t.closest("form").find("input[name=" + r + "]"),
          i = n.filter(":checked");return i.length > 0 && e(i);
    }, requiredFieldPatternValidator: function requiredFieldPatternValidator(t, r) {
      if ("string" == typeof r) try {
        r = new RegExp(r);
      } catch (t) {
        return console.log(t), !1;
      }if (e(t)) {
        var n = t.val();return r.test(n);
      }return !1;
    } };
}(jQuery), namespacer("baltimoreCounty.utility"), baltimoreCounty.utility.format = function () {
  "use strict";
  function t(t) {
    if (t) {
      t && "string" == typeof t && (t = parseFloat(t));return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 }).format(t);
    }
  }function e(t, e) {
    "number" == typeof t && (t = t.toString());var r = /\d+/g,
        n = t.match(r).join("").split(""),
        i = e.split("").filter(function (t) {
      return "x" === t;
    }).length,
        o = i + 1 === n.length;return o && n.shift(), i === n.length || o ? (n.forEach(function (t) {
      e = e.replace("x", t);
    }), e) : (console.error("Incorrect Format. Double Check your values."), null);
  }function r(t, e, r) {
    return n[t](e, r);
  }var n = { currency: t, phoneNumber: e };return r;
}(), function (t, e) {
  "use strict";
  t.fn.elliptical = function (e) {
    var r = t.extend({ separator: " ", suffix: "..." }, e);return this.filter(function (e, r) {
      return t(r).height() < r.scrollHeight;
    }).each(function (e, n) {
      for (var i = t(n), o = i.text().split(r.separator); n.scrollHeight > i.height();) {
        o.pop(), i.text(o.join(r.separator));
      }o.pop(), i.text(o.join(r.separator) + r.suffix);
    });
  };
}(jQuery), namespacer("baltimoreCounty.utility"), baltimoreCounty.utility.jsonTools = function (t) {
  var e = function e(t, r, n, i) {
    var o;return $.each(t, function (t, u) {
      if (u[n]) {
        if (u[r] === i) return o = u[n], !1;o = e(u[n], i);
      }
    }), o;
  },
      r = function r(t, e, n, i) {
    for (var o = 0; o < t.length; o++) {
      if (t[o][e] == i) return t[o][e];if (t[o][n] && r(t[o][n], "id", "types", i)) return [t[o][e], r(t[o][n], "id", "types", i)];
    }
  };return { getSubtree: e, getSubtreePath: r };
}(), namespacer("baltimoreCounty.utility"), baltimoreCounty.utility.numericStringTools = function () {
  "use strict";
  var t = function t(_t2) {
    return (/[\$]/.test(_t2[0]) && _t2.length > 1 ? 1 : 0
    );
  },
      e = function e(_e) {
    var n = t(_e),
        i = _e.slice(n),
        o = r(i);return "number" == typeof o ? o : _e;
  },
      r = function r(t) {
    var e = /^\.{0,1}(\d+[\,\.]{0,1})*\d+\b/,
        r = t.match(e);return r ? parseFloat(r[0].split(",").join("")) : t;
  };return { getIndexOfFirstDigit: t, extractNumbersIfPresent: e, getFirstSetOfNumbersAndRemoveNonDigits: r };
}(), namespacer("baltimoreCounty.utility"), baltimoreCounty.utility.querystringer = function (t) {
  "use strict";
  return { getAsDictionary: function getAsDictionary() {
      if (window.location.search) {
        for (var t = window.location.search.slice(1), e = t.split("&"), r = {}, n = 0; n < e.length; n++) {
          var i = e[n].split("=");r[i[0].toLowerCase()] = 2 === i.length ? i[1] : "";
        }return r;
      }return !1;
    } };
}(), namespacer("baltimoreCounty.utility"), baltimoreCounty.utility.validate = function () {
  "use strict";
  function t(t) {
    return (/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/.test(t)
    );
  }function e(t, e) {
    return r[t](e);
  }var r = { phoneNumber: t };return e;
}();
'use strict';

/* eslint-disable */

namespacer('restaurantWeek');

restaurantWeek.debounce = function (func, wait, immediate) {
  var timeout;
  return function (func, wait, immediate) {
    var context = this,
        args = arguments;
    var later = function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}();
'use strict';

namespacer('restaurantWeek');

restaurantWeek.windowResize = function (debounce) {
	return function (fn) {
		window.addEventListener('resize', debounce(fn, 250));
	};
}(restaurantWeek.debounce);
'use strict';

namespacer('restaurantWeek');

restaurantWeek.internalPages = function ($, debounce) {
	var fbWidgetSelector = '.fb-page';

	var getColumnWidth = function getColumnWidth() {
		return parseFloat($(fbWidgetSelector).closest('[class^="col"]').css('width'));
	};

	var onWindowResize = function onWindowResize() {
		var targetWidth = getColumnWidth();

		updateFacebookPluginStyles(targetWidth);
	};

	var updateFacebookPluginStyles = function updateFacebookPluginStyles(width) {
		if (!isNaN(width) && window.FB) {
			$(fbWidgetSelector).attr('data-width', width);
			FB.XFBML.parse();
		}
	};

	var init = function init() {
		window.addEventListener('resize', function () {
			debounce(function () {
				onWindowResize();
			}, 250);
		});
	};

	return {
		init: init
	};
}(jQuery, restaurantWeek.debounce);
'use strict';

namespacer('restaurantWeek');

restaurantWeek.mobileNav = function ($, onWindowResize) {
	var self = {};
	var activeClass = 'active';
	var disableScrollClass = 'disable-scroll';
	self.isNavVisible = false;

	var init = function init(options) {
		self.options = options || {};
		self.options.mobileNavButtonSelector = self.options.mobileNavButtonSelector || '.mobile-nav-btn';
		self.options.navigationListSelector = self.options.navigationListSelector || '.navigation-list';
		self.options.overlayTargetSelector = self.options.overlayTargetSelector || '.overlay';
		self.options.scrollTargetSelector = self.options.scrollTargetSelector || 'html';
		self.options.pageHeaderSelector = self.options.pageHeaderSelector || '.page-header';
		self.options.heroUnitSelector = self.options.heroUnitSelector || '.hero-unit';

		$(document).on('click', self.options.mobileNavButtonSelector, onMobileNavClick);
	};

	var getCssPropertyAsFloat = function getCssPropertyAsFloat(selector, cssPropertyName) {
		return parseFloat($(selector).css(cssPropertyName).replace('px', ''));
	};

	var getHeroBorderHeight = function getHeroBorderHeight() {
		return getCssPropertyAsFloat(self.options.heroUnitSelector, 'border-top-width');
	};

	var getHeaderHeight = function getHeaderHeight() {
		var pageHeaderContainerHeight = $(self.options.pageHeaderSelector).height();
		var heroBorderHeight = getHeroBorderHeight();

		return pageHeaderContainerHeight + heroBorderHeight;
	};

	var isActive = function isActive() {
		return $(self.options.navigationListSelector).hasClass('active');
	};

	var makeFullScreen = function makeFullScreen() {
		var headerHeight = getHeaderHeight();
		var windowHeight = window.innerHeight;
		var navigationListHeight = windowHeight - headerHeight;
		var headerBottomPosition = getCssPropertyAsFloat(self.options.pageHeaderSelector, 'bottom');
		var newTopPosition = headerBottomPosition - navigationListHeight - getHeroBorderHeight();

		$(self.options.navigationListSelector).css('bottom', newTopPosition + 'px').height(navigationListHeight + 'px');
	};

	var resetNav = function resetNav() {
		$(self.options.navigationListSelector).removeAttr('style');
	};

	var toggleNavIcons = function toggleNavIcons($btn) {
		$btn.find('i').toggleClass('fa-bars').toggleClass('fa-times');
	};

	var toggleNavVisibility = function toggleNavVisibility($navList) {
		$navList.toggleClass('active mobile');
	};

	var togglePageOverlay = function togglePageOverlay() {
		$(self.options.overlayTargetSelector).toggleClass(activeClass);
	};

	var togglePageScroll = function togglePageScroll() {
		$(self.options.scrollTargetSelector).toggleClass(disableScrollClass);
	};

	var toggleNav = function toggleNav() {
		var $btn = $(self.options.mobileNavButtonSelector);
		var $navList = $(self.options.navigationListSelector);

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

	var onMobileNavClick = toggleNav;

	var handleWindowResize = function handleWindowResize() {
		if (window.innerWidth >= 968 && isActive()) {
			toggleNav();
		}
	};

	onWindowResize(handleWindowResize);

	return {
		init: init,
		isActive: isActive,
		toggleNav: toggleNav
	};
}(jQuery, restaurantWeek.windowResize);

// On Document Ready
$(document).ready(function () {
	restaurantWeek.mobileNav.init();
});
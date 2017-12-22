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

namespacer('restaurantWeek');

restaurantWeek.homePage = function ($) {
	var slickOptions = {
		autoplay: true,
		autoplaySpeed: 5000,
		infinite: true,
		prevArrow: '<img src="//baltimorecountymd.gov/sebin/f/m/carousel-arrow-left.png " class="slick-prev" style="display: block;">',
		nextArrow: '<img src="//baltimorecountymd.gov/sebin/v/i/carousel-arrow-right.png" class="slick-next" style="display: block;">'
	};

	var init = function init() {
		$('.hero-carousel').slick(slickOptions);
	};

	return {
		init: init
	};
}(jQuery);

// On Document Ready
$(function () {
	restaurantWeek.homePage.init();
});
'use strict';

namespacer('restaurantWeek');

restaurantWeek.mobileNav = function ($) {
	var self = {};

	var init = function init(options) {
		self.options = options || {};
		self.options.mobileNavButtonSelector = self.options.mobileNavButtonSelector || '.mobile-nav-btn';
		self.options.navigationListSelector = self.options.navigationListSelector || '.navigation-list';

		$(document).on('click', self.options.mobileNavButtonSelector, onMobileNavClick);
	};

	var onMobileNavClick = function onMobileNavClick(clickEvent) {
		var $btn = $(clickEvent.currentTarget);
		var $navList = $(self.options.navigationListSelector);

		$btn.find('i').toggleClass('fa-bars').toggleClass('fa-times');

		$navList.toggleClass('active mobile');
	};

	return {
		init: init
	};
}(jQuery);

// On Document Ready
$(document).ready(function () {
	restaurantWeek.mobileNav.init();
});
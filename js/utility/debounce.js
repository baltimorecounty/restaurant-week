/* eslint-disable */

namespacer('restaurantWeek');

restaurantWeek.debounce = (function(func, wait, immediate) {
    var timeout;
    return function(func, wait, immediate) {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
})();

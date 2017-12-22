/* eslint-disable */
/** Get Restaurant Data from existing site */
(function($) {
  var $restaurants = $(".restaurant-list").find("li");
  var restaurantList = [];

  function getrestaurantData(index) {
    var $restaurant = $($restaurants[index]);
    var $link = $restaurant.find("a:eq(1)");
    var linkDestination = $link.attr("href");
    var title = $link.attr("title");
    var $restaurantImg = $restaurant.find("img");
    var img = $restaurantImg.attr("src");
    var alt = $restaurantImg.attr("alt");
    var name = $restaurant.find("h3").text();
    var phone = $restaurant.find("p:eq(2)").text();
    var address1 = $restaurant.find("p:eq(0)").text();
    var address2 = $restaurant.find("p:eq(1)").text();

    var data = {
      address1: address1,
      address2: address2,
      imageSrc: `//www.baltimorecountyrestaurantweek.com${img}`,
      imageAlt: alt,
      linkToWebsite: linkDestination,
      linkTitle: title,
      name: name,
      phone: phone
    };

    restaurantList.push(data);
  }

  $restaurants.each(getrestaurantData);

  console.log(JSON.stringify(restaurantList));
})();

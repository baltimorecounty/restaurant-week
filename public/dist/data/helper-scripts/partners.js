/* eslint-disable */
/** Get Restaurant Data from existing site */
(function($) {
	var $partners = $('.partners-list').find('li');
	var partnerList = [];
	
	function getPartnerData(index) {
		var $partner = $($partners[index]);
		var $link = $partner.find('a');
		var linkDestination = $link.attr('href');
		var title = $link.attr('title');
		var $partnerImg = $partner.find('img');
		var img = $partnerImg.attr('src');
		var alt = $partnerImg.attr('alt');
		
		var data = {
			imageSrc: `//www.baltimorecountyrestaurantweek.com${img}`,
			imageAlt: alt,
			linkToWebsite: linkDestination,
			linkTitle: title
		};
	
		partnerList.push(data);
	}
	
	$partners.each(getPartnerData);
	
	console.log(JSON.stringify(partnerList));
})(jQuery);

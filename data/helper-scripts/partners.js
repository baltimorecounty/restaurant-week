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
		website: linkDestination,
		title: title,
		imgSrc: `//www.baltimorecountyrestaurantweek.com${img}`,
		alt: alt
	};

	partnerList.push(data);
}

$partners.each(getPartnerData);

console.log(JSON.stringify(partnerList));
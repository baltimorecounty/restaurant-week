var $partners = $('.partners-list').find('li');
var partnerList = [];

function getPartnerData(index) {
	var $partner = $($partners[index]);
	var title = $partner.find('a').attr('title');
	var $partnerImg = $partner.find('img');
	var img = $partnerImg.attr('src');
	var alt = $partnerImg.attr('alt');
	
	var data = {
		title: title,
		imgSrc: img,
		alt: alt
	};

	partnerList.push(data);
}

$partners.each(getPartnerData);

console.log(JSON.stringify(partnerList));
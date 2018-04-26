

const nextArrow = bodymovin.loadAnimation({
	container: $('.jq-nextArrow'),
	renderer: 'svg',
	loop: false,
	autoplay: true,
	path: 'https://github.com/sarahtalbot/finalProject/blob/master/js/json/data-navigationArrow-right.json',
})


const prevArrow = bodymovin.loadAnimation({
	container: $('.jq-prevArrow'),
	renderer: 'svg',
	loop: false,
	autoplay: true,
	path: 'https://github.com/sarahtalbot/finalProject/blob/master/js/json/data-navigationArrow-left.json',
})



nextArrow.goToAndStop (1, false);
prevArrow.goToAndStop (1, false);
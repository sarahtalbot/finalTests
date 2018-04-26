

const nextArrow = bodymovin.loadAnimation({
	container: document.querySelector('.jq-nextArrow'),
	renderer: 'svg',
	loop: false,
	autoplay: true,
	path: 'js/json/data-navigationArrow-left.json',
})


const prevArrow = bodymovin.loadAnimation({
	container: document.querySelector('.jq-prevArrow'),
	renderer: 'svg',
	loop: false,
	autoplay: true,
	path: 'js/json/data-navigationArrow-right.json',
})



nextArrow.goToAndStop (1, false);
prevArrow.goToAndStop (1, false);
'use strict';

let previousScrollTop = 0, previousScrollLeft = 0;

module.exports = (axis = false) => {
	if (axis === 'horizontal') {
		return getHorizontalData();
	} else if (axis === 'vertical') {
		return getVerticalData();
	} else {
		return {
			vertical: getVerticalData(),
			horizontal: getHorizontalData(),
		}
	}
};

function getVerticalData() {
	let direction;
	let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
	let diff = currentScrollTop - previousScrollTop;

	if (diff === 0) {
		direction = 'unchanged';
	} else {
		direction = diff > 0 ? 'down' : 'up';
	}

	previousScrollTop = currentScrollTop;

	return {
		direction: direction,
		position: previousScrollTop,
		speed: Math.abs(diff),
	};
}

function getHorizontalData() {
	let direction;
	let currentScrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
	let diff = currentScrollLeft - previousScrollLeft;

	if (diff === 0) {
		direction = 'unchanged';
	} else {
		direction = diff > 0 ? 'right' : 'left';
	}

	previousScrollLeft = currentScrollLeft;

	return {
		direction: direction,
		position:previousScrollLeft,
		speed: Math.abs(diff),
	};
}
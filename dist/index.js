'use strict';

var previousScrollTop = 0,
    previousScrollLeft = 0;

module.exports = function () {
	var axis = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

	if (axis === 'horizontal') {
		return getHorizontalData();
	} else if (axis === 'vertical') {
		return getVerticalData();
	} else {
		return {
			vertical: getVerticalData(),
			horizontal: getHorizontalData()
		};
	}
};

function getVerticalData() {
	var direction = void 0;
	var currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
	var diff = currentScrollTop - previousScrollTop;

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
		diff: Math.abs(diff)
	};
}

function getHorizontalData() {
	var direction = void 0;
	var currentScrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
	var diff = currentScrollLeft - previousScrollLeft;

	if (diff === 0) {
		direction = 'unchanged';
	} else {
		direction = diff > 0 ? 'right' : 'left';
	}

	previousScrollLeft = currentScrollLeft;

	return {
		direction: direction,
		position: previousScrollLeft,
		speed: Math.abs(diff),
		diff: Math.abs(diff)
	};
}
export const S_isMobile = () => {
	return (typeof window.orientation !== "undefined") ||
		(navigator.userAgent.indexOf('IEMobile') !== -1);
}

export const S_getWidth = () => {
	return (window.innerWidth > 0) ? window.innerWidth : screen.width;
}

export const S_getDeviceScreenRes = () => {
	return {
		x: window.screen.width * window.devicePixelRatio,
		y: window.screen.height * window.devicePixelRatio
	}
}
export const S_getScreenRes = () => {
	return {
		x: screen.width,
		y: screen.height
	}
}
export const S_ifElemInViewport = (element) => {
	let bounds = element.getBoundingClientRect();
	if (
		bounds.top >= 0 &&
		bounds.left >= 0 &&
		bounds.top < (window.innerWidth || document.documentElement.clientWidth) &&
		bounds.bottom >= 0
	) return true;
	else return false;
}

export const S_hasClass = (ele, cls, substr = 0) => {
	if (substr == true) {
		return ele.className.match(new RegExp(cls))
	}
	return ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

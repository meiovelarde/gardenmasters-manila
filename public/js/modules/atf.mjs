import { S_getWidth } from './shared.mjs'
export const M_ATF = {
	init() {
		// Orig move code by Kriszta - https://codepen.io/vajkri/pen/grgQmb
		let lFollowX = 0,
			lFollowY = 0,
			x = 0,
			y = 0,
			friction = 1 / 30,
			width = (window.innerWidth > 0) ? window.innerWidth : screen.width,
			bgMove = 0;

		const ATF_CONTAINER = document.querySelector('.atf');
		const ATF_BACKGROUND = document.querySelector('.atf__background');
		let moveBackground = () => {
			x += (lFollowX - x) * friction;
			y += (lFollowY - y) * friction;

			ATF_BACKGROUND.style.backgroundPositionX = x + 'px';
			ATF_BACKGROUND.style.backgroundPositionY = y + 'px';

			bgMove = window.requestAnimationFrame(moveBackground);
		}

		ATF_CONTAINER.addEventListener('mousemove', (e) => {
			var lMouseX = Math.max(-100, Math.min(100, window.innerWidth / 2 - e.clientX));
			var lMouseY = Math.max(-100, Math.min(100, window.innerHeight / 2 - e.clientY));
			lFollowX = (20 * lMouseX) / 100;
			lFollowY = (10 * lMouseY) / 100;
		});


		let checkWidth = () => {
			width = S_getWidth();
			if (width >= 1000) {
				bgMove = window.requestAnimationFrame(moveBackground);
			} else {
				window.cancelAnimationFrame(bgMove);
			}
		}

		window.onresize = checkWidth;
		window.onload = checkWidth;
		window.addEventListener('sizemodechange', checkWidth);
	}
}

export default M_ATF

import {
	S_ifElemInViewport
} from './shared.mjs';

export const M_ANIMS = {
	init() {
		const scrollables = [
			'.services .section__header_content',
			'.clients  .section__header_content',
			'.contact .section__header_content'
		]

		var animateVisibleScrollable = () => {

			for (let i = 0; i < scrollables.length; i++) {
				let current = document.querySelector(scrollables[i])
				if (S_ifElemInViewport(current) === true)
					current.classList.add('global_item_scroll_visible');
			}
		}

		for (let i = 0; i < scrollables.length; i++) {
			let current = document.querySelector(scrollables[i]);
			current.classList.add('global_item_scroll');
		}
		window.addEventListener('scroll', animateVisibleScrollable);
	}

}
export default M_ANIMS;

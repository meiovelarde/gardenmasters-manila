import {
	S_getScreenRes,
	S_ifElemInViewport,
	S_hasClass
}
from './shared.mjs';

export const M_SERVICES = {
	init() {
		let grid = document.querySelector('.services__grid'),
			gridNav = document.querySelectorAll('.services__grid_nav_item');

		gridNav.forEach((item) => {
			item.addEventListener('click', (e) => {
				let selected = grid.dataset.selected,
					itemId = e.target.closest('.services__grid_nav_item').id.slice(-1);
				if (selected != itemId)
					grid.dataset.selected = itemId
			})
		})

		let populateGrid = () => {
			const SCREEN_RES = S_getScreenRes();
			const BREAKPOINTS = [320, 550, 750, 1000, 1200, 1600];
			const SERVICE_CATEGORIES = ['lscape-svc', 'plant-supply', 'planters']
			const IMAGE_CATEGORIES = ['ban',
				'lrg-1', 'lrg-2', 'lrg-3',
				'sml-1', 'sml-2', 'sml-3',
				'sml-4', 'sml-5', 'sml-6'
			]

			//build photo url string
			const generateImgTags = (resolution) => {
				let tags = {}
				for (let i = 0; i < IMAGE_CATEGORIES.length; i++) {
					let imageCategory = IMAGE_CATEGORIES[i]
					let tag = {}
					for (let j = 0; j < SERVICE_CATEGORIES.length; j++) {
						let serviceCategory = SERVICE_CATEGORIES[j];

						tag[serviceCategory] =
							'<img data-service="' + serviceCategory + '" src="/images/services/' + serviceCategory + '/' +
							resolution + '/' + imageCategory + '.jpg" />'

					}
					tags[imageCategory] = tag
				}
				return tags;
			}

			let selectedBreak = 320;
			for (let i = 0; i < BREAKPOINTS.length; i++) {
				if (SCREEN_RES.x > BREAKPOINTS[i])
					selectedBreak = BREAKPOINTS[i];
			}
			let imgTags = generateImgTags(selectedBreak),
				ban = document.querySelector('.services__grid_item_banner'),
				lrgs = document.querySelectorAll('.services__grid_item_photo_large'),
				smls = document.querySelectorAll('.services__grid_item_photo_small');

			for (let tags in imgTags) {
				let appendHtml = '';
				for (let tag in imgTags[tags]) {
					appendHtml += imgTags[tags][tag]
				}
				switch (tags.substr(0, 3)) {
				case 'ban':
					ban.innerHTML = appendHtml;
					break;

				case 'lrg':
					for (let photo in lrgs) {
						if (lrgs[photo].dataset != undefined)
							if (lrgs[photo].dataset.image == tags)
								lrgs[photo].innerHTML = appendHtml;
					}
					break;

				case 'sml':
					for (let photo in smls) {
						if (smls[photo].dataset != undefined)
							if (smls[photo].dataset.image == tags)
								smls[photo].innerHTML = appendHtml;
					}
					break;
				}
			}
		}

		let animatePhotos = async () => {
			let photosAnimated = false;
			let gridInView = async () => {
				const GRID = document.querySelector('.services__grid')
				let status = S_ifElemInViewport(GRID)
				if (status && photosAnimated === false) {
					await Promise.all(photoPromises)
					GRID.classList.add('global_item_scroll_visible')
					photosAnimated = true;
				}
			}

			let photoPromises = []
			const GRID_PHOTOS = document.querySelectorAll('.services__grid_item img')
			for (let i = 0; i < GRID_PHOTOS.length; i++) {
				photoPromises.push(new Promise(async (resolve, reject) => {
					GRID_PHOTOS[i].onload = async () => {
						let loaded = 'loaded-' + Math.floor(Math.random() * 4).toString()
						let closest = GRID_PHOTOS[i].closest('.services__grid_item_photo')

						if (GRID_PHOTOS[i].complete) {
							if (S_hasClass(closest, 'loaded-', true) == null) {
								closest.classList.add(loaded)
							}
							resolve();
						}
					}
					GRID_PHOTOS[i].onerror = () => {
						reject();
					}
				}))
			}
			await S_hasClass(document.body, 'loaded');
			window.addEventListener('scroll', gridInView);

		}
		populateGrid()
		animatePhotos()
	}
}


export default M_SERVICES

import { S_isMobile } from './shared.mjs';

export let M_CLIENTS = {
  cursor: () => {return document.querySelector('.clients__list_cursor')},
  list: () => {return document.querySelector('.clients__list')},
  activeLi: false,
	init() {
		const cursor = this.cursor();
		const list = this.list();
    // init opening client list item
		let toggleOpen = (li, target) => {
			let mode = open;
			if (target.className != 'clients__list_overlay') {
				if (li.dataset.isOpen == 'false' || li.dataset.isOpen == undefined)
					mode = 'open';
				else mode = 'close';
			} else mode = 'close';

			if (mode == 'open') {
				this.activeLi = li;
				this.activeLi.dataset.isOpen = true;
				this.activeLi.classList.add('clients__list_li_open');
				list.classList.add('clients__list_open');
			} else if (mode == 'close') {
				this.activeLi.dataset.isOpen = false;
				this.activeLi.classList.remove('clients__list_li_open');
				list.classList.remove('clients__list_open');
			}
		}

		list.addEventListener('click', (e) => {
			e.stopPropagation();
			let li = e.target.closest('.clients__list_li');
			toggleOpen(li, e.target);
		}, false);

    //init cursor
		let transform = '';
		const renderCursor = () => {
			computeCursorPos();
			cursor.style.transform = transform;
			requestAnimationFrame(renderCursor);
		}

		let x = window.innerWidth / 2,
			y = window.innerHeight / 2,
			curX = x,
			curY = y;

		let touch = (e) => {
			x = e.originalEvent.touches[0].clientX;
			y = e.originalEvent.touches[0].clientY;
		}

		let mousemove = (e) => {
			x = e.clientX;
			y = e.clientY;
		}
    let setupListeners = () => {
      if (!S_isMobile()){
        window.addEventListener('touchstart', touch);
        window.addEventListener('touchmove', touch);
        window.addEventListener('mousemove', mousemove);
      } else {
        window.removeEventListener('touchstart', touch);
        window.removeEventListener('touchmove', touch);
        window.removeEventListener('mousemove', mousemove);
      }
    }
    setupListeners();
    window.addEventListener('resize', setupListeners)
    window.addEventListener('sizemodechange', setupListeners)
		requestAnimationFrame(renderCursor);

		const computeCursorPos = () => {
			curX += (x - curX) * 0.175;
			curY += (y - curY) * 0.175;
			transform =
				'translate(' +
				curX + 'px, ' +
				curY + 'px)';
		}

    let setMobile = () => {
      if (S_isMobile()) {
        cursor.classList.add('global_display_none')
        list.classList.add('clients__list_mobile')
      }
    }

    setMobile();
		window.onresize = setMobile;
		window.addEventListener('sizemodechange', setMobile);
	}
}
export default M_CLIENTS;

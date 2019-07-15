import { S_isMobile, S_ifElemInViewport } from './shared.mjs';
export const M_NAV = {
	init() {
		//Begin to top
		const buttonToTop = document.querySelector('.button_to-top');
		const toggleTopButtonActive = (isActive) => {
			buttonToTop.dataset.isActive = isActive
		}
		const handleTopButtonClick = () => {
			if(buttonToTop.dataset.isActive){
				window.scrollTo({
					top: 0,
					left: 0,
					behavior: 'smooth'
				})
				toggleTopButtonActive('false')
			}
		}
		const checkTopButtonActive = () => {
			const atf = document.querySelector('.atf__bottom-hedge')
			if(!S_ifElemInViewport(atf))
				toggleTopButtonActive('true')
			else
				toggleTopButtonActive('false')
		}

    const setupTouch = () => {
      if(S_isMobile())
        buttonToTop.dataset.isTouch = 'true'
      else buttonToTop.dataset.isTouch = 'false'
    }

    setupTouch();
		buttonToTop.addEventListener('mousedown', handleTopButtonClick)
		window.addEventListener('scroll', checkTopButtonActive)
    window.addEventListener('resize', setupTouch)
    window.addEventListener('sizemodechange', setupTouch)
    // window.scrollTo(0, 0);
    const SEC_CLIENTS = document.querySelector('section.clients'),
          SEC_SERVICES = document.querySelector('section.services'),
          SEC_CONTACT = document.querySelector('section.contact');

    const BUTTONS = document.querySelectorAll('.nav__button')
    const BOUNDS_Y = {
      'clients': SEC_CLIENTS.getBoundingClientRect().top,
      'services': SEC_SERVICES.getBoundingClientRect().top,
      'contact': SEC_CONTACT.getBoundingClientRect().top
    }

    const handleNavButtonClick = (e) => {
      let target = e.target.closest('.nav__button').dataset.target;

      window.scrollTo({
        top: BOUNDS_Y[target],
        left: 0,
        behavior: 'smooth'
      })
    }

    for(let i = 0; i < BUTTONS.length; i++)
      BUTTONS[i].addEventListener('mousedown', handleNavButtonClick)
  }
}

export default M_NAV;

export const M_NAV = {
	init() {
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

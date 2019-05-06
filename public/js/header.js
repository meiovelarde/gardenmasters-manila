window.onbeforeunload = function() {
  window.scrollTo(0, 0);
}

window.onscroll = hideLogoText;

let logoTextIsClosed = false;

function hideLogoText() {
  let isScrollTopZero = !(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50)
  if (!isScrollTopZero && !logoTextIsClosed) {
    document.querySelector('.logo__text').className = 'logo__text_closed'
    document.querySelector('.nav__logo').className = 'nav__logo_open global_flex_center'
    document.querySelector('.nav__main_container').className = 'nav__main_container_open global_flex_center'
    logoTextIsClosed = true;
  } else if (isScrollTopZero && logoTextIsClosed) {
    document.querySelector('.logo__text_closed').className = 'logo__text'
    document.querySelector('.nav__logo_open').className = 'nav__logo global_flex_center'
    document.querySelector('.nav__main_container_open').className = 'nav__main_container global_flex_center'
    logoTextIsClosed = false;
  }
}

document.querySelector('.nav__menu').onclick = clickMenu;

let isMenuActive = false;

function clickMenu() {
  if (!isMenuActive) {
    document.querySelector('.nav__menu').classList.add('active')
    document.querySelector('.nav__menu_fullscreen').classList.add('active')
    document.querySelector('header.mobile .header__container').classList.add('active')
    document.querySelector('header.mobile .nav__logo').className = 'nav__logo global_display_none'
    isMenuActive = true;
  } else if (isMenuActive) {
    document.querySelector('.nav__menu').classList.remove('active')
    document.querySelector('.nav__menu_fullscreen').classList.remove('active')
    document.querySelector('header.mobile .header__container').classList.remove('active')
    document.querySelector('header.mobile .nav__logo').className = 'nav__logo global_flex_center'
    isMenuActive = false;
  }
}

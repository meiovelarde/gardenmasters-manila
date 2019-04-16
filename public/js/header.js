window.onbeforeunload = function() {
  window.scrollTo(0, 0);
}

window.onscroll = hideLogoText;

let logoTextIsClosed = false;

function hideLogoText() {
  let isScrollTopZero = !(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50)
  if (!isScrollTopZero && !logoTextIsClosed) {
    document.querySelector(".logo__text").className = "logo__text--closed"
    document.querySelector(".nav_logo").className = "nav_logo--open global_flex-center"
    document.querySelector(".nav_main-container").className = "nav_main-container--open global_flex-center"
    logoTextIsClosed = true;
  } else if (isScrollTopZero && logoTextIsClosed) {
    document.querySelector(".logo__text--closed").className = "logo__text"
    document.querySelector(".nav_logo--open").className = "nav_logo global_flex-center"
    document.querySelector(".nav_main-container--open").className = "nav_main-container global_flex-center"
    logoTextIsClosed = false;
  }
}

document.querySelector(".nav_menu").onclick = clickMenu;

let isMenuActive = false;

function clickMenu() {
  if (!isMenuActive) {
    document.querySelector(".nav_menu").classList.add('active')
    document.querySelector(".nav_menu-fullscreen").classList.add('active')
    document.querySelector("header.mobile .header_main").classList.add('active')
    document.querySelector("header.mobile .nav_logo").className = "nav_logo global_display-none"
    isMenuActive = true;
  } else if (isMenuActive) {
    document.querySelector(".nav_menu").classList.remove('active')
    document.querySelector(".nav_menu-fullscreen").classList.remove('active')
    document.querySelector("header.mobile .header_main").classList.remove('active')
    document.querySelector("header.mobile .nav_logo").className = "nav_logo global_flex-center"
    isMenuActive = false;
  }
}

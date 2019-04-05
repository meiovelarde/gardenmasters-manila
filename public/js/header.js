window.onbeforeunload = function() {
  window.scrollTo(0, 0);
}

window.onscroll = hideLogoText;

let logoTextIsClosed = false;

function hideLogoText() {
  let isScrollTopZero = !(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50)
  if (!isScrollTopZero && !logoTextIsClosed) {
    document.querySelector(".logo_text").className = "logo_text--closed"
    document.querySelector(".nav_logo").className = "nav_logo--open global_flex-center"
    document.querySelector(".nav_main-container").className = "nav_main-container--open global_flex-center"
    logoTextIsClosed = true;
  } else if (isScrollTopZero && logoTextIsClosed) {
    document.querySelector(".logo_text--closed").className = "logo_text"
    document.querySelector(".nav_logo--open").className = "nav_logo global_flex-center"
    document.querySelector(".nav_main-container--open").className = "nav_main-container global_flex-center"
    logoTextIsClosed = false;
  }
}

document.querySelector(".nav_menu, .nav_menu--active").onclick = clickMenu;

let isMenuActive = false;

function clickMenu() {
  if (!isMenuActive) {
    document.querySelector(".nav_menu").className = "nav_menu--active"
    document.querySelector(".nav_menu-fullscreen").className = "nav_menu-fullscreen--active"
    document.querySelector("header.mobile .nav_logo").className = "nav_logo global_display-none"
    isMenuActive = true;
  } else if (isMenuActive) {
    document.querySelector(".nav_menu--active").className = "nav_menu"
    document.querySelector(".nav_menu-fullscreen--active").className = "nav_menu-fullscreen"
    document.querySelector("header.mobile .nav_logo").className = "nav_logo global_flex-center"
    isMenuActive = false;
  }
}

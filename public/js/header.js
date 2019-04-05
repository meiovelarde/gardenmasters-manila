window.onscroll = hideLogoText;

let logoTextIsClosed = false;
function hideLogoText(){
  let isScrollTopZero = !(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50)
  if (!isScrollTopZero && !logoTextIsClosed) {
    document.querySelector(".logo_text").className = "logo_text--closed"
    logoTextIsClosed = true;
  } else if(isScrollTopZero) {
    document.querySelector(".logo_text--closed").className = "logo_text"
    logoTextIsClosed = false;
  }
}

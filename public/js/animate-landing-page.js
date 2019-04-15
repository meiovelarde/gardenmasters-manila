let animateLanding = () => {
  var elements = document.querySelector(".section_landing").getElementsByTagName("div")
  document.body.style.opacity = 1;
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.opacity = 1;
  }
}

document.addEventListener('DOMContentLoaded', animateLanding, false);
window.addEventListener('load', animateLanding, false)

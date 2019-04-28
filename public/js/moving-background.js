/*
Orig move code by Kriszta - https://codepen.io/vajkri/pen/grgQmb
*/
let lFollowX = 0,
  lFollowY = 0,
  x = 0,
  y = 0,
  friction = 1 / 30,
  width = (window.innerWidth > 0) ? window.innerWidth : screen.width,
  bgMove = 0;

const container = document.querySelector(".atf");
const el = document.querySelector(".atf__background");
let moveBackground = () => {
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;

  el.style.backgroundPositionX = x + "px";
  el.style.backgroundPositionY = y + "px";

  bgMove = window.requestAnimationFrame(moveBackground);
}

container.addEventListener("mousemove", (e) => {
  var lMouseX = Math.max(-100, Math.min(100, window.innerWidth / 2 - e.clientX));
  var lMouseY = Math.max(-100, Math.min(100, window.innerHeight / 2 - e.clientY));
  lFollowX = (20 * lMouseX) / 100;
  lFollowY = (10 * lMouseY) / 100;
});


let checkWidth = () => {
  width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  if (width >= 1000){
    bgMove = window.requestAnimationFrame(moveBackground);
  }
  else {
    window.cancelAnimationFrame(bgMove);
  }
}

window.onresize = checkWidth
window.onload = checkWidth
window.addEventListener("sizemodechange", checkWidth)

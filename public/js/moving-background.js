/*
Orig move code by Kriszta - https://codepen.io/vajkri/pen/grgQmb
*/
var lFollowX = 0,
  lFollowY = 0,
  x = 0,
  y = 0,
  friction = 1 / 30,
  width = 0;
const el = document.querySelector(".atf");
let moveBackground = () => {
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;


  el.style.backgroundPositionX = x + "px";
  el.style.backgroundPositionY = y + "px";

  width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  window.requestAnimationFrame(moveBackground);
}

el.addEventListener("mousemove", (e) => {
  var lMouseX = Math.max(-100, Math.min(100, window.innerWidth / 2 - e.clientX));
  var lMouseY = Math.max(-100, Math.min(100, window.innerHeight / 2 - e.clientY));
  lFollowX = (20 * lMouseX) / 100;
  lFollowY = (10 * lMouseY) / 100;

});
if (width > 768)
  moveBackground();
else {
  el.style.backgroundPositionX = null
  el.style.backgroundPositionY = null
}

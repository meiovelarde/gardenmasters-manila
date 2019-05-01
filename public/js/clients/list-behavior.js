const cursor = document.querySelector(".clients__list_cursor")
const list = document.querySelector(".clients__list");

let activeLi = false;
let toggleOpen = (li, target) => {
  let mode = open;
  if (target.className != 'clients__list_overlay') {
    if (li.dataset.isOpen == 'false' || li.dataset.isOpen == undefined)
      mode = 'open';
    else mode = 'close';
  } else mode = 'close';

  if (mode == 'open') {
    activeLi = li;
    activeLi.dataset.isOpen = true;
    activeLi.classList.add('clients__list_li_open');
    list.classList.add('clients__list_open');
  } else if (mode == 'close') {
    activeLi.dataset.isOpen = false;
    activeLi.classList.remove('clients__list_li_open');
    list.classList.remove('clients__list_open');
  }
}

list.addEventListener('click', (e) => {
  e.stopPropagation();
  let li = e.target.closest(".clients__list_li");
  toggleOpen(li, e.target);
}, false);

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

window.addEventListener('touchstart', touch);
window.addEventListener('touchmove', touch);
window.addEventListener('mousemove', mousemove);
requestAnimationFrame(renderCursor);

const computeCursorPos = () => {
  curX += (x - curX) * 0.175;
  curY += (y - curY) * 0.175;
  transform =
    "translate(" +
    curX + "px, " +
    curY + "px)";
}

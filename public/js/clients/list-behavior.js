const cursor = document.querySelector('.clients__list_cursor')
const list = document.querySelector('.clients__list');

let isMobile = () => {
    return (typeof window.orientation !== "undefined") ||
      (navigator.userAgent.indexOf('IEMobile') !== -1);
};

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
  let li = e.target.closest('.clients__list_li');
  toggleOpen(li, e.target);
}, false);

let transform = '';
const renderCursor = () => {
  computeCursorPos();
  cursor.style.transform = transform;
  requestAnimationFrame(renderCursor);
}

let lix = window.innerWidth / 2,
  liy = window.innerHeight / 2,
  curX = lix,
  curY = liy;

let touch = (e) => {
  lix = e.originalEvent.touches[0].clientX;
  liy = e.originalEvent.touches[0].clientY;
}

let mousemove = (e) => {
  lix = e.clientX;
  liy = e.clientY;
}

window.addEventListener('touchstart', touch);
window.addEventListener('touchmove', touch);
window.addEventListener('mousemove', mousemove);
requestAnimationFrame(renderCursor);

if(isMobile()){
  cursor.classList.add('global_display_none')
  list.classList.add('clients__list_mobile')
}

const computeCursorPos = () => {
  curX += (lix - curX) * 0.175;
  curY += (liy - curY) * 0.175;
  transform =
    'translate(' +
    curX + 'px, ' +
    curY + 'px)';
}

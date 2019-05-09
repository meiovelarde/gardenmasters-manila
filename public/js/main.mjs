import M_CLIENTS from './modules/clients.mjs';
import M_ATF from './modules/atf.mjs';
import M_HEADER from './modules/header.mjs';
const main = {
  init(){
    const forceScrollPositionTop = () => {
      window.onbeforeunload = function() {
        window.scrollTo(0, 0);
      }
    }
    const initModules = () => {
      M_ATF.init();
      M_CLIENTS.init();
      M_HEADER.init();
    }
    window.addEventListener('load', () => {
      document.body.classList.add('loaded');
      initModules();
      forceScrollPositionTop();
    }, false);
  }
}

main.init();

import M_ATF from './modules/atf.mjs';
import M_CLIENTS from './modules/clients.mjs';
import M_HEADER from './modules/header.mjs';
import M_SERVICES from './modules/services.mjs';
import M_ANIMS from './modules/animations.mjs';

const main = {
  init(){
    const forceScrollPositionTop = () => {
      window.onbeforeunload = function() {
        window.scrollTo(0, 0);
      }
    }

      const disableMiddleMouseScroll = () => {
        document.body.onmousedown =
          (e) => { if (e.button === 1) return false;
          }
      }
    const initModules = () => {
      M_SERVICES.init();
      M_ATF.init();
      M_CLIENTS.init();
      M_HEADER.init();
      M_ANIMS.init();
    }
    window.addEventListener('load', () => {
      document.body.classList.add('loaded');
      let loader = document.querySelector('.loader')
      loader.classList.add('loaded')
      initModules();
      forceScrollPositionTop();
      disableMiddleMouseScroll();
    }, false);
  }
}

main.init();

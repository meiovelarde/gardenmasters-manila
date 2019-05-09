export const S_isMobile = () => {
  return (typeof window.orientation !== "undefined") ||
    (navigator.userAgent.indexOf('IEMobile') !== -1);
}

export const S_getWidth = () => {
  return (window.innerWidth > 0) ? window.innerWidth : screen.width;
}

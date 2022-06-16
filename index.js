/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable no-undef */
window.onload = () => {
  const myRainbow = chrome.extension.getURL('/RainbowSinebow22px50msLtoR.gif');
  const css = document.createElement('style');
  css.appendChild(document.createTextNode(`
      html {
      border: 20px solid;
      border-image-source: url(${myRainbow});
      z-index: 999;
      position: absolute;
      scroll-padding-bottom: 80px;
      bottom: 0;
      top: 0;
      left: 0;
      right: 0;
      border-image-width: 20px;
      border-image-slice: 10%;
      border-image-repeat: stretch, round;
      }

      .c93Gbe{
        positon: relative;
        top: -20px;
      }
      `));
  document.getElementsByTagName('head')[0].appendChild(css);
  console.log('Hello World!!');
};

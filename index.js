/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable no-undef */
window.onload = () => {
  const myRainbow = chrome.extension.getURL('/RainbowSinebow22px50msLtoR.gif');
  const css = document.createElement('style');
  const html = document.querySelector('html');
  const border = document.createElement('div');
  border.classList.add('border-frame');
  html.prepend(border);
  css.appendChild(
    document.createTextNode(`
      .border-frame {
      position: fixed;
      pointer-events: none;
      border: 20px solid;
      border-image-source: url(${myRainbow});
      z-index: 99999;
      bottom: 0vh;
      top: 0vh;
      left: 0;
      right: 0;
      border-image-width: 20px;
      border-image-slice: 10%;
      border-image-repeat: stretch, round;
    }
      `)
  );
  document.getElementsByTagName('head')[0].appendChild(css);
  console.log('Hello World!!');
};

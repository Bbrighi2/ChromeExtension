window.onload = function () {
  const css = document.createElement('style');
  css.appendChild(
    document.createTextNode(
      `
      html {
      border: 20px solid;
      border-image-source: url('./RainbowSinebow22px50msLtoR.gif');
      position: absolute;
      bottom: 0%;
      top: 0%;
      left: 0%;
      right: 0%;
      border-image-width: 20px;
      border-image-slice: 10%;
      border-image-repeat: stretch, round;    
      }
      `
    )
  );
  document.getElementsByTagName('head')[0].appendChild(css); // Specifies where to place the css
};

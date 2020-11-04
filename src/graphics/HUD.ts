export class HUD extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const info = document.createElement('div');
    info.setAttribute('class', 'info');

    info.textContent = `
      Move with WSAD
      Use Mouse to look around
      Press Space to fly
      Press C to descend
      Press ESC to release Mouse
    `;

    const style = document.createElement('style');

    style.textContent = `
      .info {
        font-family: sans-serif;
        position: absolute;
        top: 0;
        left: 0;
        color: white;
        width: 100%;
        font-size: 18px;
        z-index: 1;
        display: block;
        white-space: pre;
        line-height: 1.5;
      }
    `;

    shadow.appendChild(info);
    shadow.appendChild(style);
  }
}

customElements.define('hud-element', HUD);

import * as THREE from 'three';
import palette from '../palette';

export class Renderer extends THREE.WebGLRenderer {
  constructor() {
    super({ antialias: true });

    this.setSize(window.innerWidth, window.innerHeight);
    this.setClearColor(palette.gray[100]);
    this.shadowMap.enabled = true;

    this.domElement.onclick = () => {
      this.domElement.requestPointerLock();
    };

    this.domElement.style.display = 'block';
    document.body.appendChild(this.domElement);
  }
}

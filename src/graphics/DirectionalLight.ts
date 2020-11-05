import * as THREE from 'three';
import palette from '../palette';

export class DirectionalLight extends THREE.DirectionalLight {
  constructor() {
    super(palette.gray[100], 0.1);
    this.position.set(-40, 40, 40);
    this.castShadow = true;

    this.shadow.camera.left = -20;
    this.shadow.camera.right = 20;
    this.shadow.camera.top = 20;
    this.shadow.camera.bottom = -20;
    this.shadow.camera.near = 1;
    this.shadow.camera.far = 100;

    this.shadow.mapSize.width = 2048;
    this.shadow.mapSize.height = 2048;
  }
}

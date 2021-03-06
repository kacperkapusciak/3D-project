import * as THREE from 'three';
import { Box } from '../geometry';
import palette from '../palette';

export class Ground extends THREE.Object3D {
  constructor() {
    super();
    const ground = new Box(24, 24, 0.4, palette.green[500], 0, -0.2, 0);
    ground.rotation.x -= Math.PI / 2;

    this.castShadow = true;
    this.receiveShadow = true;

    return ground;
  }
}

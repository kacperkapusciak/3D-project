import * as THREE from 'three';
import { Box } from '../geometry';
import palette from '../palette';

export class Path extends THREE.Object3D {
  constructor() {
    super();
    const path = new Box(24, 3.6, 0.05, palette.yellow[500], 0, 0.025, 0);
    path.rotation.x -= Math.PI / 2;

    this.castShadow = true;
    this.receiveShadow = true;

    return path;
  }
}

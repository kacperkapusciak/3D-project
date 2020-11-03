import * as THREE from 'three';
import { Box } from '../geometry';
import palette from '../palette';

export class Ground extends THREE.Object3D {
  constructor() {
    super();
    const ground = new Box(32, 32, 0.4, palette.orange[500], 0, 0.2, 0);
    ground.rotation.x -= Math.PI / 2;

    return ground;
  }
}

import * as THREE from 'three';
import palette from '../palette';
import { Sphere } from '../geometry';

export class Bush extends THREE.Object3D {
  constructor(x: number = 0, z: number = 0) {
    super();

    const big = new Sphere(1.1, palette.green[500], x, 0.75, z);
    const small = new Sphere(1, palette.green[500], x + 1.2, 0.3, z);
    small.rotateY(Math.PI / 4);

    this.add(big);
    this.add(small);

    this.castShadow = true;
    this.receiveShadow = true;
  }
}

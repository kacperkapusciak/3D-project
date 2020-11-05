import * as THREE from 'three';
import palette from '../palette';
import { Sphere } from '../geometry';

export class BigBush extends THREE.Object3D {
  constructor(x: number = 0, z: number = 0) {
    super();

    const big = new Sphere(1.4, palette.green[500], x, 0.7, z);
    const mid = new Sphere(1.1, palette.green[500], x + 1, 0.4, z + 0.6);
    const small = new Sphere(0.8, palette.green[500], x - 0.5, 0.4, z + 1.4);

    mid.rotateY(Math.PI / 5);
    small.rotateY(Math.PI / 2);

    this.add(big);
    this.add(mid);
    this.add(small);

    const berry1 = new Sphere(0.15, palette.purple[500], x - 0.1, 1.75, z + 0.5, 1);
    const berry2 = new Sphere(0.15, palette.purple[500], x + 0.7, 1.5, z - 0.5, 1);
    const berry3 = new Sphere(0.15, palette.purple[500], x + 2, 0.5, z + 0.6, 1);
    const berry4 = new Sphere(0.15, palette.purple[500], x + 1, 0.8, z + 1.4, 1);
    const berry5 = new Sphere(0.15, palette.purple[500], x - 0.6, 0.6, z + 2, 1);
    const berry6 = new Sphere(0.15, palette.purple[500], x - 0.9, 1.2, z - 0.6, 1);

    this.add(berry1);
    this.add(berry2);
    this.add(berry3);
    this.add(berry4);
    this.add(berry5);
    this.add(berry6);

    this.castShadow = true;
    this.receiveShadow = true;
  }
}

import * as THREE from 'three';
import palette from '../palette';
import { Cylinder } from '../geometry';

export enum MushroomType {
  brown = palette.brown[200],
  red = palette.red[700],
}

export class Mushroom extends THREE.Object3D {
  constructor(x: number = 0, z: number = 0, color: MushroomType = MushroomType.brown) {
    super();

    const trunkBot = new Cylinder(0.05, 0.1, 0.15, 8, palette.gray[200], x, 0.1, z);
    const trunkTop = new Cylinder(0.04, 0.05, 0.25, 8, palette.gray[200], x, 0.3, z);

    this.add(trunkBot);
    this.add(trunkTop);

    const hat = new Cylinder(0.1, 0.3, 0.12, 8, color, x, 0.49, z);
    this.add(hat);

    this.castShadow = true;
    this.receiveShadow = true;
  }
}

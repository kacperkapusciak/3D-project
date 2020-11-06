import * as THREE from 'three';
import palette from '../palette';
import { Sphere, Cylinder } from '../geometry';

export class Oak extends THREE.Object3D {
  constructor(x: number = 0, z: number = 0) {
    super();

    // trunk
    const trunkBot = new Cylinder(1, 1.4, 2, 8, palette.brown[500], x, 1, z);
    const trunkTop = new Cylinder(0.8, 1, 4, 8, palette.brown[500], x, 4, z);

    this.add(trunkBot);
    this.add(trunkTop);

    const leaves1 = new Sphere(3.2, palette.yellow[500], x, 8, z - 1.4);
    const leaves2 = new Sphere(2.8, palette.orange[500], x + 1, 7.8, z + 0.5);
    const leaves3 = new Sphere(2.7, palette.yellow[700], x - 1, 7.6, z + 1.5);
    const leaves4 = new Sphere(1.5, palette.orange[700], x + 0.5, 6.8, z + 2.5);
    const leaves5 = new Sphere(2.5, palette.red[500], x - 1.5, 9, z - 0.3);

    leaves2.rotateY(Math.PI / 5);
    leaves3.rotateY(Math.PI / 2);
    leaves4.rotateY(Math.PI / 7);

    this.add(leaves1);
    this.add(leaves2);
    this.add(leaves3);
    this.add(leaves4);
    this.add(leaves5);

    this.castShadow = true;
    this.receiveShadow = true;
  }
}

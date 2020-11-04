import * as THREE from 'three';
import palette from '../palette';
import { Cylinder } from '../geometry';

export class Pine extends THREE.Object3D {
  constructor(x: number = 0, z: number = 0, scale: number = 1) {
    super();

    // trunk
    const trunkBot = new Cylinder(0.5, 0.75, 0.8, 8, palette.brown[500], x, 0.4, z);
    const trunkTop = new Cylinder(0.5, 0.5, 0.8, 8, palette.brown[500], x, 1.2, z);

    this.add(trunkBot);
    this.add(trunkTop);

    // leaves
    const leavesBot = new Cylinder(1, 4, 2, 8, palette.green[900], x, 2.2, z);
    const leavesMid = new Cylinder(0.6, 3.2, 1.8, 8, palette.green[900], x, 3.9, z);
    const leavesTop = new Cylinder(0.2, 1.8, 1.4, 8, palette.green[900], x, 5.4, z);
    this.add(leavesBot);
    this.add(leavesMid);
    this.add(leavesTop);

    this.scale.set(scale, scale, scale);

    this.castShadow = true;
    this.receiveShadow = true;
  }
}

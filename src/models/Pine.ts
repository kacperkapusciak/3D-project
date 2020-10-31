import * as THREE from 'three';
import palette from '../palette';
import { Cylinder } from '../geometry';

export class Pine extends THREE.Object3D {
  constructor() {
    super();

    // trunk
    const trunkBot = new Cylinder(0.5, 0.75, 0.8, 8, palette.brown[500], 0, 0.4, 0);
    const trunkTop = new Cylinder(0.5, 0.5, 0.8, 8, palette.brown[500], 0, 1.2, 0);

    this.add(trunkBot);
    this.add(trunkTop);

    // leaves
    const leavesBot = new Cylinder(1, 4, 2, 8, palette.green[900], 0, 2.2, 0);
    const leavesMid = new Cylinder(0.6, 3.2, 1.8, 8, palette.green[900], 0, 3.9, 0);
    const leavesTop = new Cylinder(0.2, 1.8, 1.4, 8, palette.green[900], 0, 5.4, 0);
    this.add(leavesBot);
    this.add(leavesMid);
    this.add(leavesTop);

    this.castShadow = true;
    this.receiveShadow = true;
  }
}

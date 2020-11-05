import * as THREE from 'three';
import { Cylinder } from '../geometry';
import palette from '../palette';

export class StreetLamp extends THREE.Object3D {
  constructor(x: number = 0, z: number = 0) {
    super();
    const segment = 0.96;

    const base = new Cylinder(0.24, 0.24, segment, 8, palette.gray[700], x, segment / 2, z);
    const funnel = new Cylinder(0.08, 0.24, segment / 2, 8, palette.gray[700], x, 1.25 * segment, z);
    const mid = new Cylinder(0.08, 0.08, segment * 4, 8, palette.gray[700], x, 3.5 * segment, z);
    const head = new Cylinder(0.32, 0.16, 0.64, 8, palette.yellow[500], x, 5.75 * segment, z, true);
    const hat = new Cylinder(0.08, 0.48, 0.32, 8, palette.gray[700], x, 6.25 * segment, z);

    this.add(base);
    this.add(funnel);
    this.add(mid);
    this.add(head);
    this.add(hat);

    const light = new THREE.PointLight(palette.yellow[500], 0.15, 50);
    light.position.set(x, 5.75 * segment, z);
    this.add(light);

    this.castShadow = true;
    this.receiveShadow = true;
  }
}

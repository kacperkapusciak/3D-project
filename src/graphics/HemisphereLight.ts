import * as THREE from 'three';
import palette from '../palette';

export class HemisphereLight extends THREE.HemisphereLight {
  constructor() {
    super(palette.gray[700], palette.green[500], 0.4);
    this.position.set(0, 200, 0);
  }
}

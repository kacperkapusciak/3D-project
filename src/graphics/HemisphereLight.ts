import * as THREE from 'three';
import palette from '../palette';

export class HemisphereLight extends THREE.HemisphereLight {
  constructor() {
    super(palette.gray[100], palette.orange[500], 0.7);
    this.position.set(0, 200, 0);
  }
}

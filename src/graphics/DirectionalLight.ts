import * as THREE from 'three';
import palette from '../palette';

export class DirectionalLight extends THREE.DirectionalLight {
  constructor(x: number, y: number, z: number, intensity: number) {
    super(palette.gray[100], intensity);
    this.position.set(x, y, z);
    this.castShadow = true;
  }
}

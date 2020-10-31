import * as THREE from 'three';
import palette from '../palette';

export class DirectionalLight extends THREE.DirectionalLight {
  constructor(x, z, intensity) {
    super(palette.gray[100], intensity);
    this.position.set(x, 30, z);
    this.castShadow = true;
  }
}

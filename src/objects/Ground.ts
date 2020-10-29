import * as THREE from 'three';
import palette from '../palette';

export class Ground extends THREE.Object3D {
  constructor() {
    super();
    const geometry = new THREE.PlaneGeometry(10, 10);
    const material = new THREE.MeshBasicMaterial({ color: palette.green.light });
    const ground = new THREE.Mesh(geometry, material);
    ground.castShadow = true;
    ground.receiveShadow = true;

    ground.rotation.x -= Math.PI / 2;

    return ground;
  }
}

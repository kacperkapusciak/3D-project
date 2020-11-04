import * as THREE from 'three';
import palette from '../palette';

export class Moon extends THREE.Object3D {
  constructor() {
    super();
    const geometry = new THREE.CircleGeometry(40, 32);
    const material = new THREE.MeshStandardMaterial({
      color: palette.gray[400],
      flatShading: true,
      emissive: palette.gray[400],
      emissiveIntensity: 100000000,
    });
    const moon = new THREE.Mesh(geometry, material);
    moon.rotateY(Math.PI / 2);
    moon.rotateX(Math.PI / 4);
    moon.position.set(-200, 150, 180);
    return moon;
  }
}

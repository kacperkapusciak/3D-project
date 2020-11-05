import * as THREE from 'three';

export class Sphere extends THREE.Object3D {
  constructor(radius: number, color: number, x: number, y: number, z: number, detail: number = 0) {
    super();
    const geometry = new THREE.IcosahedronGeometry(radius, detail);
    const material = new THREE.MeshStandardMaterial({ color, flatShading: true });
    const sphere = new THREE.Mesh(geometry, material);
    sphere.castShadow = true;
    sphere.receiveShadow = true;
    sphere.position.set(x, y, z);

    return sphere;
  }
}

import * as THREE from 'three';

export class Box extends THREE.Object3D {
  constructor(
    width: number,
    height: number,
    depth: number,
    color: number,
    x: number,
    y: number,
    z: number,
    castShadow: boolean = true
  ) {
    super();
    const geometry = new THREE.BoxGeometry(width, height, depth);
    const material = new THREE.MeshStandardMaterial({ color, flatShading: true });
    const box = new THREE.Mesh(geometry, material);
    box.castShadow = castShadow;
    box.receiveShadow = true;
    box.position.set(x, y, z);

    return box;
  }
}

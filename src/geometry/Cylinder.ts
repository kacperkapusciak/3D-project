import * as THREE from 'three';

export class Cylinder extends THREE.Object3D {
  constructor(
    radiusTop: number,
    radiusBottom: number,
    height: number,
    segments: number,
    color: number,
    x: number,
    y: number,
    z: number
  ) {
    super();
    const geometry = new THREE.CylinderGeometry(radiusTop, radiusBottom, height, segments);
    const material = new THREE.MeshStandardMaterial({ color, flatShading: true });
    const cylinder = new THREE.Mesh(geometry, material);
    cylinder.castShadow = true;
    cylinder.receiveShadow = true;
    cylinder.position.set(x, y, z);

    return cylinder;
  }
}

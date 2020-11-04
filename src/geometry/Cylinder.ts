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
    z: number,
    isEmissive?: boolean
  ) {
    super();
    const geometry = new THREE.CylinderGeometry(radiusTop, radiusBottom, height, segments);
    const material = new THREE.MeshStandardMaterial({
      color,
      flatShading: true,
      emissive: isEmissive ? color : 0x000,
      emissiveIntensity: 1000,
    });
    const cylinder = new THREE.Mesh(geometry, material);
    cylinder.castShadow = true;
    cylinder.receiveShadow = true;
    cylinder.position.set(x, y, z);

    return cylinder;
  }
}

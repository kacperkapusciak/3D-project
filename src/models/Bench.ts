import * as THREE from 'three';
import palette from '../palette';
import { Box } from '../geometry';

export class Bench extends THREE.Object3D {
  constructor(x: number = 0, z: number = 0) {
    super();

    const legWidth = 0.15;
    const benchColor = palette.brown[500];

    const leftShortLeg = new Box(legWidth, 0.7, legWidth, benchColor, 1 + x, 0.35, -0.6 + z);
    const rightShortLeg = new Box(legWidth, 0.7, legWidth, benchColor, -1 + x, 0.35, -0.6 + z);
    const leftLongLeg = new Box(legWidth, 1.4, legWidth, benchColor, 1 + x, 0.7, -1.3 + z);
    const rightLongLeg = new Box(legWidth, 1.4, legWidth, benchColor, -1 + x, 0.7, -1.3 + z);

    this.add(leftShortLeg);
    this.add(rightShortLeg);
    this.add(leftLongLeg);
    this.add(rightLongLeg);

    const plankDepth = 0.4;
    const plankHeight = 0.06;

    const sitFrontPlank = new Box(2.15, plankHeight, plankDepth, benchColor, x, 0.7, -0.7 + z);
    const sitBackPlank = new Box(2.15, plankHeight, plankDepth, benchColor, x, 0.7, -1.15 + z);

    this.add(sitFrontPlank);
    this.add(sitBackPlank);

    const restPlank = new Box(2.15, plankDepth, plankHeight, benchColor, x, 1.2, -1.2 + z);
    this.add(restPlank);

    const leftSupport = new Box(legWidth / 2, legWidth / 2, 0.7, benchColor, -1 + x, 0.64, -1 + z);
    const rightSupport = new Box(legWidth / 2, legWidth / 2, 0.7, benchColor, 1 + x, 0.64, -1 + z);
    this.add(leftSupport);
    this.add(rightSupport);

    this.castShadow = true;
    this.receiveShadow = true;
  }
}

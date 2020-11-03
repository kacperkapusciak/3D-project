import * as THREE from 'three';
import { DirectionalLight, HemisphereLight } from '.';
import { Ground, Pine } from '../models';

export class Scene extends THREE.Scene {
  constructor() {
    super();
    this.add(new Ground());
    this.add(new Pine());

    this.add(new HemisphereLight());

    // three point light setup
    this.add(new DirectionalLight(40, 75, 0.5));
    this.add(new DirectionalLight(-40, -50, 0.08));
    this.add(new DirectionalLight(40, -70, 0.04));
  }
}

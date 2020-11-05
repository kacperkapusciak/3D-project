import * as THREE from 'three';
import { DirectionalLight, HemisphereLight } from '.';
import { Ground, Pine, Path, StreetLamp, Bench, Moon } from '../models';

export class Scene extends THREE.Scene {
  constructor() {
    super();

    this.add(new Ground());
    this.add(new Path());

    this.add(new Bench(0, -1.5));

    this.add(new StreetLamp(8, -3.2));

    this.add(new StreetLamp(-8, -3.2));

    this.add(new Pine(-4, 6));
    this.add(new Pine(15, 14, 0.6));

    this.add(new Moon());
    this.add(new DirectionalLight());

    this.add(new HemisphereLight());
  }
}

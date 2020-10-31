import * as THREE from 'three';
import { Ground, Pine } from './models';
import { Player, Renderer, HemisphereLight, DirectionalLight } from './graphics';

document.body.style.margin = '0';

const scene = new THREE.Scene();
const player = new Player();
const renderer = new Renderer();

scene.add(new Ground());
scene.add(new Pine());

scene.add(new HemisphereLight());

// three point light setup
scene.add(new DirectionalLight(40, 75, 0.5));
scene.add(new DirectionalLight(-40, -50, 0.08));
scene.add(new DirectionalLight(40, -70, 0.04));

const animate = () => {
  requestAnimationFrame(animate);
  renderer.render(scene, player);
};

animate();

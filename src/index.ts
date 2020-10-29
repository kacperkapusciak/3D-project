import * as THREE from 'three';
import { Ground, Player, Renderer } from './objects';

document.body.style.margin = '0';

const scene = new THREE.Scene();
const player = new Player();
const renderer = new Renderer();

scene.add(new Ground());

const animate = () => {
  requestAnimationFrame(animate);
  renderer.render(scene, player);
};

animate();

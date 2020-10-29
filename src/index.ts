import * as THREE from 'three';
import './index.css';
import { Ground, Player } from './objects';

document.body.classList.add('body');

//scene and camera setup
const scene = new THREE.Scene();
const camera = new Player();

// rendered setup
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.domElement.classList.add('renderer');
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor('#e5e5e5');

document.body.appendChild(renderer.domElement);

scene.add(new Ground());

camera.position.z = 5;

const animate = () => {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
};

animate();

import { Player, Renderer, Scene } from './graphics';

document.body.style.margin = '0';

const scene = new Scene();
const player = new Player();
const renderer = new Renderer();

const animate = () => {
  requestAnimationFrame(animate);
  renderer.render(scene, player);
};

animate();

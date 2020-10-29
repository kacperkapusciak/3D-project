import * as THREE from 'three';

export class Player extends THREE.PerspectiveCamera {
  constructor() {
    super(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.register();

    this.position.set(0, this.height, 0);
    this.rotation.order = 'YXZ';
  }

  private height = 1.8;
  private speed = 0.2;

  private register = () => {
    document.addEventListener('keydown', (event) => {
      this.movePlayer(event);
    });

    document.addEventListener('pointerlockchange', this.lockMouse, false);
  };

  private movePlayer = (event: KeyboardEvent) => {
    switch (event.code) {
      case 'KeyW':
        this.position.x += Math.sin(-this.rotation.y) * this.speed;
        this.position.z += -Math.cos(this.rotation.y) * this.speed;
        break;
      case 'KeyS':
        this.position.x -= Math.sin(-this.rotation.y) * this.speed;
        this.position.z -= -Math.cos(this.rotation.y) * this.speed;
        break;
      case 'KeyA':
        this.position.x += Math.sin(this.rotation.y - Math.PI / 2) * this.speed;
        this.position.z += -Math.cos(this.rotation.y + Math.PI / 2) * this.speed;
        break;
      case 'KeyD':
        this.position.x += Math.sin(this.rotation.y + Math.PI / 2) * this.speed;
        this.position.z += -Math.cos(this.rotation.y - Math.PI / 2) * this.speed;
        break;
      case 'Space':
        this.position.y += this.speed;
        break;
      case 'ShiftLeft':
        this.position.y -= this.speed;
        break;
    }
  };

  private lockMouse = () => {
    if (document.pointerLockElement) {
      document.addEventListener('mousemove', this.moveView, false);
    } else {
      document.removeEventListener('mousemove', this.moveView, false);
    }
  };

  private moveView = (event: MouseEvent) => {
    this.rotation.x -= event.movementY / 200;
    this.rotation.y -= event.movementX / 200;
  };
}

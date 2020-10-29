import * as THREE from 'three';

export class Player extends THREE.PerspectiveCamera {
  constructor() {
    super(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.registerKeyboard();

    this.position.set(0, this.height, -5);
  }

  private height = 1.8;
  private speed = 0.2;

  private registerKeyboard() {
    window.addEventListener('keydown', (event) => {
      this.move(event);
    });
  }

  private move(event: KeyboardEvent) {
    switch (event.code) {
      case 'KeyW':
        this.position.x += Math.sin(this.rotation.y) * this.speed;
        this.position.z += -Math.cos(this.rotation.y) * this.speed;
        break;
      case 'KeyS':
        this.position.x -= Math.sin(this.rotation.y) * this.speed;
        this.position.z -= -Math.cos(this.rotation.y) * this.speed;
        break;
      case 'KeyA':
        this.position.x += Math.sin(this.rotation.y - Math.PI / 2) * this.speed;
        this.position.z += -Math.cos(this.rotation.y - Math.PI / 2) * this.speed;
        break;
      case 'KeyD':
        this.position.x += Math.sin(this.rotation.y + Math.PI / 2) * this.speed;
        this.position.z += -Math.cos(this.rotation.y + Math.PI / 2) * this.speed;
        break;
      case 'Space':
        this.position.y += this.speed;
        break;
      case 'ShiftLeft':
        this.position.y -= this.speed;
        break;
    }
  }
}

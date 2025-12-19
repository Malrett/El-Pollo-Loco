class Cloud extends MovableObject {
  y = 80;
  height = 650;
  width = 800;

  constructor() {
    super().loadImage("../img/5_background/layers/4_clouds/2.png");

    this.x = Math.random() * 500;
    this.animate();
  }

  animate() {
    this.moveLeft();
  }
}

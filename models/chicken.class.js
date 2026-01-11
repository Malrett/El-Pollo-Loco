class Chicken extends MovableObject {
  x;
  y = 850;
  height = 100;
  width = 100;
  IMAGES_WALKING = ["../img/3_enemies_chicken/chicken_normal/1_walk/1_w.png", "../img/3_enemies_chicken/chicken_normal/1_walk/2_w.png", "../img/3_enemies_chicken/chicken_normal/1_walk/3_w.png"];

  constructor() {
    super().loadImage("../img/3_enemies_chicken/chicken_normal/1_walk/1_w.png");
    this.loadImages(this.IMAGES_WALKING);

    this.x = 200 + Math.random() * 500;
    this.speed = 0.15 + Math.random() * 0.5;
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.x -= this.speed;
      if (this.x < -750) {
        this.x = 1450;
      }
    }, 1000 / 60);
    this.moveLeft();
    setInterval(() => {
      this.playAnimation(this.IMAGES_WALKING);
    }, 100);
  }

  // animate() {
  // setInterval(() => {
  // this.x -= 0.7;
  // if (this.x < -750) {
  // this.x = 1450;
  // }
  // }, 1000 / 60);
  // }
}

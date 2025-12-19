class BackgroundObject extends MovableObject {
  height = 1080;
  width = 1440;

  constructor(imagePath, x, y) {
    super().loadImage(imagePath);
    this.x = x;
    this.y = y;
  }
}

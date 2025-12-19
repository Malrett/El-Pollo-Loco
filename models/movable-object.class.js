class MovableObject {
  x;
  y;
  img;
  height = 150;
  width = 120;
  imageCache = {};
  currentImage = 0;
  speed = 0.15;
  otherDirection = false;

  loadImage(path) {
    this.img = new Image(); //this.img = document.getElementById('image') <img id="image">
    this.img.src = path;
  }

  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }

  moveRight(d) {}

  moveLeft() {
    setInterval(() => {
      this.x -= this.speed;
      if (this.x < -750) {
        this.x = 1450;
      }
    }, 1000 / 60);
  }
}

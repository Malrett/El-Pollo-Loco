let canvas;
let world;
let keyboard = new Keyboard();
// let keycode;

function init() {
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);

  console.log("My Character is", world.character);
}

window.addEventListener("keydown", (e, keycode) => {
  keycode = e.keyCode;
  switch (keycode) {
    case 37:
      keyboard.LEFT = true;
      break;
    case 39:
      keyboard.RIGHT = true;
      break;
    case 32:
      keyboard.SPACE = true;
      break;
    case 38:
      keyboard.UP = true;
      break;
    case 68:
      keyboard.THROW_D = true;
      break;
  }
});
window.addEventListener("keyup", (e, keycode) => {
  keycode = e.keyCode;
  switch (keycode) {
    case 37:
      keyboard.LEFT = false;
      break;
    case 39:
      keyboard.RIGHT = false;
      break;
    case 32:
      keyboard.SPACE = false;
      break;
    case 38:
      keyboard.UP = false;
      break;
    case 68:
      keyboard.THROW_D = false;
      break;
  }
});

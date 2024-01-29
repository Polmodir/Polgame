export default class Movement {
  constructor(bulletController) {
    this.collision = [];
    document.addEventListener("keydown", this.keydown);
    document.addEventListener("keyup", this.keyup);
  }
  keydown = (e) => {
    if (e.code === "KeyW") {
      this.upPressed = true;
    }
    if (e.code === "KeyS") {
      this.downPressed = true;
    }
    if (e.code === "KeyA") {
      this.leftPressed = true;
    }
    if (e.code === "KeyD") {
      this.rightPressed = true;
    }
  };
  keyup = (e) => {
    if (e.code === "KeyW") {
      this.upPressed = false;
    }
    if (e.code === "KeyS") {
      this.downPressed = false;
    }
    if (e.code === "KeyA") {
      this.leftPressed = false;
    }
    if (e.code === "KeyD") {
      this.rightPressed = false;
    }
  };
}

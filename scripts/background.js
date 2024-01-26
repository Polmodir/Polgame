export default class Background {
  constructor(x, y, s, player) {
    this.x = x;
    this.y = y;
    this.width = 150;
    this.height = 60;
    this.speed = s;
    this.player = player;
    this.isColliding = false;
    document.addEventListener("keydown", this.keydown);
    document.addEventListener("keyup", this.keyup);
  }
  draw(ctx) {
    this.move();
    ctx.strokeStyle = "white";
    ctx.strokeRect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = "gray";
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = "white";
    ctx.font = "20px Monospace";
    ctx.fillText("decoration", this.x, this.y + 15);
  }
  move() {
    if (this.upPressed == true && this.player.collision !== "Top") {
      this.y += this.speed;
    }
    if (this.downPressed == true && this.player.collision !== "Bottom") {
      this.y -= this.speed;
    }
    if (this.leftPressed == true && this.player.collision !== "Left") {
      this.x += this.speed;
    }
    if (this.rightPressed == true && this.player.collision !== "Right") {
      this.x -= this.speed;
    }
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

export default class Background {
  constructor(x, y, s, movement) {
    this.x = x;
    this.y = y;
    this.width = 150;
    this.height = 60;
    this.speed = s;
    this.movement = movement;
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
    if (
      this.movement.upPressed == true &&
      !this.movement.collision.includes("Top")
    ) {
      this.y += this.speed;
    }
    if (
      this.movement.downPressed == true &&
      !this.movement.collision.includes("Bottom")
    ) {
      this.y -= this.speed;
    }
    if (
      this.movement.leftPressed == true &&
      !this.movement.collision.includes("Left")
    ) {
      this.x += this.speed;
    }
    if (
      this.movement.rightPressed == true &&
      !this.movement.collision.includes("Right")
    ) {
      this.x -= this.speed;
    }
  }
}

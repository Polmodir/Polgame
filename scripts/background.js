export default class Background {
  constructor(x, y, s) {
    this.x = x;
    this.delayX = this.x;
    this.delayY = this.y;
    this.y = y;
    this.width = 100;
    this.height = 100;
    this.speed = s;
    this.collision = "None";
    this.direction = "None";
    document.addEventListener("keydown", this.keydown);
    document.addEventListener("keyup", this.keyup);
  }
  draw(ctx) {
    this.move();
    ctx.strokeStyle = "white";
    ctx.strokeRect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = "green";
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = "white";
    ctx.font = "20px Monospace";
    ctx.fillText("trap", this.x, this.y + 15);
  }
  move() {
    this.delayY = this.y;
    this.delayX = this.x;
    if (this.upPressed == true && this.collision !== "Bottom") {
      this.y += this.speed;
    }
    if (this.downPressed == true && this.collision !== "Top") {
      this.y -= this.speed;
    }
    if (this.leftPressed == true && this.collision !== "Right") {
      this.x += this.speed;
    }
    if (this.rightPressed == true && this.collision !== "Left") {
      this.x -= this.speed;
    }

    switch (true) {
      case this.delayY < this.y && this.delayX == this.x:
        this.direction = "Up";
        break;
      case this.delayY < this.y && this.delayX > this.x:
        this.direction = "UpRight";
        break;
      case this.delayY == this.y && this.delayX > this.x:
        this.direction = "Right";
        break;
      case this.delayY > this.y && this.delayX > this.x:
        this.direction = "DownRight";
        break;
      case this.delayY > this.y && this.delayX == this.x:
        this.direction = "Down";
        break;
      case this.delayY > this.y && this.delayX < this.x:
        this.direction = "DownLeft";
        break;
      case this.delayY == this.y && this.delayX < this.x:
        this.direction = "Left";
        break;
      case this.delayY < this.y && this.delayX < this.x:
        this.direction = "UpLeft";
        break;
      case this.delayY == this.y && this.delayX == this.x:
        this.direction = "None";
        break;
    }
  }
  keydown = (e) => {
    // console.log(e);
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

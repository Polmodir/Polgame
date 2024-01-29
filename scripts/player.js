console.log("player script loaded");

export default class Player {
  constructor(x, y, w, h, bulletController, movement) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.collision = [];
    this.bulletController = bulletController;
    this.shootPressed = false;
    this.movement = movement;
    document.addEventListener("keydown", this.keydown);
    document.addEventListener("keyup", this.keyup);
  }
  draw(ctx) {
    ctx.strokeStyle = "white";
    ctx.drawImage(
      document.getElementById("face"),
      this.x,
      this.y,
      this.width,
      this.height
    );
    ctx.strokeRect(this.x, this.y, this.width, this.height);
    // ctx.fillStyle = "green";
    // ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = "white";
    ctx.font = "20px Monospace";
    ctx.fillText("you", this.x, this.y + 15);
    this.shoot();
  }
  collideWith(sprite, allSprite, collision) {
    collision = [];
    if (
      this.x <= sprite.x + sprite.width &&
      this.x + this.width >= sprite.x &&
      this.y <= sprite.y + sprite.height &&
      this.y + this.height >= sprite.y
    ) {
      if (this.x == sprite.x + sprite.width) {
        this.movement.collision.push("Left");
      } else if (this.x + this.width == sprite.x) {
        this.movement.collision.push("Right");
      } else if (this.y + this.height == sprite.y) {
        this.movement.collision.push("Bottom");
      } else if (this.y == sprite.y + sprite.height) {
        this.movement.collision.push("Top");
      }
    }
    allSprite.forEach((el) => {
      if (
        this.x > el.x + el.width ||
        this.x + this.width < el.x ||
        this.y > el.y + el.height ||
        this.y + this.height < el.y
      ) {
        collision.push(false);
      }
    });
    if (collision.length == allSprite.length) {
      this.movement.collision = [];
    }
  }
  keydown = (e) => {
    if (e.code === "Space") {
      this.shootPressed = true;
    }
  };
  keyup = (e) => {
    if (e.code === "Space") {
      this.shootPressed = false;
    }
  };
  shoot() {
    if (this.shootPressed) {
      const speed = 5;
      const delay = 15;
      const bulletX = this.x + this.width / 2;
      const bulletY = this.y;
      this.bulletController.shoot(bulletX, bulletY, speed, delay);
    }
  }
}

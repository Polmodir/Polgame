console.log("player script loaded");

export default class Player {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.collision = "None";
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
  }
  collideWith(sprite, allSprite, collision) {
    console.log(allSprite);
    collision = [];
    if (
      this.x <= sprite.x + sprite.width &&
      this.x + this.width >= sprite.x &&
      this.y <= sprite.y + sprite.height &&
      this.y + this.height >= sprite.y
    ) {
      if (this.x == sprite.x + sprite.width) {
        this.collision = "Left";
      }
      if (this.x + this.width == sprite.x) {
        this.collision = "Right";
      }
      if (this.y + this.height == sprite.y) {
        this.collision = "Bottom";
      }
      if (this.y == sprite.y + sprite.height) {
        this.collision = "Top";
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
      this.collision = "None";
    }
  }
}

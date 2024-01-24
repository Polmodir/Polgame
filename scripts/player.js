console.log("player script loaded");

export default class Player {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
  }
  draw(ctx) {
    ctx.strokeStyle = "white";
    ctx.strokeRect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = "green";
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = "white";
    ctx.font = "20px Monospace";
    ctx.fillText("you", this.x, this.y + 15);
  }
  collideWith(sprite) {
    // console.log(sprite.x, sprite.y);
    // console.log(this.x, this.y);
    if (
      this.x <= sprite.x + sprite.width &&
      this.x + this.width >= sprite.x &&
      this.y <= sprite.y + sprite.height &&
      this.y + this.height >= sprite.y
    ) {
      if (this.x == sprite.x + sprite.width) {
        console.log("right");
        sprite.collision = "Right";
      }
      if (this.x + this.width == sprite.x) {
        console.log("left");
        sprite.collision = "Left";
      }
      if (this.y + this.height == sprite.y) {
        console.log("top");
        sprite.collision = "Top";
      }
      if (this.y == sprite.y + sprite.height) {
        console.log("bottom");
        sprite.collision = "Bottom";
      }
      console.log(this.x, sprite.x + sprite.width);
      // if (this.y > sprite.y + sprite.height) {
      //   console.log("bottom");
      // }
      // if (this.x < sprite.x + sprite.width) {
      //   console.log("right");
      // }
      // if (this.x + this.width > sprite.x) {
      //   console.log("left");
      // }
      // switch (sprite.direction) {
      //   case "Up":
      //     return [true, "BottomCollision"];
      //     break;
      //   case "Down":
      //     return [true, "TopCollision"];
      //     break;
      //   case "Left":
      //     return [true, "RightCollision"];
      //     break;
      //   case "Right":
      //     return [true, "LeftCollision"];
      //     break;
      // }
    } else {
      sprite.collision = "None";
      return [false];
    }
  }
}

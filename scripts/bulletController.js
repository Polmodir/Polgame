import Bullet from "./bullet.js";

export default class BulletController {
  bullets = [];
  timerTillNextBullet = 0;

  constructor(canvas, movement, speed) {
    this.canvas = canvas;
    this.movement = movement;
    this.speed = speed;
  }

  shoot(x, y, speed, delay) {
    console.log(this.timerTillNextBullet);
    if (this.timerTillNextBullet <= 0) {
      this.bullets.push(new Bullet(x, y, 10));
      this.timerTillNextBullet = delay;
    }

    this.timerTillNextBullet--;
  }

  draw(ctx) {
    this.bullets.forEach((bullet, idx) => {
      if (this.isBulletOffScreen(bullet)) {
        this.bullets.splice(idx, 1);
      }
      if (
        this.movement.upPressed == true &&
        !this.movement.collision.includes("Top")
      ) {
        this.bullets[idx].y += this.speed;
      }
      if (
        this.movement.downPressed == true &&
        !this.movement.collision.includes("Bottom")
      ) {
        this.bullets[idx].y -= this.speed;
      }
      if (
        this.movement.leftPressed == true &&
        !this.movement.collision.includes("Left")
      ) {
        this.bullets[idx].x += this.speed;
      }
      if (
        this.movement.rightPressed == true &&
        !this.movement.collision.includes("Right")
      ) {
        this.bullets[idx].x -= this.speed;
      }
      bullet.draw(ctx);
    });
  }

  isBulletOffScreen(bullet) {
    return bullet.y <= -bullet.height;
  }
}

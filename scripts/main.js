console.log("main script loaded");

import Player from "./player.js";
import Background from "./background.js";
import BulletController from "./bulletcontroller.js";
import Movement from "./movement.js";
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 1050;
canvas.height = 1050;

const playerWidth = 50;
const playerHeight = 50;
const speed = 5;
const movement = new Movement();
const bulletController = new BulletController(canvas, movement, speed);

const player = new Player(
  (canvas.width - playerWidth) / 2,
  (canvas.height - playerHeight) / 2,
  playerWidth,
  playerHeight,
  bulletController,
  movement
);
const background = [
  new Background(0, 0, speed, movement),
  new Background(150, 150, speed, movement),
  new Background(100, 100, speed, movement),
  new Background(450, 450, speed, movement),
  new Background(600, 600, speed, movement),
  new Background(750, 750, speed, movement),
];
var collision = [];
function frameRateLoop() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  player.draw(ctx);
  background.forEach((el) => {
    el.draw(ctx);
    player.collideWith(el, background, collision);
  });
  console.log(player.shootPressed);
  bulletController.draw(ctx);
}
setInterval(frameRateLoop, 1000 / 60);

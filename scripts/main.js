console.log("main script loaded");

import Player from "./player.js";
import Background from "./background.js";
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 1050;
canvas.height = 1050;

const playerWidth = 50;
const playerHeight = 50;
const player = new Player(
  (canvas.width - playerWidth) / 2,
  (canvas.height - playerHeight) / 2,
  playerWidth,
  playerHeight
);
const background = [
  new Background(0, 0, 5, player),
  new Background(150, 150, 5, player),
  new Background(100, 100, 5, player),
  new Background(450, 450, 5, player),
  new Background(600, 600, 5, player),
  new Background(750, 750, 5, player),
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
}
setInterval(frameRateLoop, 1000 / 60);

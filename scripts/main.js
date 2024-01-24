console.log("main script loaded");

import Player from "./player.js";
import Background from "./background.js";
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
console.log(canvas);

canvas.width = 1000;
canvas.height = 1000;

const playerWidth = 50;
const playerHeight = 50;
const player = new Player(
  (canvas.width - playerWidth) / 2,
  (canvas.height - playerHeight) / 2,
  playerWidth,
  playerHeight
);
const background = new Background(600, 600, 5);
function frameRateLoop() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  player.draw(ctx);
  background.draw(ctx);

  player.collideWith(background);
  // if (player.collideWith(background)[0]) {
  //   console.log(player.collideWith(background)[1]);
  // } else {
  //   console.log("false");
  // }
  // console.log(background.direction);

  // console.log(background.x, background.y);
  // console.log(player.x, player.y);
  console.log(background.collision);
}
setInterval(frameRateLoop, 1000 / 60);

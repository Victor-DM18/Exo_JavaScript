const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const img = new Image();

img.src = "./media/flappy-bird-set.png";

let displayGame = false;

const gravity = 0.5;
const speed = 6;
const size = [51, 36];
const jump = -11;
const cTenth = canvas.width / 10;

let index = 0;
let highScore = 0;
let currentScore = 0;
let pipe = [];
let flight;
let flyHeight = canvas.height / 2;

const display = () => {
  index++;

  // params => (image, sx, sy, sLargeur, sHauteur, dx, dy, dLargeur, dHauteur)
  ctx.drawImage(
    img,
    432,
    Math.floor((index % 9) / 3) * size[1],
    ...size,
    canvas.width / 2 - size[0] / 2,
    flyHeight,
    ...size
  );
  window.requestAnimationFrame(display);
};
img.onload = display;

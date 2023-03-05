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

  // background moving
  ctx.drawImage(
    img,
    0,
    0,
    canvas.width,
    canvas.height,
    -((index * (speed / 2)) % canvas.width) + canvas.width,
    0,
    canvas.width,
    canvas.height
  );

  ctx.drawImage(
    img,
    0,
    0,
    canvas.width,
    canvas.height,
    -((index * (speed / 2)) % canvas.width),
    0,
    canvas.width,
    canvas.height
  );

  if (displayGame) {
    // params => (image, sx, sy, sLargeur, sHauteur, dx, dy, dLargeur, dHauteur)
    ctx.drawImage(
      img,
      432,
      Math.floor((index % 9) / 3) * size[1],
      ...size,
      canvas.width / 3 - size[0] / 2,
      flyHeight,
      ...size
    );
  } else {
    ctx.drawImage(
      img,
      432,
      Math.floor((index % 9) / 3) * size[1],
      ...size,
      canvas.width / 2 - size[0] / 2,
      flyHeight - 50,
      ...size
    );
    ctx.font = "bold 30px courier";
    ctx.fillText(`High score : ${highScore}`, 100, 150);
    ctx.font = "bold 40px courier";
    ctx.fillText("Click to start !", 35, 500);
  }

  window.requestAnimationFrame(display);
};

window.addEventListener("load", display);

canvas.addEventListener("click", () => {
  displayGame = true;
});

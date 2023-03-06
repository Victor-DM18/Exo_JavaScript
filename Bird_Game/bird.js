const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const img = new Image();

img.src = "./media/flappy-bird-set.png";

let displayGame = false;

const gravity = 0.5;
const speed = 6;
const size = [51, 36];
const jump = -10;
const cTenth = canvas.width / 10;

// pipes value
const pipeWidth = 78;
const pipeGap = 270;
const pipePosition = () =>
  Math.random() * (canvas.height - (pipeGap + pipeWidth) - pipeWidth) +
  pipeWidth;

console.log(pipePosition);
// bird value
let index = 0;
let highScore = 0;
let currentScore = 0;
let pipe = [];
let flight;
let flyHeight = canvas.height / 2;

const initialiaze = () => {
  currentScore = 0;
  flight = jump;
  flyHeight = canvas.height / 2 - size[1] / 2;

  pipe = Array(3)
    .fill()
    .map((e, i) => [canvas.width + i * (pipeGap + pipeWidth), pipePosition()]);
};

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
      cTenth,
      flyHeight - 50,
      ...size
    );

    flight += gravity;
    flyHeight = Math.min(flyHeight + flight, canvas.height - size[1]);
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
    ctx.fillText(`High score : ${highScore}`, 60, 150);
    ctx.font = "bold 30px courier";
    ctx.fillText("Click to start !", 45, 420);
  }

  // pipes
  if (displayGame) {
    pipe.map((p) => {
      p[0] -= speed;

      //top
      ctx.drawImage(
        img,
        432,
        588 - p[1],
        pipeWidth,
        p[1],
        p[0],
        0,
        pipeWidth,
        p[1]
      );

      // botton
      ctx.drawImage(
        img,
        432 + pipeWidth,
        108,
        pipeWidth,
        canvas.height - p[1] + pipeGap,
        p[0],
        p[1] + pipeGap,
        pipeWidth,
        canvas.height - p[1] + pipeGap
      );
    });
  }

  window.requestAnimationFrame(display);
};

initialiaze();

window.addEventListener("load", display);
document.addEventListener("keypress", (e) => {
  console.log(e);
  if ((e.key = "up")) {
    flight = jump;
  }
});
document.addEventListener("click", (e) => {
  flight = jump;
});
canvas.addEventListener("click", () => {
  displayGame = true;
});
document.addEventListener("keypress", (e) => {
  console.log(e);
  if ((e.key = "enter")) {
    displayGame = true;
  }
});

"use strict";

const logo = () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(0, 300);
  ctx.lineTo(150, 300);
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(150, 300);
  ctx.lineTo(300, 300);
  ctx.lineTo(300, 0);
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(150, 220);
  ctx.lineTo(40, 0);
  ctx.lineTo(260, 0);
  ctx.fill();

  ctx.fillStyle = "grey";

  ctx.beginPath();
  ctx.moveTo(0, 60);
  ctx.lineTo(0, 300);
  ctx.lineTo(120, 300);
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(180, 300);
  ctx.lineTo(300, 300);
  ctx.lineTo(300, 60);
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(150, 180);
  ctx.lineTo(60, 0);
  ctx.lineTo(240, 0);
  ctx.fill();
};

window.addEventListener("load", logo);

//------------------------------------
// Try / catch / finally
console.log("----------------------------------");
console.log("test try / catch / finally : ");

const nb = 18;
const str = "11";

try {
  // code test
  nb = str;
} catch (err) {
  // if wrong catch the err
  console.log(err);
} finally {
  //but alway run this code
  console.log("test terminé !");
}

// Throw
console.log("----------------------------------");
console.log("test throw : ");

const isNumber = (nb) => {
  if (isNaN(nb)) {
    throw nb + "n'est pas un nombre !";
  } else {
    console.log(nb + " est un nombre");
  }
};

try {
  isNumber("viki");
} catch (err) {
  console.log("ERREUR : " + err);
} finally {
  console.log("test terminé !");
}

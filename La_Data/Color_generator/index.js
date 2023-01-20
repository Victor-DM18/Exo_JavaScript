const body = document.querySelector("body");
const display = document.querySelector(".display-color");

const displayColor = () => {
  let colorR = Math.floor(Math.random() * 256);
  let colorG = Math.floor(Math.random() * 256);
  let colorB = Math.floor(Math.random() * 256);
  const color = `rgb(${colorR} , ${colorG} , ${colorB})`;

  body.style.backgroundColor = color;
  body.innerHTML = `<h1>${color}</h1>`;
};

setInterval(displayColor, 2000);

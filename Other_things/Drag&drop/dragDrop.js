const list = document.querySelectorAll("li");
const color = ["red", "blue", "black"];
let object;

list.forEach((item) => {
  window.addEventListener("load", () => {
    let rand = Math.floor(Math.random() * color.length);
    item.style.background = color[rand];
  });
});

document.addEventListener("dragstart", (e) => {
  // e.preventDefault();
  object = e.target;
});

document.addEventListener("dragover", (e) => {
  e.preventDefault();
});

document.addEventListener("drop", (e) => {
  e.preventDefault(e);
  e.target.appendChild(object);
});

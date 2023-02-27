const list = document.querySelectorAll("li");
const color = [
  "red",
  "green",
  "gray",
  "orangered",
  "aqua",
  "yellow",
  "pink",
  "brown",
];
let object;

list.forEach((item) => {
  window.addEventListener("load", () => {
    let rand = Math.floor(Math.random() * color.length);
    item.style.background = color[rand];
  });
});

document.addEventListener("dragstart", (e) => {
  object = e.target;
});

document.addEventListener("dragover", (e) => {
  e.preventDefault();
});

document.addEventListener("drop", (e) => {
  console.log(e.target);
  if (e.target.getAttribute("data-drag") == "container") {
    e.preventDefault(e);
    e.target.appendChild(object);
  }
});

document.addEventListener("dragend", () => {
  object = null;
});

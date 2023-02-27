const color = ["red", "blue", "black"];
let object;

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

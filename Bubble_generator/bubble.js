const bubble = document.createElement("span");
const randomSize = Math.random() * 200 + 100 + "px";
const randomTop = Math.random() * 100 + "%";
const randomLeft = Math.random() * 100 + "%";
const randomColor =
  "rgb(" +
  Math.random() * 255 +
  "," +
  Math.random() * 255 +
  "," +
  Math.random() * 255 +
  ")";

bubble.classList.add("bubble");
document.body.appendChild(bubble);

bubble.style.height = randomSize;
bubble.style.width = randomSize;
bubble.style.background = randomColor;
bubble.style.background = randomColor;
bubble.style.top = randomTop;
bubble.style.left = randomLeft;

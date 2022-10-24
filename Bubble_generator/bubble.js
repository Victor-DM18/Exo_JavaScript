const counter = document.querySelector("h2");
let count = 0;

const generator = () => {
  const bubble = document.createElement("span");
  const randomSize = Math.random() * 200 + 100 + "px";
  const randomNegatif = Math.random() > 0.5 ? 1 : -1;
  const randomTop = Math.random() * 100 + 50 + "%";
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
  bubble.style.setProperty("--left", Math.random() * 100 * randomNegatif + "%");

  setTimeout(() => {
    bubble.remove();
  }, 5000);

  bubble.addEventListener("click", () => {
    bubble.remove();
    count++;
    counter.textContent = count;
  });
};

setInterval(generator, 500);

const canvas = document.getElementById("draw");
const ctx = canvas.getContext("2d");

const getLocation = (e) => {
  const rect = canvas.getBoundingClientRect();

  console.log({
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
  });
};

const mouseMove = (e) => {
  const mousePosition = getLocation(e);
  ctx.lineTo(mousePosition.x, mousePosition.y);
  ctx.stroke();
};

canvas.addEventListener("mousedown", (e) => {
  e.preventDefault();
  const mousePosition = getLocation(e);
  ctx.beginPath();
  ctx.moveTo(mousePosition.x, mousePosition.y);
});

const canvas = document.getElementById("draw");
const inputColor = document.querySelectorAll("#colors input");
const ctx = canvas.getContext("2d");
let color = "black";

const getLocation = (e) => {
  const rect = canvas.getBoundingClientRect();
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
  };
};

const mouseMove = (e) => {
  const mousePosition = getLocation(e);
  ctx.lineTo(mousePosition.x, mousePosition.y);
  ctx.stroke();
  ctx.strokeStyle = color;
  ctx.lineWidth = "5";
};

canvas.addEventListener("mousedown", (e) => {
  e.preventDefault();
  const mousePosition = getLocation(e);
  ctx.beginPath();
  ctx.moveTo(mousePosition.x, mousePosition.y);

  canvas.addEventListener("mousemove", mouseMove);
  canvas.addEventListener("mouseup", () => {
    canvas.removeEventListener("mousemove", mouseMove);
  });
});

reset.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

inputColor.forEach((input) => {
  input.addEventListener("click", (e) => {
    color = e.target.id;
  });
});

const canvas = document.getElementById("draw");
const ctx = canvas.getContext("2d");

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
  ctx.strokeStyle = "orange";
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
  ctx.clearRect(0, 0, 800, 800);
});

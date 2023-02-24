const canvas = document.getElementById("draw");
const ctx = canvas.getContext("2d");

const getLocation = (e) => {
  const rect = canvas.getBoundingClientRect();

  console.log({
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
  });
};

canvas.addEventListener("mousedown", (e) => {
  e.preventDefault();
  getLocation(e);
});

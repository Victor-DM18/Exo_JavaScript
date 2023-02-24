const canvas = document.getElementById("draw");
const ctx = canvas.getContext("2d");

const getLocation = () => {
  const rect = canvas.getBoundingClientRect();

  console.log(rect);
};

canvas.addEventListener("mousdown", (e) => {
  e.preventDefault();
  getLocation();
});

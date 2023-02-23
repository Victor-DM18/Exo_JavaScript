const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "rgb(221, 143, 65";
ctx.fillRect(0, 0, 300, 50);

ctx.fillStyle = "grey";
ctx.fillRect(0, 0, 50, 300);

ctx.fillStyle = "red";
ctx.strokeRect(51, 51, 300, 300);

ctx.fillStyle = "black";
ctx.beginPath();
ctx.moveTo(52, 52);
ctx.lineTo(52, 300);
ctx.lineTo(180, 300);
ctx.fill();

ctx.beginPath();
ctx.moveTo(180, 300);
ctx.lineTo(300, 300);
ctx.lineTo(300, 52);
ctx.fill();

ctx.beginPath();
ctx.moveTo(180, 220);
ctx.lineTo(100, 52);
ctx.lineTo(250, 52);
ctx.fill();

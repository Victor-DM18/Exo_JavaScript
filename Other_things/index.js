const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "black";
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(0, 300);
ctx.lineTo(150, 300);
ctx.fill();

ctx.beginPath();
ctx.moveTo(150, 300);
ctx.lineTo(300, 300);
ctx.lineTo(300, 0);
ctx.fill();

ctx.beginPath();
ctx.moveTo(150, 220);
ctx.lineTo(40, 0);
ctx.lineTo(260, 0);
ctx.fill();

ctx.fillStyle = "grey";

ctx.beginPath();
ctx.moveTo(0, 60);
ctx.lineTo(0, 300);
ctx.lineTo(120, 300);
ctx.fill();

ctx.beginPath();
ctx.moveTo(180, 300);
ctx.lineTo(300, 300);
ctx.lineTo(300, 60);
ctx.fill();

ctx.beginPath();
ctx.moveTo(150, 180);
ctx.lineTo(60, 0);
ctx.lineTo(240, 0);
ctx.fill();

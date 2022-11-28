// const mousemoveBlack = document.querySelector(".mousemoveBlack");
// const mousemoveWhite = document.querySelector(".mousemoveWhite");
// const mouse = document.querySelector(".mouse");

// window.addEventListener("mousemove", (e) => {
//   mousemoveBlack.style.top = e.pageY + "px";
//   mousemoveBlack.style.left = e.pageX + "px";
//   mousemoveWhite.style.top = e.pageY + "px";
//   mousemoveWhite.style.left = e.pageX + "px";
//   mouse.style.top = e.pageY + "px";
//   mouse.style.left = e.pageX + "px";
// });

// code optimisé

const mouses = document.querySelectorAll(".mousemove");

window.addEventListener("mousemove", (e) => {
  mouses.forEach((mouse) => {
    mouse.style.left = e.pageX + "px";
    mouse.style.top = e.pageY + "px";
  });
});

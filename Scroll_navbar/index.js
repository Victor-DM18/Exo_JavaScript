const navbar = document.querySelector("#navbar");
let scroll = 0;

window.addEventListener("scroll", (e) => {
  if (window.scrollY > scroll) {
    navbar.style.top = "-60px";
  } else {
    navbar.style.top = "0px";
  }
  scroll = window.scrollY;
});

// Créer 3 ronds de tailles différentes (dont un qui remplacera la souris)

// Ajouter un événement sur la fenetre (window) puis animer la position de ces ronds (top, left injecter "e")

// S'assurer que les liens sont clickables

// Donner un style de transparence aux 2 plus gros ronds (mix-blend-mode)

const mousemoveBlack = document.querySelector(".mousemoveBlack");
const mousemoveWhite = document.querySelector(".mousemoveWhite");
const mouse = document.querySelector(".mouse");

window.addEventListener("mousemove", (e) => {
  mousemoveBlack.style.top = e.pageY + "px";
  mousemoveBlack.style.left = e.pageX + "px";
  mousemoveWhite.style.top = e.pageY + "px";
  mousemoveWhite.style.left = e.pageX + "px";
  mouse.style.top = e.pageY + "px";
  mouse.style.left = e.pageX + "px";
});

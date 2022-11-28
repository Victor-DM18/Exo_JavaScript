// Créer un événement au scroll

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours

const navbar = document.getElementById("navbar");
const image = document.getElementById("imgImprovise");
const close = document.getElementById("closeBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navbar.style.height = "60px";
  } else {
    navbar.style.height = "90px";
  }

  let scroll =
    (window.scrollY + window.innerHeight) / document.body.offsetHeight;

  if (scroll > 0.45) {
    image.style.opacity = 1;
    image.style.transform = "none";
  } else {
    image.style.opacity = 0;
    image.style.transform = "none";
  }

  if (scroll >= 1) {
    popup.style.opacity = "1";
    popup.style.transform = "translate(0px)";
  }
});

close.addEventListener("click", () => {
  popup.style.transform = "translate(500px)";
  popup.style.opacity = 0;
});

// Créer un événement au scroll

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours

const navbar = document.getElementById("navbar");
const image = document.getElementById("imgImprovise");
const popup = document.getElementById("popup");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY > 0) {
    navbar.style.height = "60px";
  } else {
    navbar.style.height = "90px";
  }

  if (window.scrollY > 100) {
    image.style.opacity = "1";
  } else {
    image.style.opacity = "0";
  }

  if (window.scrollY >= 1200) {
    popup.style.opacity = "1";
    popup.style.transform = "translate(0px)";
  }
});

popup.addEventListener("click", () => {
  popup.remove();
});

// Créer un événément au scroll

// Cacher la navbar si l'utilisateur comment à descendre et la sortir quand il remonte

// Stocker la valeur du précédent niveau de scroll pour savoir si l'on est monté ou descendu

// Connaitre niveau de scroll (window.scrollY)

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

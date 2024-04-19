import { displayOpinionList, addOpinion } from "./avis.js";

// All general variables declarated
const ficheSection = document.querySelector(".fiches");
const listArticles = document.querySelector(".listArticles");
const priceOrder = document.querySelector(".btn-trier");
const priceFilter = document.querySelector(".btn-filtrer");
const priceReverseSort = document.querySelector(".btn-reverse-tri");
const descriptionFilter = document.querySelector(".btn-filtre-description");
const affordablePrice = document.querySelector(".affordable-price");
const dispoPieces = document.querySelector(".disponibility");
const rangeBtn = document.querySelector(".range-price");
const maxPrice = document.querySelector(".price");
const evalInput = document.querySelector(".evalInput");
const pieceValue = document.querySelector(".evalPiece");

// Récupération des pièces éventuellement stockées dans le localStorage

let pieces = window.localStorage.getItem("pieces");
window.localStorage.setItem("nom", "Les Bonnes Pièces !");

if (pieces === null) {
  //data fetching
  const res = await fetch(`http://localhost:8081/pieces`);

  // const res = await fetch("./pieces-autos.json");
  pieces = await res.json();

  const pieceValueStorage = JSON.stringify(pieces);

  //local storage
  window.localStorage.setItem("pieces", pieceValueStorage);
} else {
  pieces = JSON.parse(pieces);
}

maxPrice.innerText = rangeBtn.value + " €";
pieceValue.innerHTML = evalInput.value + " sur5";

addOpinion();

//list of affordable articles
const affordableElement = document.createElement("ul");
const elementName = pieces
  .filter((price) => price.prix < "35")
  .map((piece) => piece.nom);

for (let i = 0; i < elementName.length; i++) {
  const elementList = document.createElement("li");
  elementList.innerText = elementName[i];
  affordableElement.appendChild(elementList);
}

affordablePrice.appendChild(affordableElement);

// list of disponibilited artciles
// const dispoElement = document.createElement("ul");
// const disponibilitedElement = pieces
//   .filter((piece) => piece.disponibilité === true)
//   .map((dispo) => {
//     return `${dispo.nom}  -  ${dispo.prix} €`;
//   });

// for (let i = 0; i < disponibilitedElement.length; i++) {
//   const dispoList = document.createElement("li");
//   dispoList.innerText = disponibilitedElement[i];
//   dispoElement.appendChild(dispoList);
// }

// dispoPieces.appendChild(dispoElement);

//list of all articles
const displayArtcilesList = (pieces) => {
  for (let i = 0; i < pieces.length; i++) {
    const piexeElement = document.createElement("article");
    const imgElement = document.createElement("img");
    const nameElement = document.createElement("h2");
    const priceElement = document.createElement("p");
    const categoryElement = document.createElement("p");
    const descriptionElement = document.createElement("p");
    const stockElement = document.createElement("p");
    const opinionBtn = document.createElement("button");

    imgElement.src = pieces[i].image;
    nameElement.innerText = pieces[i].nom;
    priceElement.innerText = `Prix : ${pieces[i].prix} € (${
      pieces[i].prix < 35 ? "€" : "€€€"
    })`;
    categoryElement.innerText = pieces[i].categorie ?? "Aucune catégorie";
    descriptionElement.innerText = `${
      pieces[i].description ?? "Aucune déscription pour le moment"
    }`;
    stockElement.innerText = `${
      pieces[i].disponibilité ? "En stock" : "En rupture de stock"
    }`;
    opinionBtn.innerText = "Voir les avis";
    opinionBtn.dataset.id = pieces[i].id;
    opinionBtn.classList.add("opinion-button");

    listArticles.appendChild(piexeElement);
    piexeElement.appendChild(imgElement);
    piexeElement.appendChild(nameElement);
    piexeElement.appendChild(priceElement);
    piexeElement.appendChild(categoryElement);
    piexeElement.appendChild(descriptionElement);
    piexeElement.appendChild(stockElement);
    piexeElement.appendChild(opinionBtn);
  }

  displayOpinionList();
};

displayArtcilesList(pieces);

//eventListener for all filter buttons
priceOrder.addEventListener("click", () => {
  const piecesSort = pieces.sort((a, b) => {
    return a.prix - b.prix;
  });
  listArticles.innerHTML = "";
  displayArtcilesList(piecesSort);
});

priceReverseSort.addEventListener("click", () => {
  const reverseSort = pieces.sort((a, b) => {
    return b.prix - a.prix;
  });
  listArticles.innerHTML = "";
  displayArtcilesList(reverseSort);
});

priceFilter.addEventListener("click", () => {
  const piecesFilter = pieces.filter((piece) => {
    return piece.prix <= 35;
  });
  listArticles.innerHTML = "";
  displayArtcilesList(piecesFilter);
});

descriptionFilter.addEventListener("click", () => {
  const piecesDescription = pieces.filter((piece) => {
    return piece.description;
  });
  listArticles.innerHTML = "";
  displayArtcilesList(piecesDescription);
});

rangeBtn.addEventListener("input", (e) => {
  maxPrice.innerHTML = `${e.target.value} €`;
  const piecesFilter = pieces.filter((piece) => {
    return piece.prix <= e.target.value;
  });
  listArticles.innerHTML = "";
  displayArtcilesList(piecesFilter);
});

evalInput.addEventListener("input", (e) => {
  pieceValue.innerHTML = `${e.target.value} sur 5`;
});

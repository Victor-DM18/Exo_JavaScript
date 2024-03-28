const ficheSection = document.querySelector(".fiches");
const priceOrder = document.querySelector(".btn-trier");
const priceFilter = document.querySelector(".btn-filtrer");
const priceReverseSort = document.querySelector(".btn-reverse-tri");
const descriptionFilter = document.querySelector(".btn-filtre-description");
const affordablePrice = document.querySelector(".affordable-price");
const dispoPieces = document.querySelector(".disponibility");

//data fetching
const res = await fetch("./pieces-autos.json");
const pieces = await res.json();

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
const dispoElement = document.createElement("ul");
const disponibilitedElement = pieces
  .filter((piece) => piece.disponibilité === true)
  .map((dispo) => {
    return `${dispo.nom}  -  ${dispo.prix} €`;
  });

for (let i = 0; i < disponibilitedElement.length; i++) {
  const dispoList = document.createElement("li");
  dispoList.innerText = disponibilitedElement[i];
  dispoElement.appendChild(dispoList);
}

dispoPieces.appendChild(dispoElement);

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

    ficheSection.appendChild(piexeElement);
    piexeElement.appendChild(imgElement);
    piexeElement.appendChild(nameElement);
    piexeElement.appendChild(priceElement);
    piexeElement.appendChild(categoryElement);
    piexeElement.appendChild(descriptionElement);
    piexeElement.appendChild(stockElement);
  }
};

displayArtcilesList(pieces);

//eventListener for filter buttons
priceOrder.addEventListener("click", () => {
  const piecesSort = pieces.sort((a, b) => {
    return a.prix - b.prix;
  });
  console.log(piecesSort);
});

priceReverseSort.addEventListener("click", () => {
  const reverseSort = pieces.sort((a, b) => {
    return b.prix - a.prix;
  });
  ficheSection.innerHTML = "";
  displayArtcilesList(reverseSort);
  console.log(reverseSort);
});

priceFilter.addEventListener("click", () => {
  const piecesFilter = pieces.filter((piece) => {
    return piece.prix <= 35;
  });
  console.log(piecesFilter);
});

descriptionFilter.addEventListener("click", () => {
  const piecesDescription = pieces.filter((piece) => {
    return piece.description;
  });
  console.log(piecesDescription);
});

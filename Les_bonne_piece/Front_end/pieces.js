const ficheSection = document.querySelector(".fiches");
const priceOrder = document.querySelector(".btn-trier");
const priceFilter = document.querySelector(".btn-filtrer");

const res = await fetch("./pieces-autos.json");
const pieces = await res.json();

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

priceOrder.addEventListener("click", () => {
  pieces.sort((a, b) => {
    return a.prix - b.prix;
  });
  console.log(pieces);
});

const filtreSection = document.querySelector(".fiches");
const imgElement = document.createElement("img");
const nameElement = document.createElement("h2");
const priceElement = document.createElement("p");
const categoryElement = document.createElement("p");
const descriptionElement = document.createElement("p");
const stockElement = document.createElement("p");

const res = await fetch("./pieces-autos.json");
const pieces = await res.json();

const article = pieces[0];

imgElement.src = article.image;
nameElement.innerText = article.nom;
priceElement.innerText = `Prix : ${article.prix} € (${
  article.prix < 35 ? "€" : "€€€"
})`;
categoryElement.innerText = article.categorie ?? "Aucune catégorie";
descriptionElement.innerText = `${
  article.description ?? "Aucune déscription pour le moment"
}`;
stockElement.innerText = `${
  article.disponibilité ? "En stock" : "En rupture de stock"
}`;

filtreSection.appendChild(imgElement);
filtreSection.appendChild(nameElement);
filtreSection.appendChild(priceElement);
filtreSection.appendChild(categoryElement);
filtreSection.appendChild(descriptionElement);
filtreSection.appendChild(stockElement);

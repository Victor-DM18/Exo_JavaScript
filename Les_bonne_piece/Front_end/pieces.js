const filtreSection = document.querySelector(".fiches");
const imgElement = document.createElement("img");
const nameElement = document.createElement("h2");
const priceElement = document.createElement("p");
const categoryElement = document.createElement("p");

const res = await fetch("./pieces-autos.json");
const pieces = await res.json();

const article = pieces[0];

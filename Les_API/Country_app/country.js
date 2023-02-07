let countries = [];
let sortButton = "";

const dataFetch = async () => {
  await fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => (countries = data));

  console.log(countries[0]);
  displayCountries();
};

const displayCountries = () => {
  display.innerHTML = countries
    .filter((country) =>
      country.translations.fra.common
        .toLowerCase()
        .includes(search.value.toLowerCase())
    )
    .sort((a, b) => {
      if (sortButton === "alphaA") {
        return a.translations.fra.common.localeCompare(
          b.translations.fra.common
        );
      } else if (sortButton === "alphaZ") {
        return b.translations.fra.common.localeCompare(
          a.translations.fra.common
        );
      }
    })
    .map(
      (country) =>
        `
  <div id="box">
  <img src="${country.flags.png}" />
  <h2>${country.translations.fra.common}</h2>
  <span>Capitale : <strong>${country.capital}</strong></span>
  <span>Population : <strong>${new Intl.NumberFormat(["ban", "id"]).format(
    country.population
  )}</strong></span>
  </div>
  `
    )
    .join("");
};

window.addEventListener("load", dataFetch);
search.addEventListener("input", displayCountries);

triA.addEventListener("click", () => {
  sortButton = "alphaA";
  displayCountries();
});

triZ.addEventListener("click", () => {
  sortButton = "alphaZ";
  displayCountries();
});

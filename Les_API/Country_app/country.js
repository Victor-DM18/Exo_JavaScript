let countries = [];

const dataFetch = async () => {
  await fetch("https://restcountries.com/v3.1/all").then((res) =>
    res.json().then((data) => {
      countries = data;
      console.log(countries[0].population);
    })
  );
};

const displayCountries = async () => {
  await dataFetch();
  display.innerHTML = countries
    .filter((country) =>
      country.translations.fra.common
        .toLowerCase()
        .includes(search.value.toLowerCase())
    )
    .sort()
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

window.addEventListener("load", displayCountries);
search.addEventListener("input", displayCountries);

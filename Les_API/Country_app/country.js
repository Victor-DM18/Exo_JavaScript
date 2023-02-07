let countries = [];
let value = "";

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
    .filter((e) => e.translations.fra.common.includes(value))
    .sort((a, b) => {
      if (sortA()) {
        a - b;
      } else if (sortZ()) {
        b - a;
      }
    })
    .map((country) => {
      for (i = 0; i < countries.lrngth; i++) {
        let number = countries[i].population;
        let nb = new Intl.NumberFormat().format(number);
      }
      return `
  <div id="box">
  <img src="${country.flags.png}" />
  <h2>${country.translations.fra.common}</h2>
  <span>Capitale : <strong>${country.capital}</strong></span>
  <span>Population : <strong>${new Intl.NumberFormat(["ban", "id"]).format(
    country.population
  )}</strong></span>
  </div>`;
    })
    .join("");
};

displayCountries();

search.addEventListener("input", (e) => {
  value = e.target.value;
  displayCountries();
});

const sortA = () => {
  triA.addEventListener("click", (e) => {
    displayCountries().sort((a, b) => a - b);
  });
};
sortA();

const sortZ = () => {
  triZ.addEventListener("click", (e) => {
    displayCountries().sort((a, b) => b - a);
  });
};
sortZ();

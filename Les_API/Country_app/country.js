let countries = [];

const dataFetch = async () => {
  await fetch("https://restcountries.com/v3.1/all").then((res) =>
    res.json().then((data) => {
      countries = data;
      console.log(countries[0]);
    })
  );
};

const displayCountries = async () => {
  await dataFetch();

  display.innerHTML = countries
    .map(
      (country) =>
        `
      <div id="box">
      <img src="${country.flags.png}" />
      <h2>${country.translations.fra.common}</h2>
      <span>Capitale : <strong>${country.capital}</strong></span>
      <span>Population : <strong>${country.population}</strong></span>
      </div>`
    )
    .join("");
};

displayCountries();

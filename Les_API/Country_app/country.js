let countries = [];

const dataFetch = async () => {
  await fetch("https://restcountries.com/v3.1/all").then((res) =>
    res.json().then((data) => {
      countries = data;
      console.log(countries[0].name.common);
    })
  );
};

const displayCountries = async () => {
  await dataFetch();

  display.innerHTML = countries.map(
    (country) =>
      `<div id="box">
    <h2>${country.name.common}</h2>
    </div>`
  );
};

displayCountries();

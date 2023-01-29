// XMLHttpRequest

function reqListener() {
  // pokeApi.textContent = this.responseText;
}

let req = new XMLHttpRequest();

req.onload = reqListener;
req.open("get", "https://pokeapi.co/api/v2/pokemon/charizard", true);
req.send();

// FETCH

fetch("https://pokeapi.co/api/v2/pokemon/charizard")
  .then((response) => {
    response.json().then((data) => {
      console.log(data.stats);
      pokeApi.textContent = data.stats[(5, 5)].base_stat;
      for (i = 0; i < data.stats.length; i++) {
        const stats = `${data.stats[i].stat.name} :
        ${data.stats[i].base_stat}`;

        // console.log(stats);
      }
    });
  })
  .catch((err) => console.log(err));

// FECTH , les options

const myHeader = new Headers();

const init = {
  method: "GET",
  headers: myHeader,
  mode: "cors",
  cache: "default",
};

fetch("lien data", init).then((data) => {});

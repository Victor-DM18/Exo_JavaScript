import Chart, { controllers, Title } from "../node_modules/chart.js/auto";

const title = document.getElementById("title");
const core = document.getElementById("core");
document.body.addEventListener("click", (e) => {
  location.reload();
});

(async function displayStat() {
  await fetch(
    `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 1008 + 1)}/`
  )
    .then((res) => res.json())
    .then((data) => {
      const graph = [
        { stat: data.stats[0].stat.name, count: data.stats[0].base_stat },
        { stat: data.stats[1].stat.name, count: data.stats[1].base_stat },
        { stat: data.stats[2].stat.name, count: data.stats[2].base_stat },
        { stat: data.stats[3].stat.name, count: data.stats[3].base_stat },
        { stat: data.stats[4].stat.name, count: data.stats[4].base_stat },
        { stat: data.stats[5].stat.name, count: data.stats[5].base_stat },
      ];

      new Chart(document.getElementById("stat"), {
        type: "bar",

        data: {
          labels: graph.map((row) => row.stat),
          datasets: [
            {
              label: `${data.name} stats`,
              data: graph.map((row) => row.count),
              backgroundColor: [
                "rgba(255, 99, 132, 0.7)",
                "rgba(54, 162, 235, 0.7)",
                "rgba(255, 206, 86, 0.7)",
                "rgba(75, 192, 192, 0.7)",
                "rgba(153, 102, 255, 0.7)",
                "rgba(237, 127, 16, 0.7)",
                // "rgba(146, 109, 39, 0.7)",
                // "rgba(20, 148, 20, 0.7)",
              ],
              borderRadius: 40,
            },
          ],
        },
        options: {
          indexAxis: "y",
          responsive: true,

          scales: {
            x: {
              max: 250,
              min: 0,
              stepSize: 20,
              ticks: {
                stepSize: 10,
              },
            },
          },
        },
      });
      title.textContent = data.name;
      core.innerHTML = `<img src=${data.sprites.front_default}> </img>`;
    });
})();

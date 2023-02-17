const baseArray = [
  { exo: 0, time: 1 },
  { exo: 1, time: 1 },
  { exo: 2, time: 1 },
  { exo: 3, time: 1 },
  { exo: 4, time: 1 },
  { exo: 5, time: 1 },
  { exo: 6, time: 1 },
  { exo: 7, time: 1 },
  { exo: 8, time: 1 },
  { exo: 9, time: 1 },
];

let exerciceArray = [];

// get localStorage
(() => {
  localStorage.listExercices
    ? (exerciceArray = localStorage.listExercices)
    : (exerciceArray = baseArray);
})();

const tools = {
  pageContent: function (title, content, button) {
    pageTitle.innerHTML = title;
    exercice.innerHTML = content;
    btn.innerHTML = button;
  },
  handleInput: function () {
    document.querySelectorAll("input[type='number']").forEach((input) => {
      input.addEventListener("input", (e) => {
        exerciceArray.map((exercice) => {
          exercice.exo == e.target.id
            ? (exercice.time = parseInt(e.target.value))
            : null;
        });
      });
    });
  },
  handleCross: function () {
    document.querySelectorAll("i[id='cross']").forEach((icon) => {
      icon.addEventListener("click", (e) => {
        exerciceArray.map((exercice) => {
          exercice.exo == e.target.dataset.icon
            ? document.querySelector(`div[class='${exercice.exo}']`).remove()
            : null;
        });
      });
    });
  },
  handleArrow: function () {
    document.querySelectorAll("i[id='arrows']").forEach((arrow) => {
      arrow.addEventListener("click", (e) => {
        let place = 0;
        exerciceArray.map((exercice) => {
          if (exercice.exo == e.target.dataset.exo && place !== 0) {
            [exerciceArray[place], exerciceArray[place - 1]] = [
              exerciceArray[place - 1],
              exerciceArray[place],
            ];
            display.exrcices();
          } else {
            place++;
          }
        });
      });
    });
  },
  handleReload: function () {
    reload.addEventListener("click", (e) => {
      localStorage.removeItem("listExo");
      location.reload();
    });
  },
};

const display = {
  exrcices: function () {
    const mapExo = exerciceArray
      .map((exercice) => {
        return `
      <div id="cards" class=${exercice.exo}>
      <div id="icons">
      <i id="arrows" class="fas fa-arrow-alt-circle-left arrow" data-exo="${exercice.exo}"></i>
      <i id="cross" class="fas fa-times-circle deleteBtn" data-icon=${exercice.exo} ></i>
      </div>
      <div id="timer">
      <input type="number" id=${exercice.exo} min="1" max="10" value=${exercice.time}>
      <spam">min</spam>
      </div>
      <img src="./img/${exercice.exo}.png" />
      </div>
      `;
      })
      .join("");
    tools.pageContent(
      "Paranétrage",
      mapExo,
      "<button id='start'>START</button>"
    );
    tools.handleInput();
    tools.handleCross();
    tools.handleArrow();
    tools.handleReload();
  },
  displayxercice: function () {
    tools.pageContent("Exercice", "", null);
  },
  endExercice: function () {
    tools.pageContent(
      "Terminé !",
      "<button id='restart'>Recommencer</button>",
      "<button id='refresh'>Réinitialiser</button>"
    );
  },
};

display.exrcices();

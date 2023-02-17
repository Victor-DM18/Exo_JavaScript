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
    ? (exerciceArray = JSON.parse(localStorage.listExercices))
    : (exerciceArray = baseArray);
})();

//tools Object & eventListener
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
            ? ((exercice.time = parseInt(e.target.value)), this.storage())
            : null;
        });
      });
    });
  },
  handleCross: function () {
    document.querySelectorAll("i[id='cross']").forEach((icon) => {
      icon.addEventListener("click", (e) => {
        let newExerciceArray = [];
        exerciceArray.map((exercice) => {
          exercice.exo != e.target.dataset.icon
            ? newExerciceArray.push(exercice)
            : null;
        });
        exerciceArray = newExerciceArray;
        display.exrcices();
        this.storage();
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
            this.storage();
          } else {
            place++;
          }
        });
      });
    });
  },
  handleReload: function () {
    exerciceArray = baseArray;
    display.exrcices();
    this.storage();
  },
  storage: function () {
    localStorage.listExercices = JSON.stringify(exerciceArray);
  },
};

// display page
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
    reload.addEventListener("click", () => tools.handleReload());
    start.addEventListener("click", () => this.displayExercice());
  },
  displayExercice: function () {
    tools.pageContent("Exercice", null, null);
    // tools.handleReload();
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

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
  { exo: 10, time: 1 },
  { exo: 11, time: 1 },
  { exo: 12, time: 1 },
  { exo: 13, time: 1 },
  { exo: 14, time: 1 },
  { exo: 15, time: 1 },
  { exo: 16, time: 1 },
  { exo: 17, time: 1 },
  { exo: 18, time: 1 },
  { exo: 19, time: 1 },
  { exo: 20, time: 1 },
];

let exerciceArray = [];
let totalSecond;
let interval;

// get localStorage
(() => {
  localStorage.listExercices
    ? (exerciceArray = JSON.parse(localStorage.listExercices))
    : (exerciceArray = baseArray);
})();

class Exercices {
  constructor() {
    this.index = 0;
    this.minutes = exerciceArray[this.index].time;
    this.seconds = 0;
  }

  displayCountdown() {
    this.seconds = this.seconds < 10 ? "0" + this.seconds : this.seconds;

    setTimeout(() => {
      if (this.minutes === 0 && this.seconds === "00") {
        this.index++;

        if (this.index < exerciceArray.length) {
          this.minutes = exerciceArray[this.index].time;
          this.seconds = 0;
          this.displayCountdown();
        } else {
          return display.endExercice();
        }
      } else if (this.seconds === "00") {
        this.minutes--;
        this.seconds = 59;
        this.displayCountdown();
      } else {
        this.seconds--;
        this.displayCountdown();
      }
    }, 10);

    return (exercice.innerHTML = `
    <div id="countdownCard" >
    <p>${this.minutes} : ${this.seconds}</p>
      <img src="./img/${exerciceArray[this.index].exo}.png" />
      <p>${this.index + 1} / ${exerciceArray.length}</p>
      </div>
    `);
  }
}

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
  countdown: function () {
    const minutes = Math.floor(totalSecond / 60);
    const seconds = totalSecond % 60;
    const sec = seconds < 10 ? "0" + seconds : seconds;

    totalSecond = exerciceArray.time * 60;
  },
  handleReload: function () {
    exerciceArray = baseArray;
    display.exrcices();
    this.storage();
  },

  handleRestart: function () {
    restart.addEventListener("click", () => display.displayExercice());
  },
  handleReturn: function () {
    returnBtn.addEventListener("click", () => display.exrcices());
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
    const exercice = new Exercices();

    tools.pageContent("Let's go !", exercice.displayCountdown(), null);
  },
  endExercice: function () {
    tools.pageContent(
      "Terminé !",
      null,
      `
      "<button id='restart'>Recommencer</button>",
      "<button id='returnBtn'>retour à la liste d'exercices</button>"
      `
    );
    tools.handleRestart();
    tools.handleReturn();
  },
};
display.exrcices();

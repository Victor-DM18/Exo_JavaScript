const exerciceArray = [
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

const page = {
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
    document.querySelectorAll("span[id='icons']").forEach((icon) => {
      icon.addEventListener("click", (e) => {
        console.log("cross : " + e.target);
        document.getElementById("cards").remove();
      });
    });
  },
  handleArrow: function () {
    document.querySelectorAll("span[id='arrows']").forEach((arrow) => {
      arrow.addEventListener("click", (e) => {
        console.log("arrow : " + e.target);
      });
    });
  },
  handleReload: function () {
    reload.addEventListener("click", (e) => {
      location.reload();
    });
  },
};

const display = {
  exrcices: function () {
    const mapExo = exerciceArray
      .map(
        (exercice) =>
          `
      <div id="cards" class=${exercice.exo}>
      <span id="icons" data-icon=${exercice.exo} >&#9747;</span>
      <div id="timer">
      <input type="number" id=${exercice.exo} min="1" max="10" value=${exercice.time}>
      <spam">min</spam>
      </div>
      <img src="./img/${exercice.exo}.png" />
      <span id="arrows" data-exo="${exercice.exo}">&#8678;</span>
      </div>
      `
      )
      .join("");

    page.pageContent(
      "Paranétrage",
      mapExo,
      "<button id='start'>START</button>"
    );
    page.handleInput();
    page.handleCross();
    page.handleArrow();
    page.handleReload();
  },
  displayxercice: function () {
    page.pageContent("Exercice", "", null);
  },
  endExercice: function () {
    page.pageContenta(
      "Terminé !",
      "<button id='restart'>Recommencer</button>",
      "<button id='refresh'>Réinitialiser</button>"
    );
  },
};

display.exrcices();

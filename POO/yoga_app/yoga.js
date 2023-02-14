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
};

const display = {
  exrcices: function () {
    page.pageContent("Paranétrage", "", "<button id='start'>START</button>");
  },
  displayxercice: function () {
    page.pageContent();
  },
  endExercice: function () {
    page.pageContenta();
  },
};

display.exrcices();

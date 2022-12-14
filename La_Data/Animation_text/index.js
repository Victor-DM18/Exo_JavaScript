const target = document.getElementById("target");
let array = [
  "développeur",
  "gamer",
  "designer",
  "programmeur",
  "créatif",
  "bouffon",
];
let wordIndex = 0;
let letterIndex = 0;

const createWord = () => {
  const letter = document.createElement("span");
  target.appendChild(letter);

  letter.textContent = array[wordIndex];
  setTimeout(() => {
    letter.remove();
  }, 3000);
};

const display = () => {
  if (wordIndex >= array.length) {
    wordIndex = 0;
    letterIndex = 0;
    display();
  } else {
    createWord();
    wordIndex++;
    letterIndex = 0;
    setTimeout(() => {
      display();
    }, 3000);
  }
};

display();

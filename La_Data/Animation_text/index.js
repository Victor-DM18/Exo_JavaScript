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

const createLetter = () => {
  const letter = document.createElement("span");
  target.appendChild(letter);

  letter.textContent = array[wordIndex][letterIndex];
  setTimeout(() => {
    target.style.opacity = 0;
    letter.remove();
  }, 3000);
};

const display = () => {
  setTimeout(() => {
    if (wordIndex >= array.length) {
      wordIndex = 0;
      letterIndex = 0;
      display();
    } else if (letterIndex < array[wordIndex].length) {
      target.style.opacity = 1;
      createLetter();
      letterIndex++;
      display();
    } else {
      wordIndex++;
      letterIndex = 0;
      setTimeout(() => {
        display();
      }, 3000);
    }
  }, 100);
};

display();

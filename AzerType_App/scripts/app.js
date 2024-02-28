// ============================================
// EXO CONDITION IF
// ============================================
// let sentence = prompt("enter le mot : " + initialWord[0]);
// if (sentence === initialWord[0]) {
//   score++;
//   console.log("Well done !");
//   console.log("score = " + score);
// } else {
//   console.log("Try again !");
//   console.log("score = " + score);
// }

// sentence = prompt("enter le mot : " + initialWord[1]);

// if (sentence === initialWord[1]) {
//   score++;
//   console.log("Well done !");
//   console.log("score = " + score);
// } else {
//   console.log("Try again !");
//   console.log("score = " + score);
// }

// sentence = prompt("enter le mot : " + initialWord[2]);

// if (sentence === initialWord[2]) {
//   score++;
//   console.log("Well done !");
//   console.log("score = " + score);
// } else {
//   console.log("Try again !");
//   console.log("score final = " + score + " sur " + initialWord.length);
// }

// ============================================
// EXO CONDITION BOUCLE FOR & WHILE
// ============================================
const proposeWord = document.getElementById("word");
const radioChoice = document.querySelectorAll(`input[name = "optionChoice"]`);

const scoreReturn = (actualScore, totalScore) => {
  const score = document.querySelector("#score");

  let updateScore = `Votre score :  ${actualScore} / ${[totalScore]}`;

  score.innerText = updateScore;
};

const displayWord = (word) => {
  proposeWord.innerText = word;
};

const startGame = () => {
  let score = 0;
  let index = 0;
  let choice = "";
  let proposedList = initialWord;

  for (let i = 0; i < radioChoice.length; i++) {
    if (radioChoice[i].checked) {
      choice = radioChoice[i].value;

      break;
    }
  }

  if (choice === "mots") {
    proposedList = initialWord;
  } else if (choice === "phrases") {
    proposedList = initialSentence;
  }

  displayWord(proposedList[index]);

  const inputTxt = document.getElementById("text-input");
  const submitBtn = document.getElementById("submit-input");

  submitBtn.addEventListener("click", () => {
    console.log(inputTxt.value);

    if (inputTxt.value === proposedList[index]) {
      score++;
    }

    inputTxt.value = "";
    index++;
    scoreReturn(score, index);

    if (proposedList[index] === undefined) {
      displayWord("Le jeu est terminé !");
      submitBtn.disabled = true;
    } else {
      displayWord(proposedList[index]);
    }
  });
};

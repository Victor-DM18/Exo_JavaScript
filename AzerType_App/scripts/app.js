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
const radioChoice = document.querySelectorAll("#optionChoice input");
const shareBtn = document.getElementById("share");
const shareSection = document.getElementById("share-score");

const scoreReturn = (actualScore, totalScore) => {
  const score = document.querySelector("#score");

  let updateScore = `Votre score :  ${actualScore} / ${[totalScore]}`;

  score.innerText = updateScore;
};

const displayWord = (word) => {
  proposeWord.innerText = word;
};

const displayMail = (name, email, score) => {
  let mailto = `mailto:${email}?subject=Partage du score Azertype&body=Salut, je suis ${name} et je viens de réaliser le score de ${score} sur le site d'Azertype !`;
  location.href = mailto;
};

const startGame = () => {
  const inputTxt = document.getElementById("text-input");
  const submitBtn = document.getElementById("submit-input");
  const form = document.querySelector("form");

  let score = 0;
  let index = 0;
  let proposedList = initialWord;

  for (let i = 0; i < radioChoice.length; i++) {
    radioChoice[i].addEventListener("change", (e) => {
      if (e.target.value === "mots") {
        proposedList = initialWord;
        displayWord(proposedList[index]);
      } else if (e.target.value === "phrases") {
        proposedList = initialSentence;
        displayWord(proposedList[index]);
      }
      if (proposedList[index] === undefined) {
        displayWord("Le jeu est terminé !");
      }
    });
  }

  displayWord(proposedList[index]);

  submitBtn.addEventListener("click", () => {
    if (inputTxt.value === proposedList[index]) {
      score++;
    }

    inputTxt.value = "";
    index++;
    scoreReturn(score, index);

    if (proposedList[index] === undefined) {
      displayWord("Le jeu est terminé !");
      submitBtn.disabled = true;
      shareBtn.disabled = false;
    } else {
      displayWord(proposedList[index]);
    }
  });

  shareBtn.addEventListener("click", (e) => {
    shareSection.style.display = "flex";
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
  });
};

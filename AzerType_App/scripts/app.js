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

const scoreReturn = (actualScore, totalScore) => {
  const score = document.querySelector("#score");

  let updateScore = `Votre score :  ${actualScore} / ${[totalScore]}`;

  score.innerText = updateScore;
};

const displayWord = (word) => {
  proposeWord.innerText = word;
};

const displayMail = (name, email, score, index) => {
  let mailto = `mailto:${email}?subject=Partage du score Azertype&body=Salut, je suis ${name} et je viens de réaliser le score de ${score} / ${index} sur le site d'Azertype !`;
  location.href = mailto;
};

const nameValidation = (value) => {
  let regex = new RegExp("^[a-zA-z0-9]{2,15}$");
  if (regex.test(value)) {
    return true;
  }
  throw new Error("le nom est trop court");
};

const emailValidation = (email) => {
  let regex = new RegExp("^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,})$");
  if (regex.test(email)) {
    return true;
  }
  throw new Error("l'e-mail n'est pas valide");
};

const formManager = (score, index) => {
  const myName = document.getElementById("my-name");
  const myEmail = document.getElementById("email");

  const email = myEmail.value;
  const name = myName.value;

  try {
    if (nameValidation(name) === true && emailValidation(email) === true) {
      displayMail(name, email, score, index);
    }
  } catch (error) {
    console.log("Une erreur est survenue : " + error.message);
  }
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

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    formManager(score, index);
  });
};

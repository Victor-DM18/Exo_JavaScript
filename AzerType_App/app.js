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

let choice = "";

const scoreReturn = (score, totalScore) => {
  console.log("score = " + score + " sur " + [totalScore]);
};

const makeChoice = () => {
  let choice = prompt("Ecrivez votre choix entre 'phrase' ou 'mot' : ");
  while (choice !== "phrase" && choice !== "mot") {
    choice = prompt("Ecrivez 'phrase' ou 'mot' : ");
  }
  return choice;
};

const loopFor = (list) => {
  for (let i = 0; i < list.length; i++) {
    let sentence = prompt("enter le mot : " + list[i]);
    if (sentence === list[i]) {
      score++;
      console.log("Well done !");
    } else {
      console.log("Try again !");
    }
    scoreReturn(score, i + 1);
  }
};

const startGame = () => {
  let choice = makeChoice();

  if (choice === "mot") {
    loopFor(initialWord);
  } else {
    loopFor(initialSentence);
  }
};

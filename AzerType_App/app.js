const initialWord = ["paris", "noir", "renard"];
const initialSentence = [
  "l'eau ça mouille",
  "que'est ce qu'on mange",
  "vive les phoques",
];

let score = 0;

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
// EXO CONDITION BOUCLE FOR
// ============================================

let choice = "";

while (choice !== "phrase" && choice !== "mot") {
  choice = prompt("Ecrivez votre choix entre 'phrase' ou 'mot' : ");
}

if (choice === "mot") {
  for (let i = 0; i < initialWord.length; i++) {
    let sentence = prompt("enter le mot : " + initialWord[i]);
    if (sentence === initialWord[i]) {
      score++;
      console.log("Well done !");
    } else {
      console.log("Try again !");
    }
    console.log("score = " + score + " sur " + [i + 1]);
  }
} else {
  for (let i = 0; i < initialSentence.length; i++) {
    let sentence = prompt("enter le mot : " + initialSentence[i]);
    if (sentence === initialSentence[i]) {
      score++;
      console.log("Well done !");
    } else {
      console.log("Try again !");
    }
    console.log("score = " + score + " sur " + [i + 1]);
  }
}

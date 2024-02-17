const initialWord = ["paris", "noir", "renard"];

let score = 0;

let sentence = prompt("enter le mot : " + initialWord[0]);

if (sentence === initialWord[0]) {
  score++;
  console.log("Well done !");
  console.log("score = " + score);
} else {
  console.log("Try again !");
  console.log("score = " + score);
}

sentence = prompt("enter le mot : " + initialWord[1]);

if (sentence === initialWord[1]) {
  score++;
  console.log("Well done !");
  console.log("score = " + score);
} else {
  console.log("Try again !");
  console.log("score = " + score);
}

sentence = prompt("enter le mot : " + initialWord[2]);

if (sentence === initialWord[2]) {
  score++;
  console.log("Well done !");
  console.log("score = " + score);
} else {
  console.log("Try again !");
  console.log("score final = " + score + " sur " + initialWord.length);
}

const initialWord = ["paris", "noir", "renard"];

let score = 0;

let sentence = prompt("enter le premier mot : ");

if (sentence === initialWord[0]) {
  score++;
  console.log("Well done !");
  console.log("score = " + score);
} else {
  console.log("Try again !");
  console.log("score = " + score);
}

sentence = prompt("enter le deuxième mot : ");

if (sentence === initialWord[1]) {
  score++;
  console.log("Well done !");
  console.log("score = " + score);
} else {
  console.log("Try again !");
  console.log("score = " + score);
}

sentence = prompt("enter le troisième mot : ");

if (sentence === initialWord[2]) {
  score++;
  console.log("Well done !");
  console.log("score = " + score);
} else {
  console.log("Try again !");
  console.log("score final = " + score + " sur 3");
}

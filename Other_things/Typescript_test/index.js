const txt = document.getElementById("txt");
const list = [
  " un développeur",
  " un gamer",
  " un programmeur",
  " malin",
  " passionné",
  " curieux",
  " un sportif",
  " un clown",
  " gentil",
];
const display = function () {
  let index = 0;
  setInterval(function () {
    if (index >= list.length) {
      index = 0;
      display();
    } else {
      document.querySelector("h2").innerHTML = " Je suis un ".concat(
        list[index],
        "\n      "
      );
      index++;
    }
  }, 3000);
};
display();

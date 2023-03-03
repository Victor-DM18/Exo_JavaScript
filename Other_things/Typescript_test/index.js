var txt = document.getElementById("txt");
var list = [" un développeur", " un gamer", " un programmeur", " malin", " passionné", " curieux", " un sportif", " un clown", " gentil"];
var display = function () {
    var index = 0;
    setInterval(function () {
        txt.textContent = list["".concat(index)];
        index++;
    }, 1000);
};
display();

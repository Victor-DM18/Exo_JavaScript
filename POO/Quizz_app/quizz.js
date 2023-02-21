class Question {
  constructor(question, choices, answer) {
    this.question = question;
    this.choices = choices;
    this.answer = answer;
  }

  isCorrectAnswer(choice) {
    return choice === this.answer;
  }
}

const questions = [
  new Question(
    "Quelle méthode JavaScript permet de filtrer les élément d'un tableau ?",
    ["isNaN()", "filter()", "map()", "reduce()"],
    "filter()"
  ),
  new Question(
    "Quelle méthode transforme du JSON en objet JavaScript ?",
    ["JSOM.stringify()", "JSON.object()", "JSON.parse()", "JSON.js()"],
    "JSON.parse()"
  ),
  new Question(
    "Quelle est le resulta du code suivant : << typeof([1, 23, 18]) >> ?",
    ["Array", "Object", "Number", "undefiined"],
    "Object"
  ),
  new Question("Quelle est le resultat code suivant : << 'Paris' + 18 >> ?"),
  ["NaN", "undefined", "'Paris18'", "0"],
  "'Paris18",
];

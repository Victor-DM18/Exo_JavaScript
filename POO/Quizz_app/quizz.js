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

class Quizz {
  constructor(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionsIndex = 0;
  }

  getQuestionIndex() {
    return this.questions[this.questionsIndex];
  }

  response(answer) {
    this.getQuestionIndex().isCorrectAnswer(answer) ? this.score++ : null;
    this.getQuestionIndex++;
  }

  isEnded() {
    return this.questionsIndex >= this.questions.length;
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

const display = {
  displayQuestions: function (id, question) {
    let text = document.getElementById(id);
    text.innerHTML = question;
  },
  question: function () {
    this.displayQuestions("question", quizz.getQuestionIndex().question);
  },
};

runQuizz = function () {
  if (quizz.isEnded()) {
    null;
  } else {
    display.question();
  }
};

let quizz = new Quizz(questions);
runQuizz();

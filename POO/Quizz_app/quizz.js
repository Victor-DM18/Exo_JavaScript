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

  getQuestionsIndex() {
    return this.questions[this.questionsIndex];
  }

  response(answer) {
    this.getQuestionsIndex().isCorrectAnswer(answer) ? this.score++ : null;
    this.questionsIndex++;
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
  new Question(
    'Quelle est le resultat code suivant : << "Paris" + 18 >> ?',
    ["NaN", "undefined", '"Paris18"', "0"],
    '"Paris18"'
  ),
];

const display = {
  displayQuestions: function (id, question) {
    let text = document.getElementById(id);
    text.innerHTML = question;
  },
  question: function () {
    this.displayQuestions("question", quizz.getQuestionsIndex().question);
  },
  choices: function () {
    let choices = quizz.getQuestionsIndex().choices;

    handleResponse = function (id, response) {
      document.getElementById(id).onclick = function () {
        quizz.response(response);
        runQuizz();
      };
    };
    for (let i = 0; i < choices.length; i++) {
      this.displayQuestions("choice" + i, choices[i]);
      handleResponse("res" + i, choices[i]);
    }
  },
  progression: function () {
    this.displayQuestions(
      "progression",
      `${quizz.questionsIndex + 1} sur ${quizz.questions.length}`
    );
  },
  end: function () {
    this.displayQuestions("question", "Terminé !");
    this.displayQuestions(
      "score",
      `Votre score : ${quizz.score} sur ${quizz.questions.length}`
    );
    this.displayQuestions("responses", "");
    this.displayQuestions("progression", "");
    this.displayQuestions(
      "restart",
      "<button id='btnRestart'>Recommencer</button>"
    );
    btnRestart.addEventListener("click", (e) => {
      location.reload();
    });
  },
};

runQuizz = function () {
  if (quizz.isEnded()) {
    display.end();
  } else {
    display.question();
    display.choices();
    display.progression();
  }
};

let quizz = new Quizz(questions);
runQuizz();

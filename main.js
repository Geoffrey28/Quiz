var home = document.querySelector('.home');
var game = document.querySelector('.game');
var end = document.querySelector('.end');
var homeSelect = document.querySelectorAll('.home_select_items');
var start = document.querySelector('.home_start');
var alert = document.querySelector('.alert_message');
var gameCat = document.querySelector('.game_cat');
var question = document.querySelector('.game_question');
var answers = document.querySelectorAll('.game_answers_items');
var hiddenValues = document.querySelectorAll('.hidden_value');
var selectedCatQuestions = [];
var selectedQuestion = library[1];
var verify;
var noDoublon = [];
var score = document.querySelector('.game_score_text');
var counterScore = 0;
var steps = document.querySelector('.game_step');
var step = 1;
var finalScore = document.querySelector('.end_result');
var endCommentary = document.querySelector('.end_commentary_text');
var endButton = document.querySelector('.end_button');

window.onload = selectCat(), runGame();

start.addEventListener('click', function() {
  if (selectedCatQuestions.length > 0) {
    home.classList.toggle('hide');
    game.classList.toggle('hide');
    selectedQuestion = {};
    counterScore = 0;
    step = 1;
    gameCat.textContent = selectedCatQuestions[0].cat;
    addScore();
    displayGame();
  } else {
    alert.textContent = "Sélectionne une catégorie stp !";
  }
});

endButton.addEventListener('click', function() {
  home.classList.toggle('hide');
  end.classList.toggle('hide');
})

function displayGame() {
  var rand = Math.floor(Math.random()*selectedCatQuestions.length);
  while(noDoublon.includes(rand) & step < 10) {
    rand = Math.floor(Math.random()*selectedCatQuestions.length);
  }
  noDoublon.push(rand);
  selectedQuestion = selectedCatQuestions[rand];
  question.textContent = selectedQuestion.question;
  for (var i = 0; i < selectedQuestion.answers.length; i++) {
    answers[i].children[0].textContent = selectedQuestion.answers[i].text;
    answers[i].children[1].textContent =  selectedQuestion.answers[i].value;
  }
}

function runGame() {
  for (var i = 0; i < answers.length; i++) {
    answers[i].addEventListener('click', function() {
      verify = this.children[1].textContent;
      if (verify === "true") {
        counterScore++;
        addScore();
        displayGame();
      } else {
        displayGame();
      }
      stepCount();
    });
  }
}

function selectCat() {
  for (var a = 0; a < homeSelect.length; a++) {
    homeSelect[a].addEventListener('click', function() {
      alert.textContent = '';
      selectedCatQuestions = [];
      resetClassSelect();
      this.classList.toggle('selected_cat');
      for (var b = 0; b < library.length; b++) {
        if (library[b].cat === this.children[1].textContent) {
          selectedCatQuestions.push(library[b]);
        };
      }
    });
  }
}

function resetClassSelect() {
  for (var c = 0; c < homeSelect.length; c++) {
    homeSelect[c].classList.remove('selected_cat');
  }
}

function finishGame() {
  finalScore.children[1].textContent = counterScore + "/10";
  endCommentary.textContent = end_commentary_data[counterScore];
  game.classList.toggle('hide');
  end.classList.toggle('hide');
  noDoublon = [];
  resetClassSelect();
}

function addScore() {
  score.children[0].textContent = counterScore;
}

function stepCount() {
  if (step < 10) {
    step++;
  } else {
    step = 1;
    finishGame()
  }
  steps.children[0].textContent = step;
}

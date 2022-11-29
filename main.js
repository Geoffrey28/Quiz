var home = document.querySelector('.home');
var game = document.querySelector('.game');
var end = document.querySelector('.end');
var start = document.querySelector('.home_start');
var question = document.querySelector('.game_question');
var answers = document.querySelectorAll('.game_answers_text');
var answer = {};
var score = document.querySelector('.game_score');
var finalScore = document.querySelector('.end_result');
var endButton = document.querySelector('.end_button');

start.addEventListener('click', function() {
  home.classList.toggle('hide');
  game.classList.toggle('hide');
  answer = {};
  displayGame();
});

endButton.addEventListener('click', function() {
  home.classList.toggle('hide');
  end.classList.toggle('hide');
})

function displayGame() {
  answer = {}
}

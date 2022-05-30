'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const setNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const setBackgroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const setWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

const setScore = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); //

  // When there is no input
  if (!guess) {
    displayMessage('No number!');

    // When player wins (i.e. guess is correct)
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    setNumber(secretNumber);
    setBackgroundColor('#60b347');
    setWidth('30rem');
    // high score
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      setScore(score);
    } else {
      displayMessage('You lost the game!');
    }
  }
});

// Rest game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  setScore(score);
  setNumber('?');
  document.querySelector('.guess').value = '';
  setBackgroundColor('#222');
  setWidth('15rem');
});

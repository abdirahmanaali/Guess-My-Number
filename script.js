'use strict';
/*
// To reach the message class, pick the document, define the query, and utilize the CSS rule with a dot and the class name in a string.

console.log(document.querySelector('.message').textContent);

// the .textContent allows us to access it also i can set it to a new value

document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = '13';

document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;

let highScore = 0;

// listening for a click and the second argument is what it should do with it.
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // what this logic is doing is checking if it's a number
  // when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No number!';

    // is the number we guessed matches the random number
    // when player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct number!';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highScore').textContent = highScore;
    }

    // is the number we guessed grater than the random number
    // when guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high';
      // every time we guess we updating the score
      score--;
      // we showing the update score in the app
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }
    // is the number we guessed lower than the random number
    // when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too low';
      // every time we guess we updating the score
      score--;
      // we showing the update score in the app
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;

  secretNumber = Math.trunc(Math.random() * 20 + 1);

  // restoring initial values of the message
  document.querySelector('.message').textContent = 'Start guessing...';

  // restoring initial values of the score
  document.querySelector('.score').textContent = score;

  // restoring initial values of the secretNumber
  document.querySelector('.number').textContent = '?';

  // restoring initial values of the guess input field
  document.querySelector('.guess').value = '';

  // restoring initial values of the backgroundColor
  document.querySelector('body').style.backgroundColor = '#222';

  // restoring initial values of the rem
  document.querySelector('.number').style.width = '15rem';
});

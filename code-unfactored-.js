'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //check if there is a value or not
  //when field isempty, guess is 0, 0 is always falsy, we need  a true -->  use !
  // when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No number!';

    // when player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '😄 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    //style
    document.querySelector('body').style.backgroundColor = '#60b347'; //access style property and name of property(backgroundColor in camelCase)
    document.querySelector('.number').style.width = '30rem'; // when manipulating a style, always need to specify a string;

    //HIGH SCORE FUNTIONALITY
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // when guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
    // when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = ' 💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

//////////////////////////////////////
/* 
CHALLENGE!
Implement a game rest functionality, so that the player can make a new guess! AGAIN BUTTON!!!! 
*/

document.querySelector('.again').addEventListener('click', function () {
  // all texts
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  //
  // all styles
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('number').style.width = '15rem';
});

//////////////////////////////////////
//////////////////////////////////////

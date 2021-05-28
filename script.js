'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = ' The Correct Number ! 😎';
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 15;
document.querySelector('.guess').value = 20;
console.log(document.querySelector('.guess').value); */

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (!guess) {
    displayMessage('❗ No Number! ');
  } else if (guess === number) {
    displayMessage('The Correct Number! 😎');
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (score > highscore)
      document.querySelector('.highscore').textContent = score;
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(guess > number ? '❗ Too High! ' : '❗ Too Low! ');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('❗ You Lost ');
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = 20;
  score = 20;
  document.querySelector('.guess').value = '';
  displayMessage('Guess The Number!');
  document.querySelector('body').style.backgroundColor = '#222';
});

'use strict';
const random = Math.trunc(Math.random() * 20) + 1;
console.log(random);
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';
  } else if (guess === random) {
    document.querySelector('.message').textContent = '🎉 Correct!';
    document.querySelector('body').style.backgroundColor('green');
  } else if (guess > random) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😪 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < random) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😪 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

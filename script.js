"use strict";

let random = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;
const clickAudio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
const winAudio = new Audio("https://www.fesliyanstudios.com/play-mp3/2651");
const loseAudio = new Audio("https://www.fesliyanstudios.com/play-mp3/5637");
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  clickAudio.play();
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No Number!";
  } else if (guess === random) {
    winAudio.play();
    document.querySelector(".message").textContent = "🎉 Correct!";
    document.querySelector(".number").textContent = guess;
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      // document.querySelector(".highscore").value = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess > random) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      loseAudio.play();
      document.querySelector(".message").textContent = "😪 You lost the game!";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }
  } else if (guess < random) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📉 Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      loseAudio.play();
      document.querySelector(".message").textContent = "😪 You lost the game!";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  clickAudio.play();
  score = 20;
  document.querySelector(".score").textContent = 20;
  random = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "#15rem";
});

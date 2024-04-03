"use strict";
<<<<<<< HEAD
let random = Math.trunc(Math.random() * 20) + 1;
=======
const random = Math.trunc(Math.random() * 20) + 1;
console.log(random);
>>>>>>> 83cef9b06f07d3ac3745c3b654f76b4b7fa7e286
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No Number!";
  } else if (guess === random) {
    document.querySelector(".message").textContent = "🎉 Correct!";
    document.querySelector(".number").textContent = guess;
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";
<<<<<<< HEAD
    document.querySelector(".highscore").value = score;
    document.querySelector(".highscore").textContent = score;
=======
>>>>>>> 83cef9b06f07d3ac3745c3b654f76b4b7fa7e286
  } else if (guess > random) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
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
      document.querySelector(".message").textContent = "😪 You lost the game!";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = 20;
<<<<<<< HEAD
  random = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
=======
  //random = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").textContent = "";
>>>>>>> 83cef9b06f07d3ac3745c3b654f76b4b7fa7e286
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});

"use strict";

//Defines variables
let random = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//Adding audio effects
const clickAudio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
const winAudio = new Audio("https://www.fesliyanstudios.com/play-mp3/2651");
const loseAudio = new Audio("https://www.fesliyanstudios.com/play-mp3/5637");
const winAuioSecond = new Audio(
  "https://www.fesliyanstudios.com/play-mp3/4251"
);

//function to change the message on the screen when needed
function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}

//handeling the check button
document.querySelector(".check").addEventListener("click", function () {
  //Generate Random number and convert it to whole number
  const guess = Number(document.querySelector(".guess").value);

  //Play buttons click soundeffects
  clickAudio.play();

  //Check if the Input is empty
  if (!guess) {
    displayMessage("⛔ No Number!");
  }

  //check if the guessing entered by user is = to the random number generated
  else if (guess === random) {
    //Winning sound effects
    winAudio.play();
    winAuioSecond.play();

    //Changing info and style of the screen
    displayMessage("🎉 Correct!");
    document.querySelector(".number").textContent = guess;
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";

    //handeling highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }

  //if guessed number isn't equal to random number
  else if (guess !== random) {
    if (score > 1) {
      displayMessage(guess > random ? "📈 Too high!" : "📉 Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      loseAudio.play();
      displayMessage("😪 You lost the game!");
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
});

//Handeling the Again button and reset eveything to default
document.querySelector(".again").addEventListener("click", function () {
  clickAudio.play();
  score = 20;
  document.querySelector(".score").textContent = 20;
  random = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "#15rem";
});

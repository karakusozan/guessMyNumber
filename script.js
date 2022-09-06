"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const styleMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    styleMessage(`❌ No Number!`);
  } else if (guess === secretNumber) {
    styleMessage(`🎉 Correct Number`);
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      styleMessage(guess > secretNumber ? `📈 Too high...` : `📉 Too low...`);
      score--;
      document.querySelector(".score").textContent = `${score}`;
    } else {
      styleMessage(`💥 Game Over!`);
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  styleMessage(`Start guessing...`);
  document.querySelector(".score").textContent = 20;
  document.querySelector(".number").textContent = `?`;
  document.querySelector(".guess").value = ``;
  document.querySelector("body").style.backgroundColor = "#222222";
  document.querySelector(".number").style.width = "15rem";
});

// Choosing the right one depends on what you need. If you just need to just remove decimals, always use trunc() or bitwise operators.
// The floor(), ceil() and round() are conceptually very different from trunc().

// Math.trunc() cuts away (truncates) the decimal places.
// Math.round() rounds towards closest integer number.
// Math.floor() rounds towards closest lower integer number. 3.5 -> 3 -3.5 -> -4
// Math.ceil() rounds towards closest higher integer number. 3.5 -> 4 -3.5 -> -3

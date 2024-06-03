const rpsArr = ["🪨", "🧻", "✂️"];

function winningResult(computerAnswer, humanAnswer) {
  if (computerAnswer === humanAnswer) {
    return "It is a TIE";
  } else if (
    (computerAnswer === "🪨" && humanAnswer === "✂️") ||
    (computerAnswer === "✂️" && humanAnswer === "🧻") ||
    (computerAnswer === "🧻" && humanAnswer === "🪨")
  ) {
    return "Computer wins!";
  } else {
    return "Human wins. Yay for humans!";
  }
}

function getRandomNumber() {
  return Math.floor(Math.random() * 3);
}
let randomNumber = getRandomNumber();
let randomAnswer = rpsArr[randomNumber];

function getComputerAnswer() {
  getRandomNumber();
  return rpsArr[getRandomNumber()];
}

function getHumanAnswer() {
  getRandomNumber();
  return rpsArr[getRandomNumber()];
}

const humanAnswer = getHumanAnswer();
const computerAnswer = getComputerAnswer();
const winnerResult = winningResult(computerAnswer, humanAnswer);

const playTheGame = () => {
  document.getElementById(
    "computer-throws"
  ).innerHTML = `Computer throws: ${computerAnswer}`;

  setTimeout(() => {
    document.getElementById(
      "human-throws"
    ).innerHTML = `Human throws: ${humanAnswer}`;
  }, 1000);

  setTimeout(() => {
    document.getElementById(
      "winner-is"
    ).innerHTML = `The result is: ${winnerResult}`;
  }, 2000);

  setTimeout(() => {
    document.getElementById("reset-button").removeAttribute("hidden");
  }, 3000);
};

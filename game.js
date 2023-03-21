function getComputerChoice() {
  let num = Math.floor(Math.random() * 3) + 1;
  if (num == 1) {
    return "Rock";
  } else if (num == 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function round(playerClick) {
  let playerChoice = playerClick;
  let computerChoice = getComputerChoice();
  let computerText = "The computer chose " + computerChoice + ",";
  if (playerChoice == "Rock" && computerChoice == "Scissors") {
    return computerText + " You win!";
  } else if (playerChoice == "Rock" && computerChoice == "Paper") {
    return computerText + " you lost.";
  } else if (playerChoice == "Paper" && computerChoice == "Scissors") {
    return computerText + " you lost.";
  } else if (playerChoice == "Paper" && computerChoice == "Rock") {
    return computerText + " You win!";
  } else if (playerChoice == "Scissors" && computerChoice == "Rock") {
    return computerText + " you lost.";
  } else if (playerChoice == "Scissors" && computerChoice == "Paper") {
    return computerText + " You win!";
  } else {
    return computerText + " It's a tie!";
  }
}

function game(results) {
  if (results.endsWith("You win!")) {
    playerScore++;
  }
  if (results.endsWith("you lost.")) {
    computerScore++;
  }
  counter++;
  if (counter == 5) {
    if (playerScore == computerScore) {
      playerScore = 0;
      computerScore = 0;
      counter = 0;
      return "The game ended in a tie.";
    } else if (playerScore > computerScore) {
      playerScore = 0;
      computerScore = 0;
      counter = 0;
      return "You won the game!";
    } else if (playerScore < computerScore) {
      playerScore = 0;
      computerScore = 0;
      counter = 0;
      return "Sorry, you lost the game.";
    }
  }
  return "Player Score: " + playerScore + "  Computer Score: " + computerScore;
}

let playerScore = 0;
let computerScore = 0;
let counter = 0;

const buttons = document.querySelectorAll("button");
const resultsBox = document.querySelector(".results");
const gameScoreBox = document.querySelector(".gameScore");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let results = round(button.id);
    resultsBox.textContent = results;
    let gameScore = game(results);
    gameScoreBox.textContent = gameScore;
  });
});

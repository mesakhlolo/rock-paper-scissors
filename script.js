let playerScore = 0;
let computerScore = 0;

function updateScore() {
  document.getElementById("player-score").textContent = playerScore;
  document.getElementById("computer-score").textContent = computerScore;
}

function computerPlay() {
  const options = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function playRound(playerSelection) {
  const computerSelection = computerPlay();
  const roundResult = document.getElementById("round-result");

  if (playerSelection === computerSelection) {
    document.getElementById("round-result").textContent = "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    roundResult.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    computerScore++;
    roundResult.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
  }

  updateScore();

  if (playerScore === 5 || computerScore === 5) {
    endGame();
  }
}

function endGame() {
  const choices = document.getElementsByClassName("choice");
  for (let i = 0; i < choices.length; i++) {
    choices[i].disabled = true;
  }

  const gameResult = document.getElementById("round-result");
  if (playerScore > computerScore) {
    gameResult.textContent = "Congratulations! You won the game!";
  } else {
    gameResult.textContent = "Sorry, you lost the game. Better luck next time!";
  }
}

updateScore();

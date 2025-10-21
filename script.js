// function to let computer make a choice.
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    computerSelection = "rock";
  } else if (randomNumber == 2) {
    computerSelection = "paper";
  } else {
    computerSelection = "scissors";
  }
  return computerSelection;
}

// function to let human make a choice.
function getHumanChoice() {
  const HumanSelection = prompt("Enter your Choice : Rock, Paper, Scissors");
  return HumanSelection;
}


// SINGLE round Game LOGIC.
function playRound(humanChoice, computerChoice) {
  if (humanChoice == "rock" && computerChoice == "rock") {
    gameState = "Draw";
    console.log(`${gameState}!: ${humanChoice} draws ${computerChoice}`)
  }
  else if (humanChoice == "rock" && computerChoice == "paper") {
    gameState = "Lost";
    console.log(`You ${gameState}! : ${humanChoice} defeated by ${computerChoice}`)
  }
  else if (humanChoice == "rock" && computerChoice == "scissors") {
    gameState = "Won"
    console.log(`You ${gameState}! : ${humanChoice} defeats ${computerChoice}`)
  }
  else if (humanChoice == "paper" && computerChoice == "rock") {
    gameState = "Won"
    console.log(`You ${gameState}! : ${humanChoice} defeats ${computerChoice}`)
  }
  else if (humanChoice == "paper" && computerChoice == "paper") {
    gameState = "Draw"
    console.log(`${gameState}! : ${humanChoice} draws ${computerChoice}`)
  }
  else if (humanChoice == "paper" && computerChoice == "scissors") {
    gameState = "Lost"
    console.log(`You ${gameState}! : ${humanChoice} defeated by ${computerChoice}`)
  }
  else if (humanChoice == "scissors" && computerChoice == "rock") {
    gameState = "Lost"
    console.log(`You ${gameState}! : ${humanChoice} defeated by ${computerChoice}`)
  }
  else if (humanChoice == "scissors" && computerChoice == "paper") {
    gameState = "Won"
    console.log(`You ${gameState}! : ${humanChoice} defeats ${computerChoice}`)
  }
  else {
    gameState = "Draw"
    console.log(`${gameState}! : ${humanChoice} draws ${computerChoice}`)
  }
  return gameState;
}




let humanScore = 0;
let computerScore = 0;
let gameState = "";

// ENTIRE Game LOGIC.
function playGame() {
  for (let index = 0; index < 5; index++) {
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice().toLowerCase();


    const results = playRound(humanChoice, computerChoice);
    scoreCounting(results)

  }

}

function scoreCounting(gameState) {
  if (gameState == "Won") {
    humanScore++;
  } else if (gameState == "Lost") {
    computerScore++;
  }
}

playGame();

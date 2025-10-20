const computerChoice = getComputerChoice();
let humanChoice = getHumanChoice().toLowerCase();

let humanScore = 0;
let computerScore = 0;


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


// The Game LOGIC 
function playRound(humanChoice, computerChoice) {
  if (humanChoice == "rock" && computerChoice == "rock") {
    console.log(`Draw!: ${humanChoice} draws ${computerChoice}`)
  }
  else if (humanChoice == "rock" && computerChoice == "paper") {
    console.log(`You Lost! : ${humanChoice} defeated by ${computerChoice}`)
  }
  else if (humanChoice == "rock" && computerChoice == "scissors") {
    console.log(`You Won! : ${humanChoice} defeats ${computerChoice}`)
  }
  else if (humanChoice == "paper" && computerChoice == "rock") {
    console.log(`You Won! : ${humanChoice} defeats ${computerChoice}`)
  }
  else if (humanChoice == "paper" && computerChoice == "paper") {
    console.log(`Draw! : ${humanChoice} draws ${computerChoice}`)
  }
  else if (humanChoice == "paper" && computerChoice == "scissors") {
    console.log(`You Lost! : ${humanChoice} defeated by ${computerChoice}`)
  }
  else if (humanChoice == "scissors" && computerChoice == "rock") {
    console.log(`You Lost! : ${humanChoice} defeated by ${computerChoice}`)
  }
  else if (humanChoice == "scissors" && computerChoice == "paper") {
    console.log(`You Win! : ${humanChoice} defeats ${computerChoice}`)
  }
  else {
    console.log(`Draw! : ${humanChoice} draws ${computerChoice}`)
  }
}

playRound(humanChoice, computerChoice);




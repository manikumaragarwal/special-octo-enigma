let computerChoice = "";
let caseSensitiveHumanChoice = prompt("Enter your Choice : Rock, Paper, Scissors");
let humanChoice = caseSensitiveHumanChoice.toLocaleLowerCase();


function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    computerChoice = "rock";
  } else if (randomNumber == 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
}
getComputerChoice();


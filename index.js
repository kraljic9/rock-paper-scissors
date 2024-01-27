function playRound(playerSelection, computerSelection){
    if (playerSelection === "Rock" && computerSelection === "Paper") {
      return "Computer Wins"
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
      return "Computer Wins"
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
      return "Computer Wins"
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
      return "Player Wins"
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
      return "Player Wins"
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
      return "Player Wins"
  } else {
    return "Draw"
  }   

}

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3);
    
    switch (randomChoice) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

function getPlayerChoice(){
    let playerChoice = prompt("Choose rock, paper or scissors");

    if (playerChoice === "Paper" || playerChoice === "Rock" || playerChoice === "Scissors") {
        return playerChoice;
    }  else {
        alert("Invalid choise")
        return getPlayerChoice();
    }
}
let computerSelection = getComputerChoice();
let playerSelection = getPlayerChoice();


console.log(playRound(playerSelection, computerSelection));

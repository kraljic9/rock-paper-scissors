let playerScore = 0;
let computerSocre = 0;


function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3);
    
    switch (randomChoice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function playRound(playerSelection, computerSelection){
        if (playerSelection === "rock" && computerSelection === "paper") {
         computerSocre++   
         return "Computer Wins"
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
      computerSocre++
      return "Computer Wins"
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
      computerSocre++
      return "Computer Wins"
  } else if (playerSelection === "paper" && computerSelection === "rock") {
      playerScore++
      return "Player Wins"
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
      playerScore++
      return "Player Wins"
  } else if (playerSelection === "paper" && computerSelection === "rock") {
      playerScore++
      return "Player Wins"
  } else {
    return "Draw"
  }   
}

function getPlayerChoice(){
    let playerChoice = prompt("Choose rock, paper or scissors").toLowerCase();

    if (playerChoice === "paper" || playerChoice === "rock" || playerChoice === "scissors") {
        return playerChoice;
    }  else {
        alert("Invalid choise")
        return getPlayerChoice();
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }

    if (playerScore > computerSocre) {
         console.log("You won")
    } else if (computerSocre > playerScore) {
         console.log("You lose")
    } else {
        console.log("It's a Draw")
    }  
}

game()

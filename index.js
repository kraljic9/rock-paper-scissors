function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3);
    
    switch (randomChoice) {
        case 0:
            return "Rock";
        case 1:
            return "Papper";
        case 2:
            return "Scissors";
    }
}

function getPlayersChoice(){
    let playerChoice = prompt("Choose rock, papper or scissors").toLowerCase;

    if (playerChoice != "rock" && playerChoice != "papper" && playerChoice != "scissors") {
        prompt("Sorry you need to choose between rock, papper and scissors")
    } else if (playerChoice === "") {
        prompt("Sorry you need to choose between rock, papper and scissors")
    }    

    console.log(playerChoice);
}



let computerSelection = getComputerChoice();
let playeSelection = getPlayersChoice();

console.log(computerSelection, playeSelection);
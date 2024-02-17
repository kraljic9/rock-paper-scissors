let playerScore = 0;
let computerSocre = 0;
let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors')
const resultDiv = document.querySelector('.result');
const playerScoreSpan = document.querySelector('.player-score');
const computerSocreSpan = document.querySelector('.computer-score'); 





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

         const p = document.createElement('p');
         p.innerText = "Computer Wins ";
         resultDiv.append(p)
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
      computerSocre++
      const p = document.createElement('p');
      p.innerText = "Computer Wins"
      resultDiv.appendChild(p)
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
      computerSocre++
      const p = document.createElement('p');
      p.innerText = "Computer Wins"
      resultDiv.appendChild(p)
  } else if (playerSelection === "paper" && computerSelection === "rock") {
      playerScore++
      const p = document.createElement('p');
      p.innerText = "Player Wins"
      resultDiv.appendChild(p);
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
      playerScore++
      const p = document.createElement('p');
      p.innerText = 'Player Wins' 
      resultDiv.appendChild(p);
  } else if (playerSelection === "paper" && computerSelection === "rock") {
      playerScore++
      const p = document.createElement('p');
      p.innerText = 'Player Wins'
      resultDiv.appendChild(p);
  } else {
      const p = document.createElement('p');
      p.innerText = "Draw";
      resultDiv.appendChild(p);
  }   
}

const checkWinner = (playerScore, computerSocre) => {
    if (playerScore === 5) {
        const h2 = document.createElement('h2');
        h2.innerText = `You won ${playerScore} to ${computerSocre}!`;
        resultDiv.append(h2);
    } else if (computerSocre === 5) {
        const h2 = document.createElement('h2');
        h2.innerText = `You lost ${playerScore} to ${computerSocre}!`;
        resultDiv.append(h2);
    }
}

const updateScore = (playerScore, computerSocre) => {
    playerScoreSpan.innerText = `Player Score: ${playerScore}`;
    computerSocreSpan.innerText = `Computer Score: ${computerSocre}`;
}

rock.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'rock';
    updateScore(playerScore, computerSocre);
    playRound(playerSelection, computerSelection);
    checkWinner(playerScore, computerSocre);
})

paper.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'paper';
    updateScore(playerScore, computerSocre);
    playRound(playerSelection, computerSelection);
    checkWinner(playerScore, computerSocre);
})

scissors.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'sciccors';
    updateScore(playerScore, computerSocre);
    playRound(playerSelection, computerSelection);
    checkWinner(playerScore, computerSocre);
})






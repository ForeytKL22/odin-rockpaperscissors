let computerScore = 0;
let playerScore = 0;

function computerPlay() {
    let computerTurn = Math.floor(Math.random() * 3);
    if (computerTurn === 1) {
        return("paper");
    } else if (computerTurn === 2) {
        return("rock");
    } else {
        return("scissors");
    }
}


function singleRound(playerSelection, computerSelection) {
   
    playerSelection = prompt("Enter rock, paper, or scissors:");
    computerSelection = computerPlay();

    if (playerSelection === computerSelection) {
        console.log("TIE!")
    } else if ((playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper")) {
        console.log("You with this round!")
    } else if ((playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "scissors" && computerSelection === "rock")) {
        console.log("You lose this round! Computer wins!")
    } 

    console.log(playerSelection)
    console.log(computerSelection)
} 

singleRound();

// function game(playerSelection, computerSelection) {
    
// }



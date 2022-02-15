let computerScore = 0;
let playerScore = 0;
let roundWinner = '';

let rockBtn = document.getElementById('rock');
let paperBtn = document.getElementById('paper');
let scissorsBtn = document.getElementById('scissors');
let results = document.getElementById('results');


rockBtn.addEventListener('click', () => playRound('rock', computerPlay));
paperBtn.addEventListener('click', () => playRound('paper', computerPlay));
scissorsBtn.addEventListener('click', () => playRound('scissors', computerPlay));

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


function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();

    if (playerSelection === computerSelection) {
        tie();
    } else if ((playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper")) {
        win();
    } else if ((playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "scissors" && computerSelection === "rock")) {
        lose();
    } 
} 

function win() {
    playerScore++;
    computerScore--;
    results.textContent = "You win this round! Current score: You: " + `${playerScore}` + "Computer: " + `${computerScore}`
}

function tie() {
    results.textContent = "TIE Current score: You: " + `${playerScore}` + "Computer: " + `${computerScore}`
}

function lose() {
    playerScore--;
    computerScore++;
    results.textContent = "You lose this round! Computer wins! Current score: You: " + `${playerScore}` + "Computer: " + `${computerScore}`
}



// const buttons = document.querySelectorAll('button');

// buttons.forEach((button) => {
//     button.addEventListener('click', (e) => {
        
//     })
// })


// game();

playRound();



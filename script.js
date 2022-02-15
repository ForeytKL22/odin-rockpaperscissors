let computerPoints = 0;
let playerPoints = 0;

let rockBtn = document.getElementById('rock');
let paperBtn = document.getElementById('paper');
let scissorsBtn = document.getElementById('scissors');
let results = document.getElementById('results');
let userScore = document.querySelector('.user-score');
let comptuerScore = document.querySelector('.computer-score');
let endGameDiv = document.querySelector('.end-game');
let btnDiv = document.createElement('div');
let restartGame = document.createElement('button');

restartGame.className = "restart-button";
btnDiv.className = "end-div";

restartGame.textContent = 'Restart';

rockBtn.addEventListener('click', () => playRound('rock', computerPlay));
paperBtn.addEventListener('click', () => playRound('paper', computerPlay));
scissorsBtn.addEventListener('click', () => playRound('scissors', computerPlay));


restartGame.addEventListener('click', () => clearOut());



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
    playerPoints++;
    results.textContent = "You win this round!"
    userScore.textContent = ` ${playerPoints}`
    comptuerScore.textContent = ` ${computerPoints}`;
    endGame();
}

function tie() {
    results.textContent = "TIE"
    userScore.textContent = ` ${playerPoints}`
    comptuerScore.textContent = ` ${computerPoints}`;
    endGame();
}

function lose() {
    computerPoints++;
    results.textContent = "You lose this round! Computer wins!"
    userScore.textContent = ` ${playerPoints}`
    comptuerScore.textContent = ` ${computerPoints}`
    endGame();
}

function endGame() {
    if (playerPoints === 5) {
        endGameDiv.textContent = "CONGRATS, YOU'VE WON!"
        restart();
    } else if (computerPoints === 5) {
        endGameDiv.textContent = "COMPUTER WINS :("
        restart();
    } 
}

function restart() {
    endGameDiv.appendChild(btnDiv);
    btnDiv.appendChild(restartGame);
}

function clearOut() {
    computerPoints = 0;
    playerPoints = 0;
    userScore.textContent = '';
    comptuerScore.textContent = '';
    endGameDiv.textContent = '';
    results.textContent = '';
}











let playerScore = 0;
let computerScore = 0;
let round = 1;
const maxRounds = 5;

const buttons = document.querySelectorAll('button');
const currentRound = document.querySelector('#current-round');
const roundResult = document.querySelector('#round-result');
const score = document.querySelector('#score');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        game(button.textContent);
    });
});

function game(buttonText) {
    currentRound.textContent = returnCurrentRound();
    roundResult.textContent = playRound(buttonText, computerChoice());
    score.textContent = returnScore();
}

function returnCurrentRound() {
    return `Round: ${round}`;
}

function returnScore () {
    return `Player ${playerScore} - ${computerScore} Computer`;
}

function computerChoice() {
    const choice = ['Rock', 'Paper', 'Scissors'];
    return choice[randomNumber(choice.length)];
}

function randomNumber(maxExclusiveNumber) {
    return Math.floor(Math.random() * maxExclusiveNumber)
}

function playRound(playerSelection, computerSelection) {
    switch (true) {
        case playerSelection === 'Rock' && computerSelection === 'Scissors':
        case playerSelection === 'Paper' && computerSelection === 'Rock':
        case playerSelection === 'Scissors' && computerSelection === 'Paper':
            playerScore++;
            round++;
            return (`[Player] ${playerSelection} vs ${computerSelection} [Computer]\nYou Win! ${playerSelection} beats ${computerSelection}.`);
        case playerSelection === 'Rock' && computerSelection === 'Paper':
        case playerSelection === 'Paper' && computerSelection === 'Scissors':
        case playerSelection === 'Scissors' && computerSelection === 'Rock':
            round++;
            computerScore++;
            return (`[Player] ${playerSelection} vs ${computerSelection} [Computer]\nYou Lose! ${computerSelection} beats ${playerSelection}.`);
        case playerSelection === computerSelection:
            return (`[Player] ${playerSelection} vs ${computerSelection} [Computer]\nYou Draw! you both picked ${playerSelection}, try again!`);
    }
}

// function showFinalScores(playerFinalScore, computerFinalScore) {
//     if (playerFinalScore > computerFinalScore) {
//         return `You win the game!\nFinal Score: Player [${playerFinalScore} - ${computerFinalScore}] Computer.`    
//     } else if (playerScore < computerFinalScore) {
//         return `You Lose the game!\nFinal Score: Player [${playerFinalScore} - ${computerFinalScore}] Computer.`
//     } else {
//         return `You Draw the game!\nFinal Score: Player [${playerFinalScore} - ${computerFinalScore}] Computer.`
//     }
// }
let userScore = 0;
let computerScore = 0;
let round = 1;
let gameFinished = false;
const maxRounds = 5;

const roundParagraph = document.querySelector('.round > p');
const userScoreSpan = document.getElementById('user-score')
const computerScoreSpan = document.getElementById('computer-score')
const resultParagraph = document.querySelector('.result > p');
const choices = document.querySelectorAll('.choice');
const actionMessageParagraph = document.getElementById('action-message');
const resetButton = document.getElementById('reset-btn');

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        game(choice.id);
    });
});

resetButton.addEventListener('click', (e) => {
    resetGame()
});

function game(userChoice) {
    if(!gameFinished) {
        resultParagraph.textContent = playRound(userChoice, computerChoice());
        scoreManager();
        roundManager();
    }
}

function roundManager() {
    if(round > maxRounds){
        gameFinished = true;
        actionMessageParagraph.style = 'font-size: 40px';
        actionMessageParagraph.textContent = returnFinalScore();
        resetButton.style.display = 'block';
    } else {
        roundParagraph.textContent = `Round ${round}`;
    }
}

function scoreManager() {
    userScoreSpan.textContent = userScore;
    computerScoreSpan.textContent = computerScore;
}

function playRound(userSelection, computerSelection) {
    switch (true) {
        case userSelection === 'rock' && computerSelection === 'scissors':
        case userSelection === 'paper' && computerSelection === 'rock':
        case userSelection === 'scissors' && computerSelection === 'paper':
            userScore++;
            round++;
            return (`You Win! ${userSelection} beats ${computerSelection}.`);
        case userSelection === 'rock' && computerSelection === 'paper':
        case userSelection === 'paper' && computerSelection === 'scissors':
        case userSelection === 'scissors' && computerSelection === 'rock':
            computerScore++;
            round++;
            return (`You Lose! ${computerSelection} beats ${userSelection}.`);
        case userSelection === computerSelection:
            return (`You Draw! you both picked ${userSelection}, try again!`);
    }
}

function computerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    return choice[randomNumber(choice.length)];
}

function randomNumber(maxExclusiveNumber) {
    return Math.floor(Math.random() * maxExclusiveNumber)
}

function returnFinalScore() {
    if (userScore > computerScore) {
        return `You win the game!`;   
    } else if (userScore < computerScore) {
        return `You Lose the game!`;
    } else {
        return `You Draw the game!`;
    }
}

function resetGame() {
    userScore = 0;
    computerScore = 0;
    round = 1;
    gameFinished = false;
    actionMessageParagraph.textContent = 'Make your move.';
    actionMessageParagraph.style = 'font-size: 30px';
    resultParagraph.textContent = '';
    scoreManager();
    roundManager();
    resetButton.style.display = 'none';
}
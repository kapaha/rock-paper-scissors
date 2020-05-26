let playerScore = 0;
let computerScore = 0;

game();

function computerChoice() {
    const choice = ['Rock', 'Paper', 'Scissors'];
    return choice[randomNumber(choice.length)];
}

function playerChoice() {
    let choice = prompt('Please Enter: Rock, Paper or Scissors.');

    choice = choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();

    if (choice != 'Rock' && choice != 'Paper' && choice != 'Scissors') {
        alert('Please enter a valid choice!')
        return playerChoice();
    } else {
        return choice;
    }
}

function playRound() {
    // get user input
    let playerSelection = playerChoice();

    // get computer input
    let computerSelection = computerChoice();

    switch (true) {
        case playerSelection === 'Rock' && computerSelection === 'Scissors':
        case playerSelection === 'Paper' && computerSelection === 'Rock':
        case playerSelection === 'Scissors' && computerSelection === 'Paper':
            playerScore++;
            return (`[Player] ${playerSelection} vs ${computerSelection} [Computer]\nYou Win! ${playerSelection} beats ${computerSelection}.`);
            break;
        case playerSelection === 'Rock' && computerSelection === 'Paper':
        case playerSelection === 'Paper' && computerSelection === 'Scissors':
        case playerSelection === 'Scissors' && computerSelection === 'Rock':
            computerScore++;
            return `[Player] ${playerSelection} vs ${computerSelection} [Computer]\nYou Lose! ${computerSelection} beats ${playerSelection}.`;
            break;
        case playerSelection === computerSelection:
            console.log(`[Player] ${playerSelection} vs ${computerSelection} [Computer]\nYou Draw! you both picked ${playerSelection}, try again!`);
            return playRound();
            break;
    }
}

function game() {
    let currentRound = 1;
    const maxRounds = 5;

    while(currentRound <= maxRounds) {
        console.log(`Round ${currentRound}`)
        console.log(playRound());
        console.log('');
        currentRound++ ;
    }
    console.log(showFinalScores(playerScore, computerScore))
}

function randomNumber(maxExclusiveNumber) {
    return Math.floor(Math.random() * maxExclusiveNumber)
}

function showFinalScores(playerFinalScore, computerFinalScore) {
    if (playerFinalScore > computerFinalScore) {
        return `You win the game!\nFinal Score: Player [${playerFinalScore} - ${computerFinalScore}] Computer.`    
    } else if (playerScore < computerFinalScore) {
        return `You Lose the game!\nFinal Score: Player [${playerFinalScore} - ${computerFinalScore}] Computer.`
    } else {
        return `You Draw the game!\nFinal Score: Player [${playerFinalScore} - ${computerFinalScore}] Computer.`
    }
}
const userChoice = document.getElementById('userChoice');
const computerChoice = document.getElementById('computerChoice');
const resultDisplay = document.getElementById('result');

const possibleChoices = document.querySelectorAll('button');
let userChose;
let computerChose;
let result;
possibleChoices.forEach(possible => possible.addEventListener('click', (e) => {
    userChose = e.target.innerHTML;
    userChoice.innerHTML = userChose;
    generateComputerChoice();
    getResult();
}
))

function generateComputerChoice() {
    let x;
    x = Math.floor(Math.random()*3) + 1;
    switch(x) {
        case 1:
        computerChose = 'Rock';
        break;
        case 2:
        computerChose = 'Paper';
        break;
        case 3:
            computerChose = 'Scissors';
            break;
    }
    computerChoice.innerHTML = computerChose;
}

function getResult() {
    if (computerChose === userChose) {
        result = 'Draw';
    }
    if (computerChose === 'Rock' && userChose === 'Paper') {
        result = 'You Win';
    }
    if (computerChose === 'Rock' && userChose === 'Scissors') {
        result = 'You Lost';
    }
    if (computerChose === 'Paper' && userChose === 'Rock') {
        result = 'You Lost';
    }
    if (computerChose === 'Scissors' && userChose === 'Paper') {
        result = 'You Lost';
    }
    if (computerChose === 'Paper' && userChose === 'Scisoors') {
        result = 'You Win';
    }
    if (computerChose === 'Scissors' && userChose === 'Rock') {
        result = 'You Win';
    }
    resultDisplay.innerHTML = result;
}
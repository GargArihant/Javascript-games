const cardArray = [
    {name:'cheeseburger',
    img: 'images/cheeseburger.png'},
    {name:'fries',
    img: 'images/fries.png'},
    {name:'hotdog',
    img: 'images/hotdog.png'},
    {name:'ice-cream',
    img: 'images/ice-cream.png'},
    {name:'milkshake',
    img: 'images/milkshake.png'},
    {name:'pizza',
    img: 'images/pizza.png'},
    {name:'cheeseburger',
    img: 'images/cheeseburger.png'},
    {name:'fries',
    img: 'images/fries.png'},
    {name:'hotdog',
    img: 'images/hotdog.png'},
    {name:'ice-cream',
    img: 'images/ice-cream.png'},
    {name:'milkshake',
    img: 'images/milkshake.png'},
    {name:'pizza',
    img: 'images/pizza.png'},
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');
let cardChosen = [];
let cardChosenIds = [];
let cardsWon = [];

function createGrid() {
    for(i=0;i< cardArray.length;i++) {
        const card = document.createElement('img');
        card.setAttribute('src','images/blank.png');
        card.setAttribute('data-id',i);
        card.addEventListener('click',flipCard);
        gridDisplay.appendChild(card);
    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id');
    cardChosen.push(cardArray[cardId].name);
    cardChosenIds.push(cardId);
    this.setAttribute('src',cardArray[cardId].img);
    if(cardChosen.length === 2){
        setTimeout( checkmatch,500);
    }
}

function checkmatch() {
    const cards = document.querySelectorAll('img');
    const first = cardChosenIds[0];
    const two = cardChosenIds[1];

    if(first == two){
        cards[first].setAttribute('src','images/blank.png');
        cards[two].setAttribute('src','images/blank.png');
        alert('You have clicked the same image');
    }

    else if(cardChosen[0] === cardChosen[1]){
        alert('You found a match');
        cards[first].setAttribute('src','images/white.png');
        cards[two].setAttribute('src','images/white.png');
        cards[first].removeEventListener('click',flipCard);
        cards[two].removeEventListener('click',flipCard);
        cardsWon.push(cardChosen);
    } else {
        cards[first].setAttribute('src','images/blank.png');
        cards[two].setAttribute('src','images/blank.png');
    }
    resultDisplay.textContent = cardsWon.length;
    cardChosen = [];
    cardChosenIds = [];

    if(cardsWon.length == cardArray.length/2){
        resultDisplay.textContent = 'Congratulations! You found them all.';
    }
}

createGrid();

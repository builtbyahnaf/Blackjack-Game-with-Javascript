let player = {
    name : "Ahnaf",
    chips : 989889687898998
}

let sum = 0;
let cards = [];
let hasBlackJack = false;
let isAlive = false;
let msg = "fgg";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let ncBtn = document.getElementById("new-card");
let playerEl = document.getElementById("player-el");




playerEl.textContent = player.name + " : $" + player.chips;

function startGame(){
    let firstCard = getRandomCard();
let secondCard = getRandomCard();
cards = [firstCard, secondCard];
sum = firstCard + secondCard;
isAlive = true;
hasBlackJack = false;
    renderGame();
}

function getRandomCard() {
    let randCard = Math.floor(Math.random() * 13 + 1);
    //return randCard;
    if (randCard == 1) {
        return 11;
    } else if (randCard >= 11) {
        return 10;
    } else {
        return randCard;
    }
}

function renderGame(){
    sumEl.textContent = "Sum : " + sum;
    cardsEl.textContent = "Cards : ";
    for (let index = 0; index < cards.length; index++) {
        cardsEl.textContent += cards[index] + " ";
    }
   if (sum <= 20) {
    msg = "Do you want to draw a new card?";
} else if (sum === 21){
    msg = "Yay! You've got BlackJack";
    hasBlackJack = true;
} else if (sum > 21){
    msg = "You're eliminated!";
    isAlive = false;
}
messageEl.textContent = msg; 
}
function newCard(){
    if(isAlive && !hasBlackJack){
    let nCard = getRandomCard();
    cards.push(nCard);
    sum += nCard;
    renderGame();
    } else {
        console.log("error")
    }
    
}
function reset(){
    location.reload();
    renderGame();
}
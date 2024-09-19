const figuresCards = ["bobross","explody", "fiesta", "metal", "revertit","triplet", "unicorn"];
let cardsNumber = howManyCards();
let clickCount = 0;
let cardsPair = [];
const matchedCards = [];

function compare(){
    return Math.random() - 0.5;
}

function shuffleList(){
    let cardsList = document.querySelector('ul');
    for(let i=0; i< cardsList.children.length;i++){
       cardsList.appendChild(cardsList.children[Math.random() * i | 0]);
    }
}

shuffleList()

function howManyCards(){
    
    let cards = prompt("How many cards?");
    let condition = (cards%2 === 0 && cards >= 4 && cards <= 14);

    if(condition === false){

        do {
            cards = prompt("How many cards?");
            condition = (cards%2 === 0 && cards >= 4 && cards <= 14);
        }

        while(condition === false);}        
 

    return cards;
}

function selectCards(){
    let shuffled  = figuresCards.sort(compare);
    let figuresCardsDraw = [];

    for(let index=0; index < (cardsNumber/2); index++){
        figuresCardsDraw.push(shuffled[index]+"1");
        figuresCardsDraw.push(shuffled[index]+"2");
    }

   return figuresCardsDraw;

}

function cardDealer(){
    const chosenCards = selectCards();
    const deltCards = [];
    
  for(let counter=0;counter < chosenCards.length; counter++){
        deltCards[counter] = document.querySelector("." + chosenCards[counter]);
        deltCards[counter].classList.remove('hidden');
        
    };
        
}

cardDealer()


function clickToturn(element){
   
    element.classList.toggle('click');
    element.classList.add('selected');
    element.classList.add('turned');
    selected = document.querySelector('.selected');

    if(selected !== null){
            cardsPair.push(element.querySelector('img'));

    }

    clickCount++;
}

function removeClick(){
    const chosen = document.querySelectorAll('.notMatch');
    chosen.forEach((selectedOne) => {selectedOne.classList.remove('click');selectedOne.classList.remove('turned')});
}

function addNoMatch(){
    const notMatch = document.querySelectorAll('.turned');
    notMatch.forEach((notMatched) => {notMatched.classList.add('notMatch')});
}

function removeNoMatch(){
    const unpaired = document.querySelectorAll('.turned');
    unpaired.forEach((unpair) => {unpair.classList.remove('notMatch');unpair.classList.remove('turned')});    
}

function assessPair(){
    
    if(cardsPair.length === 2 && matchedCards.length < cardsNumber){
       let card1 = cardsPair[0].getAttribute('src');
       let card2 = cardsPair[1].getAttribute('src');
            if(card1 !== card2){
                addNoMatch();
                setTimeout(removeClick, 1000);
                cardsPair = [];
                
            }
            else{
                removeNoMatch();
                matchedCards.push(card1,card2);
                cardsPair = [];
            }

        return matchedCards;          
    }
   
}  
function youWin(){
    alert(`You won! Took you only ${clickCount} attempts`)
   
}

function gameWon(){
    let numberOfMatches = (matchedCards.length);
    
    if( cardsNumber == matchedCards.length){
        setTimeout(youWin,1500)
        
    }
        
}




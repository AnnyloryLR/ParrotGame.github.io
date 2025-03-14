const figuresCards = ["bobross","explody", "fiesta", "metal", "revertit","triplet", "unicorn"];
let cardsNumber = howManyCards();
let clickCount = 0;
let cardsPair = [];
let matchedCards = [];

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
    
    let cards = prompt("Com quantas cartas quer jogar?");
    let condition = (cards%2 === 0 && cards >= 4 && cards <= 14);

    if(condition === false){

        do {
            cards = prompt("Com quantas cartas quer jogar?");
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
            let oneCard = element.querySelector('img')
            element.classList.remove('selected');
            cardsPair.push(oneCard);
           
    }

    clickCount++;
}

function removeClick(){
    const chosen = document.querySelectorAll('.notMatch');
    chosen.forEach((selectedOne) => {selectedOne.classList.remove('click')});
}

function addNoMatch(){
    const notMatch = document.querySelectorAll('.turned');
    notMatch.forEach((notMatched) => {notMatched.classList.add('notMatch')});
}

function removeNoMatch(){
    const unpaired = document.querySelectorAll('.turned');
    unpaired.forEach((unpair) => {unpair.classList.remove('notMatch')}); 
    unpaired.forEach((unpair) => {unpair.classList.remove('turned')});   
}

function assessPair(){
    if(cardsPair.length >= 2 ){
        let card1 = cardsPair[cardsPair.length -1].getAttribute('src');
        let card2 = cardsPair[cardsPair.length -2].getAttribute('src');
            
            if(card1 !== card2){
                addNoMatch();
                setTimeout(removeClick, 1000);
                cardsPair = [];
                
            }
            else if(!matchedCards.includes(card1) && !matchedCards.includes(card2)){
                removeNoMatch();
                matchedCards.push(card1,card2);
                cardsPair = [];
            }
            
        return matchedCards;          
    }
}

    
function youWin(){
    alert(`Você ganhou em ${clickCount} jogadas!`);
    let finished = document.querySelector(".finished");
    finished.classList.remove("unseen");
        
   
}

function gameWon(){
    if(parseInt(cardsNumber) === parseInt(matchedCards.length)){
        setTimeout(youWin,500);
        matchedCards.push('you won, stop!');
        
    }
   
}

function reloading() {
    location.reload();
}


  




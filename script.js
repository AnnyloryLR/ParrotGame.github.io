const figuresCards = ["bobross","explody", "fiesta", "metal", "revertit","triplet", "unicorn"]


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
    condition = (cards%2 === 0 && cards >= 4 && cards <= 14);

    if(condition === false){

        do {
            cards = prompt("How many cards?")
            condition = (cards%2 === 0 && cards >= 4 && cards <= 14);
        }

        while(condition === false); }        
 

    return cards;
}

function selectCards(){
    let cardsNumber = howManyCards()
    let shuffled  = figuresCards.sort(compare);
    let figuresCardsDraw = [];

    for(i=0; i< (cardsNumber/2); i++){
        figuresCardsDraw.push(shuffled[i]+"1");
        figuresCardsDraw.push(shuffled[i]+"2");
    }

   return figuresCardsDraw;

}


function cardDealer(){
    const chosenCards = selectCards()
    const deltCards = []
    
  
  for(i=0;i< chosenCards.length; i++){
        deltCards[i] = document.querySelector("." + chosenCards[i]);
        deltCards[i].classList.remove('hidden')
        
    };
        

}

cardDealer()

function clickToturn(elemento){
    elemento.classList.toggle('click')
    

}

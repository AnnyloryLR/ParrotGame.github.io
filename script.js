figuresCards = ["bobross","explody", "fiesta", "metal", "revertit","triplet", "unicorn"]

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

function compare(){
    return Math.random() - 0.5;
}

function selectCards(){
    let cardsNumber = howManyCards()
    let shuffled  = figuresCards.sort(compare);
    figuresCardsDraw = [];

    for(i=0; i< (cardsNumber/2); i++){
        figuresCardsDraw.push(shuffled[i]);
    }

   return figuresCardsDraw;

}

function cardDealer(){
   let chosenCards = selectCards()
  
   for(i=0;i< chosenCards.length; i++){
        var deltCards = document.querySelectorAll("." + chosenCards[i]);
        deltCards.forEach(node => {
            node.classList.remove('hidden');

        });
        
    }

 }

 cardDealer()

/*function clickToturn(){}*/
 
/*(document.querySelector("."+ chosenCards[i]+"1")).classList.remove("hidden")
     //card1.classList.remove("hidden")
     //console.log("."+ chosenCards[i]+"1")
     //let card2 = document.querySelector("."+ chosenCards[i]+"2")
     //card2.classList.remove("hidden")
     //console.log("."+ chosenCards[i]+"2")*/
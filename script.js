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
        figuresCardsDraw.push(shuffled[i]+"1");
        figuresCardsDraw.push(shuffled[i]+"2");
    }

   return figuresCardsDraw;

}


 function cardDealer(){
    const chosenCards = selectCards()
    const deltCards = []
    let finalShuffle = []
  
  for(i=0;i< chosenCards.length; i++){
        deltCards[i] = document.querySelector("." + chosenCards[i]);
        console.log(deltCards[i])
        //finalShuffle.push(deltCards[i]);

    };
        
    

    finalShuffle = deltCards.sort(compare)
    
            
    console.log(finalShuffle)
        for(i=0;i<finalShuffle.length;i++){
            (finalShuffle[i]).classList.remove('hidden')
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
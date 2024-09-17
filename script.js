function compare(){
    return Math.random() - 0.5;
}
let figuresCards = ["bobross","explody", "fiesta", "metal", "revertit","triplet", "unicorn"]
/*function test(){

    let cardsList = document.querySelector('ul');
    for(let i=0; i< cardsList.children.length;i++){
       cardsList.appendChild(cardsList.children[Math.random() * i | 0]);
    }
    console.log(cardsList.children.length)


    
    let figuresCards=[]
    inbetween = []
    let shuffled = []
    figuresCards = document.querySelectorAll('li')
//
    console.log(figuresCards)
    console.log(figuresCards.length)
    figuresCards = Array.from(figuresCards)
    

    shuffled = figuresCards.sort(compare)*/

   /* for(let index= 0; index< cardsList.children.length; index++){
        cardsList.childNodes[index]//.children//.children.classList

    }


    
    }
    test()*/

    
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

/*function clickToturn(){}
 
(document.querySelector("."+ chosenCards[i]+"1")).classList.remove("hidden")
     card1.classList.remove("hidden")
     console.log("."+ chosenCards[i]+"1")
     let card2 = document.querySelector("."+ chosenCards[i]+"2")
     card2.classList.remove("hidden")
     console.log("."+ chosenCards[i]+"2")*/
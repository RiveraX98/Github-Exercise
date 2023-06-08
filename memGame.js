const gameContainer = document.getElementById("game")
const reset = document.querySelector("#reset")
let card1= null
let card2= null
let maxNumCards = 2
let card1Color = null
let card2Color = null
let flipped = []
let matched = []


const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];




function shuffle(array) {
    let counter = array.length;
  
    // While there are elements in the array
    while (counter > 0) {
      // Pick a random index
      let index = Math.floor(Math.random() * counter);
  
      // Decrease counter by 1
      counter--;
  
      // And swap the last element with it
      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }
  
    return array;
  }


  let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color,"card");
    //newDiv.setAttribute("style",`background-color: ${color} ;`)
    gameContainer.append(newDiv);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", chooseCard1)
    //newDiv.addEventListener("dblclick", chooseCard2)
  
       // const selectedCard = e.target
     // selectedCard.style.backgroundColor= e.target.classList[0]

       //setTimeout(e.target.classList.toggle("clicked"),2000)
    }
}
  

  

let allCards = document.querySelectorAll(".card")
function chooseCard1(e) {
      if (maxNumCards >1){
         card1 = e.target
         maxNumCards--
         card1.style.backgroundColor= card1.classList[0]
         card1Color =  card1.style.backgroundColor
        flipped.push(card1)
      
       
    }
        else if (maxNumCards <=1 && maxNumCards>0 && e.target!== card1){
            card2 = e.target
           maxNumCards--
           card2.style.backgroundColor= card2.classList[0]
           card2Color = card2.classList[0]
           flipped.push(card2)
         
     setTimeout(compareCards,1000,card1Color,card2Color);
   }
   

}


function compareCards(card1Color,card2Color){
if(card1Color === card2Color){
    flipped.pop()
    flipped.pop()
    matched.push(card1,card2)
    maxNumCards +=2

    console.log ("card same")
}

else {
   setTimeout(function () {
        card1.style.backgroundColor = "lightblue"
        card2.style.backgroundColor= "lightblue"
        maxNumCards+=2
        console.log("wrongCards")
      
})}



if (matched.length === 10){
   let gameOver =  document.createElement("h1")
   gameOver.classList.add("over")
   gameOver.innerText = "GAME OVER !!"
   gameContainer.append(gameOver)

}
}

reset.addEventListener("click",function(){
    console.log("im clicked")

     card1= null
     card2= null
     maxNumCards = 2
     card1Color = null
     card2Color = null
     flipped = []
     matched = []
     
let gameOver = document.querySelector(".over")
gameOver.remove()

 let cards = document.querySelectorAll(".card")
    for (let card of cards){
        card.style.backgroundColor = "lightblue"
    }
 })


createDivsForColors(shuffledColors);
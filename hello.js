let h1 = document.querySelector("h1")
let letters = document.querySelectorAll(".letter") ;

function randomColor () {
    let r = Math.floor(Math.random () * 256 );
    let g = Math.floor(Math.random () * 256 );
    let b = Math.floor(Math.random () * 256 );
    return `rgb(${r},${g},${b})`
}

//setInterval (function () {
  //  h1.style.color= randomColor();
//}, 750)


setInterval (function(){
for (let letter of letters){
 letter.style.color = randomColor()
}
},750)



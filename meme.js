let numMemes = 0 

$("form").on("submit",function(evnt){
    let imageURL= $("#image").val() 
    let topText= $("#topText").val()
    let bottomText = $("#bottomText").val()
    evnt.preventDefault() 

    
    numMemes++

    createDiv()
    appendImage()
    appendText()







function createDiv(){
  

    const firstDiv= $("#template");
 $(`<div id="memeContainer${numMemes}"></div>`).appendTo(firstDiv);
 $(`#memeContainer${numMemes}`).append(`<div id="topDiv${numMemes}"></div>`);
 $(`#memeContainer${numMemes}`).append(`<div id="bottomDiv${numMemes}"></div>`)



}



function appendImage(){

   


 const imageURL= $("#image").val() 
 const div = document.querySelector(`#memeContainer${numMemes}`)

 const image = document.createElement('img')
 image.setAttribute("src",imageURL)
 image.classList.add("image")
 div.append(image)


    
}



function appendText(){
    let topText= $("#topText").val()
    let bottomText = $("#bottomText").val()
    const top = $(`#topDiv${numMemes}`).addClass("topText")
    const bottom= $(`#bottomDiv${numMemes}`).addClass("bottomText")


    
    top.append(topText)
    bottom.append(bottomText)




    
}

$("#topText").val("")
$("#bottomText").val("")
$("#image").val("") 




})


$("button").on("click", function(){
   $("#template").empty()
  
})



$("#template").on("click", function(evnt){
    let targetMeme = evnt.target.parentElement
    targetMeme.remove()

})
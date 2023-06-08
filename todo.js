const form= document.querySelector("form")
const input = document.querySelector("input")
const list = document.querySelector("ul")
const finalList= [] 
const deleteAll = document.getElementById("deleteAll")
reloadList=[]


form.addEventListener("submit", function(e){
    e.preventDefault();
   const todoLi =  createNewTodo(input.value)
    const errand = input.value
    console.log("todoLi:",todoLi)
    console.log("errand:", errand)
    list.appendChild(todoLi)
    input.value=" "
    finalList.push(errand)
    window.localStorage.setItem("todo",JSON.stringify(finalList))

})


window.addEventListener("load",function(){
let storedItems  = JSON.parse(localStorage.getItem("todo"));
for (let items of storedItems) {
    let oldTodo = document.createElement("li");
    oldTodo.innerText = items
    reloadList.push(oldTodo)
    console.log(typeof localStorage.getItem("todo"))
    const button = document.createElement('button')
    button.innerText="Delete"  
    button.classList.add("button")
    list.appendChild(oldTodo)
    oldTodo.appendChild(button)

   
    
}})


function createNewTodo (text){
   let newTodo =  document.createElement("li");
   newTodo.innerText= text;
    newTodo.classList.add("todo")
    const button = document.createElement('button')
    button.innerText="Delete"  
    button.classList.add("button")
    newTodo.appendChild(button)
  return newTodo

}


list.addEventListener("click",function(e){
     if(e.target.tagName ==="LI"){
    e.target.classList.toggle("completed")
    }
else if (e.target.tagName ==="BUTTON"){

    e.target.parentNode.remove()}
 })



deleteAll.addEventListener("click",function(e){
    
    console.log("im clicked");
   let allLis = document.querySelectorAll("li");
   for (let li of allLis){
     list.remove(li);
   }
    localStorage.removeItem("todo")
})





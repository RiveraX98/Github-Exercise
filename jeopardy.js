

let categoriesIds = [];
let shownCategories =[];
let allQuestions= []
let allAnswers = []


/** Get NUM_CATEGORIES random category from API.
 *
 * Returns array of category ids
 */

async function getCategoryIds() {
    const response = await axios.get("http://jservice.io/api/categories?count=50")
    let allCategories = response.data 
 

    
    for (let i =0;i <=allCategories.length-1; i++){
        if (allCategories[i].clues_count>5){
            categoriesIds.push((allCategories[i]).id)

           }
   
    
  }


  createTable()
    
}



async function getCategory(catId) {
    const response = await axios.get(`http://jservice.io/api/category?id=${catId}`)
    console.log(response.data)
    
    return(response.data)
 

    
}



function createTable(){
    $("table").append("<thead>")
    $("thead").append("<tr>")
    $("tr").addClass("header")
    for(let i=1;i<=6;i++){
        $("tr").append("<th>") 
    }

    $("table").append("<tbody>")
  

    let tbody = document.querySelector("tbody")
    for(let i=1;i<=5;i++){
      let newTr= document.createElement("tr")
      tbody.append(newTr)
        for(let i=1;i<=6;i++){
            let newTD= document.createElement("td")
            newTD.innerText = "?"
            newTD.classList.add("clueBox")
            newTr.append(newTD)
        }
    }

    fillTable()
}



    async function fillTable() {
        let randomCatIDs = []
        let randomIdx = []
        for (let i=1;i<=6;i++){
            let randomNum = Math.floor(Math.random()*39)+1;
            randomIdx.push(randomNum)
        }

        let selectedIdx = new Set (randomIdx)

        function replaceDuplicates(){
            let randomNum = Math.floor(Math.random()*39)+1;
            selectedIdx.add(randomNum)
        }


        if (selectedIdx.size<6){
            replaceDuplicates()
        }
        
       console.log("selectedIdx:", selectedIdx)


        for (let idx of selectedIdx){
            randomCatIDs.push(categoriesIds[idx])
            console.log("randomCatIDs:",randomCatIDs)
        }  

        let categories = []
        for (let cats of randomCatIDs){
            let res = await getCategory(cats);
            shownCategories.push(res);
            categories.push(res.title)

        }

        let thIndx=0
        for (let finalCat of categories){
             $("th").eq(thIndx).append(finalCat);
             thIndx++
        }

        
        let inxOfCat = 0
        let clueNum = 0
       
        for (let i=0;i<30;i++){
            let categoryClues = shownCategories[inxOfCat].clues;
            let question= categoryClues[clueNum].question;
            let answer = categoryClues[clueNum].answer;
            allQuestions.push(question)
            allAnswers.push(answer)
            

            inxOfCat<5? inxOfCat++ : (inxOfCat=0,clueNum++)
          
        }
        
    
        $("div").toggleClass("load",false)

    }

    

   


/** Handle clicking on a clue: show the question or answer.
 *
 * Uses .showing property on clue to determine what to show:
 * - if currently null, show question & set .showing to "question"
 * - if currently "question", show answer & set .showing to "answer"
 * - if currently "answer", ignore click
 * */

$("table").on("click",function handleClick(evt) {
    console.log(evt.target)
    let allTds= Array.from(document.querySelectorAll("td"))
    let targetIdx = ( allTds.indexOf(evt.target))

    if (evt.target.innerText==="?"){
      evt.target.innerText = allQuestions[targetIdx]
    }
    else if (evt.target.innerText===allQuestions[targetIdx]){
        evt.target.innerText = allAnswers[targetIdx]
       
    }
   
})


/** Start game:
 *
 * - get random category Ids
 * - get data for each category
 * - create HTML table
 * */

async function setupAndStart() {
}

$("button").on("click",function(){
    $("table").empty()
    $("div").addClass("load")
    categoriesIds = [];
    shownCategories =[];
    allQuestions= []
    allAnswers = []
    getCategoryIds()
})

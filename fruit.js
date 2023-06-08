const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const fruits = ['Apple', 'Apricot', 'Avocado ', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search() {

    let results = [];
    let inputVal = input.value;
    let smallStr= inputVal.toLowerCase();
    
    for (let fruit of fruits){
       let smallFruit= fruit.toLowerCase()
        if (smallFruit.includes(smallStr)){
            results.push(fruit)
        }
    }

    console.log(results)
    

	//return results;
    showSuggestions(results)
   
}


function showSuggestions(results) {
$("ul").empty()
for (let fruit of results){
    $("ul").append(`<li>${fruit}</li>`)
      
}
	
}

function useSuggestion(e) {
    let target = e.target
	targetText = target.innerText
    input.value = targetText
    $("ul").empty()
    
}

input.addEventListener('keyup', search);
suggestions.addEventListener('click', useSuggestion);
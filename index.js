// const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
// "/"];

//.split("") helps the whole strings to convert it into an array
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("")
    const numbers = "0123456789".split("")
    const symbols = "~`!@#$%^&*()_-+={[}]|:;'<,>.?/".split("");

    let randomEl1 = document.getElementById('random1-el')
    let randomEl2 = document.getElementById('random2-el')
    let charactersEl = document.getElementById('characters-el')



    //initially all the boxes are checked
    const lettersEl = document.getElementById('letters-el').checked
    const numbersEl = document.getElementById('numbers-el').checked
    const symbolsEl = document.getElementById('symbols-el').checked


function generatePasswords(){
     clearPasswords()

// parseInt(    .value), gives numeric value of a string
    let passwordLength = parseInt(charactersEl.value)
    if(passwordLength <= 0){
        alert("Please select a valid length!")
        return
    }
    
    //initially all the boxes are checked
    const lettersEl = document.getElementById('letters-el').checked
    const numbersEl = document.getElementById('numbers-el').checked
    const symbolsEl = document.getElementById('symbols-el').checked

    let characters = []
    //conditional statement for selected checkbox
    if(lettersEl && !symbolsEl && !numbersEl){
        characters = letters
    } else if(!lettersEl && symbolsEl && !numbersEl){
        characters = symbols
    } else if(!lettersEl && !symbolsEl && numbersEl){
        characters = numbers
    }else if(lettersEl && symbolsEl && !numbersEl){
        characters = letters.concat(symbols) //concat adds two strings/arrays together
    } else if(lettersEl && !symbolsEl && numbersEl){
        characters = letters.concat(numbersEl)
    }else if(!lettersEl && symbolsEl && numbersEl){
        characters = symbols.concat(numbers)
    }else if (lettersEl && symbolsEl && numbersEl){
        characters = letters.concat(numbers, symbols)
    } else{
        alert("Please select at least one type!")
        return
    }


    for(let i =0; i<passwordLength; i++){ 

        let randompw1 = Math.floor (Math.random() * (characters.length))
        let randompw2 = Math.floor(Math.random()*(characters.length))
        randomEl1.textContent += characters[randompw1]
        randomEl2.textContent += characters[randompw2]
    }
   
}


function clearPasswords(){
    randomEl1.textContent=""
    randomEl2.textContent=""
}

function CopytoClick1(){
    navigator.clipboard.writeText(randomEl1.textContent)
    alert("Password1 copied!")
}
function CopytoClick2(){
    navigator.clipboard.writeText(randomEl2.textContent)
    alert("Password2 copied!")
}




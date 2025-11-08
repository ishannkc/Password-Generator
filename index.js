const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let randomEl1 = document.getElementById('random1-el')
let randomEl2 = document.getElementById('random2-el')
let charactersEl = document.getElementById('characters-el')


function generatePasswords(){
    clearPasswords()

// parseInt(    .value), gives numeric value of a string
    let passwordLength = parseInt(charactersEl.value)

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




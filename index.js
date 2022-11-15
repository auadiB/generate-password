const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let fieldOneEl = document.getElementById("field-one-el")
let fieldTwoEl = document.getElementById("field-two-el")
let generatePasswordEl = document.getElementById("generate-password-el")


function randomNumber() {
    let number = Math.floor(Math.random() * characters.length)
    return number
}


generatePasswordEl.addEventListener("click", function() {
    fieldOneEl.textContent = 0
    fieldTwoEl.textContent = 0
   
    for(let i = 0; i < characters.length; i++) {
        if(i < 14) {
            fieldOneEl.textContent += characters[randomNumber()]
        }  
    }
    
    for(let i = 0; i < characters.length; i++) {
            if(i < 14) {
                fieldTwoEl.textContent += characters[randomNumber()]
            }
    }
})







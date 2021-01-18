let words = ["hello", "goodbye", "kanye", "eminem"]; 

let randNum = Math.floor(Math.random() * words.length); 
let gameWord = ''; 
let displayWord = document.getElementById('gameWord');
let displaySpaces = document.getElementById('gameSpaces');
let randomWord = words[randNum];
console.log(randomWord);
displayWord.textContent = randomWord;
// displayWord.textContent = randomWord;

let randomLen = (words[randNum].length)
// store word
// for loop to print blanks(_)
for (let i = 0; i < randomLen; i++) {
    gameWord += ' _ ';
    console.log(randomWord.charAt(i));
    displaySpaces.textContent = gameWord; 
}

console.log(gameWord)

//create listener
document.onkeydown = function (e) {
    console.log(e.key);
    }
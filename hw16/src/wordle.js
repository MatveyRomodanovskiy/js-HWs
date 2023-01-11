//references to DOM elements
const guessInputElement = document.querySelector(".guess-input");
const guessLettersElement = document.querySelector(".guess-letters");
let lettersDivs;
const trialsElement = document.querySelector(".trials-remained");
const gameResultElement = document.querySelector(".game-result");
const playAgainElement = document.querySelector(".play-again")
//variables requred for JS logic
const wordsForGuess = ["pappy","apple","table", "gold", "silver", "index", "script", "peace", "picture"];
let winFlag = true;
let trials;
let word;
let flGameOver = false;
//functions
function startGame(){
    word = getWord();
    fillLettersDivs();
    winFlag = true;
    flGameOver = false;
    trials = word.length + 1;
    playAgainElement.style.display = "none";
    gameResultElement.innerHTML = "";
    trialsElement.innerHTML = `remaind trials ${trials}`;
}
function getWord(){
    const index = Math.trunc(Math.random() * wordsForGuess.length);
    return wordsForGuess[index];
}
function fillLettersDivs(){
    const arrayWord = Array.from(word);
    guessLettersElement.innerHTML = arrayWord.reduce(function(res, cur){
        res = res + '<div class = "letter"></div>'
        return res;
    }, '');
    lettersDivs = document.querySelectorAll(".letter");
}
function onChange(){
    if(flGameOver){
        alert("game is over, press play again");
        finishGame();
    } else {
         const trialWord = guessInputElement.value;
         trials--;
         if (!trials){
            flGameOver = true;
            finishGame();
         }
         trialsElement.innerHTML = `remaind trials ${trials}`;
         if(trialWord.length != word.length){
            alert('wrong number of letters')
         }else{
            winFlag = true;
            coloringWord(trialWord);
            if (winFlag){
                finishGame();
            }
         }
    }  

}
function coloringWord(trialWord){
    const arWord = Array.from(trialWord);
    arWord.forEach(function(letter, index){
    lettersDivs[index].innerHTML = letter;
    lettersDivs[index].style.color = getColor(letter,index);
    if (getColor(letter,index) != "green"){
        winFlag = false;
    }
    })
}
function getColor(letter,index) {
    let res = "red";
    if(word.includes(letter)){
        res = word[index] == letter ? "green" : "yellow"
    }
    return res;
}
function finishGame(){
    gameResultElement.style.display = "contents";
    playAgainElement.style.display = "contents";
    if (winFlag) {
        gameResultElement.innerHTML = (`Congratulations! You have guessed the word using ${(word.length + 1 -trials)} trials.`);
    } else {
        gameResultElement.innerHTML = (`Sorry, but the number of trials has ended up!`);
    }
    guessInputElement.value = null;
}
//actions
startGame();
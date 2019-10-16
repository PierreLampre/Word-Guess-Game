const pokemonArray = ["bulbasaur", "charmander", "pikachu", "squirtle", "torchic", "treecko", "mudkip"];
let choppedUpNames = [];
const wrongGuesses = [];

let computerGuess = pokemonArray[Math.floor(Math.random() * pokemonArray.length)];
let computerChoice = document.getElementById("rc-span-3");
computerChoice.textContent = choppedUpNames.toString();
computerChoice.textContent = choppedUpNames.join(" ");
let winCount = 0;
let winNumber = document.getElementById("wins");
winNumber.textContent = " " + winCount;
let sound = document.getElementById("myAudio");

function playAudio() {
    sound.play();
  }    
  



function placeChoppedWord() {

    

    for (i = 0; i < computerGuess.length; i++) {
        choppedUpNames.push("_");
        console.log(computerGuess)
    }

    computerChoice = document.getElementById("rc-span-3");

    computerChoice.textContent = choppedUpNames.toString();
    computerChoice.textContent = choppedUpNames.join(" ");

    console.log(choppedUpNames);

}

placeChoppedWord();


// Function that displays/counts wrong guesses with if statement 
// After ten guesses, new word

document.onkeypress = function Guesses(e) {


    if (computerGuess.indexOf(event.key) > -1) {
        for (let i = 0; i < computerGuess.length; i++) {
            if (computerGuess[i] === event.key) {
                choppedUpNames[i] = event.key;
                console.log(choppedUpNames);
                computerChoice.textContent = choppedUpNames.toString();
                computerChoice.textContent = choppedUpNames.join(" ");
            }
        }
    } else {
        //decrease amount of guesses by 1 w/ i-- for loop
        console.log("nah");
        wrongGuesses.push(event.key);
        wrongGuessesInHtml = document.getElementById("rc-span-7");
        wrongGuessesInHtml.textContent = wrongGuesses.toString();
    }

   if (!choppedUpNames.includes("_")) {
    computerChoice.textContent = "GOOD JOB TRAINER!"
    winCount++;
    winNumber.textContent = " " + winCount;
    playAudio();
    choppedUpNames = [];
    computerGuess = pokemonArray[Math.floor(Math.random() * pokemonArray.length)];
    setTimeout(placeChoppedWord, 4000);
   } 

}




//Function that changes picture/plays sound when whole word
//is guessed
const pokemonArray = ["bulbasaur", "charmander", "pikachu", "squirtle", "torchic", "treecko", "mudkip"];
const choppedUpNames = [];
const wrongGuesses = [];

let computerGuess = pokemonArray[Math.floor(Math.random() * pokemonArray.length)];

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



// Function that changes "_" to correct letter

// Function that displays/counts wrong guesses with if statement 
// After ten guesses, new word




document.onkeypress = function Guesses(e) {

    wrongGuesses.push(event.key);
    wrongGuessesInHtml = document.getElementById("rc-span-7");
    wrongGuessesInHtml.textContent = wrongGuesses.toString();

    if (computerGuess.includes(event.key)) {
        console.log("bitchin");
    } else {
        //decrease amount of guesses by 1 w/ i-- for loop
        console.log("nah");
    }

}

//Function that counts wins

//Function that changes picture/plays sound when whole word
//is guessed
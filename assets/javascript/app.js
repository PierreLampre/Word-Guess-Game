const pokemonArray = ["bulbasaur", "charmander", "pikachu", "squirtle", "torchic", "treecko", "mudkip", "chikorita", "cyndaquil", "totodile", "turtwig", "chimchar", "piplup"];
let choppedUpNames = [];
let wrongGuesses = [];
let oblivion = [];


let computerGuess = pokemonArray[Math.floor(Math.random() * pokemonArray.length)];
let computerChoice = document.getElementById("rc-span-3");
computerChoice.textContent = choppedUpNames.toString();
computerChoice.textContent = choppedUpNames.join(" ");
let winCount = 0;
let winNumber = document.getElementById("wins");
winNumber.textContent = " " + winCount;
let sound1 = document.getElementById("myAudio1");
let sound2 = document.getElementById("myAudio2");
let sound3 = document.getElementById("myAudio3");
let guessCount = 10;
let guessNumber = document.getElementById("rc-span-5");
guessNumber.textContent = guessCount + " guess remaining";
let leftContainer = document.getElementById("left-container");
let rightContainer = document.getElementById("right-container");
let hiddenWinDiv = document.getElementById("hiddenWinDiv");
let pokePic = document.getElementById("init-lc-img");
winDiv = document.getElementById("goodJobTrainer");
loseDiv = document.getElementById("awTryAgain");


function playAudioWin() {
    sound1.play();
}

function playAudioLose() {
    sound2.play();
}

function playWinGame() {
    sound3.play();
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
            guessCount--;
            guessNumber.textContent = guessCount + " guess remaining";


        }

        if (!choppedUpNames.includes("_")) {

            pokePic.style = "display: none;"
            winDiv.style = "display: block;";
            winCount++;
            winNumber.textContent = " " + winCount;
            playAudioWin();
            choppedUpNames = [];
            computerGuess = pokemonArray[Math.floor(Math.random() * pokemonArray.length)];
            placeChoppedWord();
            function resetStyles1() {
                pokePic.style = "display: grid;";
                winDiv.style = "display: hidden;";
            }
            setTimeout(resetStyles1, 3000);
        }

        if (wrongGuesses.length > 9) {
            pokePic.style = "display: none;"
            loseDiv.style = "display: block;";
            playAudioLose();
            choppedUpNames = [];
            computerGuess = pokemonArray[Math.floor(Math.random() * pokemonArray.length)];
            placeChoppedWord();
            wrongGuesses = [];
            wrongGuessesInHtml.textContent = "";
            guessCount = 10;
            guessNumber.textContent = guessCount + " guess remaining";
            function resetStyles2() {
                pokePic.style = "display: grid;";
                loseDiv.style = "display: hidden;";
            }
            setTimeout(resetStyles2, 3000);

        }

        if (winCount === 5) {
            function winGame() {
            leftContainer.style = "display: none;";
            rightContainer.style = "display: none;";
            hiddenWinDiv.style = "display: block; color: white;";
            playWinGame();
            }

            setTimeout(winGame, 2000);
        }

    }

  


//Function that changes picture when whole word
//is guessed

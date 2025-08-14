let randomNumber = parseInt(Math.random() * 100 + 1)

let submit = document.querySelector("#submit");
let userInput = document.querySelector("#number");
let guessSlot = document.querySelector(".guesses");
let attemptLeft = document.querySelector(".remaining");
let lowOrHigh = document.querySelector(".lowOrHigh");
let startOver = document.querySelector(".res");

let p = document.createElement("p");

let prevGuess = [];
let numOfGuess = 0;

let playGame = true;

attemptLeft.innerHTML = "10";

if(playGame){
    submit.addEventListener("click", function(e){
        e.preventDefault();
        // newGame();
        let guess = parseInt(userInput.value);        
        validateGuess(guess);
    })
}

function validateGuess(guess){
    // validation of input
    if(isNaN(guess)){
        alert("Please enter a valid number")
    }else if(guess < 1){
        alert("Enter a number greater than 0");
    }else if(guess > 100){
        alert("Enter a number less than 101");
    }else{
        if(numOfGuess === 9){
            displayGuess(guess);
            displayMsg("Game Over!! \nThe number was = " + randomNumber);
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    // logic to check if the guess is correct or not
    if(guess === randomNumber){
        displayMsg("You won!!");
        endGame();
    }else if( guess < randomNumber){
        displayMsg("Guessed Number is Lower");
    }else if( guess > randomNumber){
        displayMsg("Guessed Number is Higher");
    }
}

function displayGuess(guess){
    // display the guess in the guesses slot
    userInput.value = "";
    guessSlot.innerHTML += `${guess}  `;
    numOfGuess++;
    attemptLeft.innerHTML = `${10 - numOfGuess}`;
}

function displayMsg(msg){
    // display the message to the user -> DOM interaction
    lowOrHigh.innerHTML = `<h2>${msg}</h2>`
}

function endGame(){
    // end the game
    userInput.value = "";
    userInput.setAttribute("disabled", "");
    p.classList.add("button");
    p.innerHTML = `<h2 id="newGame">Play Again!!</h2>`
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(){
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numOfGuess = 0;
        guessSlot.innerHTML = '';
        attemptLeft.innerHTML = `10`;
        lowOrHigh.innerHTML = '';
        userInput.removeAttribute("disabled");
        startOver.removeChild(p);
        playGame = true;
    });
}



/*
Game function:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify the player of guesses remaining
- Notify the player of the correct answer if lose
- Let player choose to play again
*/

// Game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// Colors
const colorRed = '#e54304',
      colorGreen = '#09af00';

// UI Elements
const game = document.querySelector('#guess-btn'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener('mousedown', function(e){
   if(e.target.classList.contains('play-again')) {
      window.location.reload();
   }
});

// Listen for guess
guessBtn.addEventListener('click', function(){
   let guess= parseInt(guessInput.value);
   // console.log(guess);
   //Validate
   if(isNaN(guess) || guess < min || guess > max){
      setMessage(`Please enter a number between ${min} and ${max}`, colorRed);
   }

   // Check if won
   if(guess === winningNum) {

      gameOver(true, `${winningNum} is correct, YOU WIN!`);

   } else {
      // Wrong number
      guessesLeft -= 1;
      if(guessesLeft === 0){

         gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);

      } else {
         // Game continues - answer wrong
      
         // Change border color
         guessInput.style.borderColor = colorRed;

         setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, colorRed);

         guessInput.value = '';

      }
      console.log(guessesLeft);
   }
});

// Game over
function gameOver(won, msg) {
   let color;
   won === true ? color = colorGreen : color = colorRed;
   
   // Disable input
   guessInput.disabled = won;
   // change border color
   guessInput.style.borderColor = color;
   // Set message
   setMessage(msg, color);

   // Play Again?
   guessBtn.value = 'Play Again';
   guessBtn.className += ' play-again';

}

// Get winning number
function getRandomNum(){
   return Math.floor(Math.random() * (max-min+1) + min);
}

// Set message
function setMessage(msg, color){
   message.style.color = color;
   message.textContent = msg;
}


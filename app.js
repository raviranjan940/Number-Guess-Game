const maxField = document.querySelector("#max-input");
const maxSubmit = document.querySelector('.maxSubmit');

let random;
let maxVal;
function maxInput() {
  maxVal = maxField.value;
  random = Math.floor(Math.random() * maxVal) + 1;
  console.log(random);
  if(maxVal>0){
    guessSubmit.disabled = false;
  }
}


// const getInput = () => {
//   random = Math.floor(Math.random() * maxField.value) + 1;
//   console.log(random);
// }


const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('#guess-input');

let guessCount = 1;
let resetButton;

function checkGuess(){
  const userGuess = Number(guessField.value);
  if(guessCount === 1){
    guesses.textContent = 'Previous guesses: ';
  }

  guesses.textContent += userGuess + ' ';

  if(userGuess === random){
    lastResult.textContent = 'Congratulations! You got it right!';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = ' ';
    setGameOver();
  }else if(guessCount === 10){
    lastResult.textContent = '!!!GAME OVER!!!';
    lowOrHi.textContent = ' ';
    setGameOver();
  }else {
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = 'red';
    if(userGuess < random){
      lowOrHi.textContent = 'Last guess was too low!';
    }else if(userGuess > random){
      lowOrHi.textContent = 'Last guess was too high!';
    }
  }

  guessCount++;
  guessField.value = '';
  guessField.focus();

}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver(){
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start new game';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}

function resetGame() {
  guessCount = 1;
  const resetParag = document.querySelectorAll('.result p');
  for (const resetPara of resetParag) {
    resetPara.textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();
  lastResult.style.backgroundColor = 'white';
  random = Math.floor(Math.random() * maxVal) + 1;
}




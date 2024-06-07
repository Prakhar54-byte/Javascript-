# Projects related to DOM

## project link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode-x4saog?file=index.html)

# Solution Code

## Project 1 - Background colour change

````Javascript
const buttons = document.querySelectorAll('.button');
// console.log(buttons);
const body = document.querySelector('body');

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener('click', function (event) {
    console.log(event);
    console.log(event.target);

    switch (event.target.id) {
      case 'grey':
        body.style.backgroundColor = event.target.id;
        break;
      case 'white':
        body.style.backgroundColor = event.target.id;
        break;
      case 'blue':
        body.style.backgroundColor = event.target.id;
        break;
      case 'yellow':
        body.style.backgroundColor = event.target.id;
        break;
      default:
        body.style.backgroundColor = 'black';
    }
  });
});


````

## Project 2 - BMI calculator
````Javascript
const form = document.querySelector('form');
// const height = parseInt(document.querySelector('#height').value);//this usecase will give empty value

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'Please give valid height';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'Please give valid weight';
  } else {
    const bmi = (weight / ((height * height) / 1000)).toFixed(2);
    //show the result

    if (bmi < 18.6) {
      results.innerHTML = `<span>${bmi}</span>` + 'Under Weight ';
    } else if (bmi > 18.6 && bmi < 24.9) {
      results.innerHTML = `<span>${bmi}</span>` + 'Normal Weight ';
    } else {
      results.innerHTML = `<span>${bmi}</span>` + 'Over Weight ';
    }
  }
});


````

## Project 3 - Get time
````Javascript
const clock = document.getElementById('clock');

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

````

## Project 4 - Guess Number
```Javascript
let random = Math.round(Math.random() * 100 + 1);
// console.log(random);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const satrtOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let palyGame = true;

if (palyGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number more than 1');
  } else if (guess > 100) {
    alert('Please enter a number more than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      dispalyGuess(guess);
      dispalyMessage(`Game Over , Random number was ${random}`);
      endGame();
    } else {
      dispalyGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === random) {
    dispalyMessage('You guessed it right');
    endGame();
  } else if (guess < random) {
    dispalyMessage('Number id Tooo low');
  } else if (guess > random) {
    dispalyMessage('Number id Tooo high');
  }
}

function dispalyGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess} ` + ' ';
  numGuess++;
  lastResult.innerHTML = `${11 - numGuess}`;
}

function dispalyMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = '<h2 id="newGame">Start new Game</h2>';
  satrtOver.appendChild(p);
  palyGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    random = Math.round(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    lastResult.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    satrtOver.removeChild(p);
    palyGame = true;
  });
}

````
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
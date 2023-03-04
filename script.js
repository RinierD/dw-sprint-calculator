const calculator = document.querySelector('.calculator');
const buttons = calculator.querySelector('.calculator__buttons');
const firstOperend = document.querySelector('.calculator__operend--left');
const operator = document.querySelector('.calculator__operator');
const secondOperend = document.querySelector('.calculator__operend--right');
const calculatedResult = document.querySelector('.calculator__result');

function calculate(n1, operator, n2) {
  let result = 0;
  // TODO : make function to operate according to the n1, n2, operator.
  // ex) if input is n1 : '1', operator : '+', n2 : '2' , 3 will be returned.

  if (operator === '+') {
    result = n1 + n2;  
  }  
  else if (operator === '-') {
    result = n1 - n2;  
  }  
  else if (operator === '*') {  
    result = n1 * n2;  
  }  
  else {  
    result = n1 / n2;
  }  
  

  return String(result);
}

let num1;
let num2;
let numOper = "+";

buttons.addEventListener('click', function (event) {
  // will be triggered when click the buttons.

  const target = event.target;
  const action = target.classList[0];
  const buttonContent = target.textContent;
  // ! DO NOT MODIFY(Line 19 - 21).

  if (target.matches('button')) {
    // TODO : make your code to operate calculator
    if (action === "number") {
      if (firstOperend.textContent === "0") {
        num1 = parseInt(buttonContent);
        firstOperend.textContent = num1;
        console.log("Type of value = " + typeof num1 + " - First number " + num1);
        return num1
      } else if (firstOperend.textContent !== "0") {
        num2 = parseInt(buttonContent);
        secondOperend.textContent = num2;
        console.log("Type of value = " + typeof num2 + " - Second number " + num2);
      }
    }

    if (action === 'operator') {      
      console.log("Operator " + buttonContent + " button");
      operator.textContent = buttonContent;
      numOper = buttonContent;
    }

    if (action === 'decimal') {
      alert("This feature is comming soon...")
    }

    if (action === 'clear') {
      console.log("reset button");
      num1 = 0;
      firstOperend.textContent = num1;
      numOper = "+"
      operator.textContent = numOper;
      num2 = 0;
      secondOperend.textContent = num2;
      calculatedResult.textContent = "0";
    }

    if (action === 'calculate') {
      calculatedResult.textContent = calculate(num1, numOper, num2);
    }
  }
});

// ! Advanced Challenge test and Nightmare test.
const display = document.querySelector('.calculator__display--for-advanced');
let firstNum, operatorForAdvanced, previousKey, previousNum;

buttons.addEventListener('click', function (event) {
  const target = event.target;
  const action = target.classList[0];
  const buttonContent = target.textContent;
  // ! don't touch the code above.

  // ! modify below for Advanced Challenge & Nightmare.
  if (target.matches('button')) {
    if (action === 'number') {
    }
    if (action === 'operator') {
    }
    if (action === 'decimal') {
    }
    if (action === 'clear') {
    }
    if (action === 'calculate') {
    }
  }
});

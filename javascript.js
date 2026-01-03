function add(a, b) {
  return a+b;
}

function subtract(a, b) {
  return a-b;
}

function multiply(a, b) {
  return a*b;
}

function divide(a, b) {
  return a/b;
}

let num1 = '';
let operator = '';
let num2 = '';

let operatorInUse = false;

function operate(num1, operator, num2) {
  switch (operator) {
    case '+':
      return add(num1, num2);
    case '-':
      return subtract(num1, num2);
    case '*':
      return multiply(num1, num2);
    case '/':
      return divide(num1, num2);
  }
}

function checkNumberPressed(id) {
  switch (id) {
    case 'zero':
      screen.textContent += '0';
      break;
    case 'one':
      screen.textContent += '1';
      break;
    case 'two':
      screen.textContent += '2';
      break;
    case 'three':
      screen.textContent += '3';
      break;
    case 'four':
      screen.textContent += '4';
      break;
    case 'five':
      screen.textContent += '5';
      break;
    case 'six':
      screen.textContent += '6';
      break;
    case 'seven':
      screen.textContent += '7';
      break;
    case 'eight':
      screen.textContent += '8';
      break;
    case 'nine':
      screen.textContent += '9';
      break;
    case 'dot':
      if (!screen.textContent.includes('.')) {
        if (screen.textContent == '') {
          screen.textContent += '0.';
        } else {
          screen.textContent += '.';
        }
      }
      break;
  }
}

function checkOperatorPressed(id) {
  switch (id) {
    case 'addition':            // Addition
      operator = '+';
      break;
    case 'subtraction':         // Subtraction
      operator = '-';
      break;
    case 'multiplication':      // Multiplication
      operator = '*';
      break;
    case 'division':            // Division
      operator = '/';
      break;
  }
  screen.textContent = '';
  operatorInUse = true;
}

function checkSpecialPressed(id) {
  switch (id) {
    case 'clear':
      screen.textContent = '';
      num1 = '';
      operator = '';
      num2 = '';
      operatorInUse = false;
      break;
    case 'delete':
      screen.textContent = screen.textContent.slice(0, -1);
      break;
    case 'equals':
      
      break;
  }
}

let screen = document.querySelector('#screen');
let keypad = document.querySelector('#keypad');

keypad.addEventListener('click', (e) => {
  const button = e.target.closest('.button');
  if (!button) return;

  switch (true) {
    case button.classList.contains('number'):
      checkNumberPressed(button.id);
      operatorInUse ? num2 = Number(screen.textContent) : num1 = Number(screen.textContent);
      break;
    case button.classList.contains('operator'):
      if (num1 != '') {
        checkOperatorPressed(button.id);
      }
      break;
    case button.classList.contains('special'):
      checkSpecialPressed(button.id);
      break;
  }

  screen.scrollLeft = screen.scrollWidth;

  console.log(`${num1}, ${operator}, ${num2}`);
})

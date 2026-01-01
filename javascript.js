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

let num1;
let operator;
let num2;

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

let screen = document.querySelector('#screen');
let keypad = document.querySelector('#keypad');

keypad.addEventListener('click', (e) => {
  const button = e.target.closest('.button');
  switch (button.id) {
    // Functions
    case 'clear':             // Clear
      screen.textContent = '';
      break;
    case 'delete':              // Delete
      screen.textContent = screen.textContent.slice(0, -1);
      break;

    // Numbers & Dot
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
      screen.textContent += '.';
      break;

    // Operators
    case 'addition':            // Addition
      
      break;
    case 'subtraction':         // Subtraction
      
      break;
    case 'multiplication':      // Multiplication
      
      break;
    case 'division':            // Division
      
      break;
    case 'equals':              // Equals
      
      break;
  }

  screen.scrollLeft = screen.scrollWidth;
})

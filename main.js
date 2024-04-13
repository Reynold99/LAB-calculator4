const display = document.querySelector('.display');
let currentInput = '0';
let operator = '';
let firstOperand = '';

function updateDisplay() {
    display.textContent = currentInput;
}

function clear() {
    currentInput = '0';
    operator = '';
    firstOperand = '';
    updateDisplay();
}

function appendNumber(number) {
    if (currentInput === '0' && number !== '.') {
        currentInput = number;
    } else {
        currentInput += number;
    }
    updateDisplay();
}

function setOperator(op) {
    operator = op;
    firstOperand = currentInput;
    currentInput = '0';
}

function calculate() {
    let result = '';
    const a = parseFloat(firstOperand);
    const b = parseFloat(currentInput);
    if (operator === '+') {
        result = a + b;
    } else if (operator === '-') {
        result = a - b;
    } else if (operator === '*') {
        result = a * b;
    } else if (operator === '/') {
        result = a / b;
    }
    currentInput = result.toString();
    operator = '';
    firstOperand = '';
    updateDisplay();
}

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;
        if (buttonText >= '0' && buttonText <= '9') {
            appendNumber(buttonText);
        } else if (buttonText === '.') {
            if (!currentInput.includes('.')) {
                currentInput += '.';
                updateDisplay();
            }
        } else if (buttonText === 'C') {
            clear();
        } else if (buttonText === '=') {
            calculate();
        } else {
            setOperator(buttonText);
        }
    });
});

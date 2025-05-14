let display = document.getElementById('display');
let currentInput = '';

function appendNumber(number) {
    if (currentInput === '0') {
        currentInput = number;
    } else {
        currentInput += number;
    }
    display.innerText = currentInput;
}

function appendOperator(operator) {
    if (currentInput !== '') {
        const lastChar = currentInput.slice(-1);
        if ('+-*/'.includes(lastChar)) {
            currentInput = currentInput.slice(0, -1) + operator;
        } else {
            currentInput += operator;
        }
        display.innerText = currentInput;
    }
}

function clearDisplay() {
    currentInput = '';
    display.innerText = '0';
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        display.innerText = currentInput;
    } catch (e) {
        display.innerText = 'Error';
        currentInput = '';
    }
}
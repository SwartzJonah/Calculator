//Declarations
const problemDisplay = document.querySelector('#problemDisplay');
const solutionDisplay = document.querySelector('#solutionDisplay');
//Buttons
const allClear = document.querySelector('#allClear');
const justClear = document.querySelector('#justClear');
const remainderButton = document.querySelector('#remainderButton');
const divideButton = document.querySelector('#divideButton');
const sevenButton = document.querySelector('#sevenButton');
const eightButton = document.querySelector('#eightButton');
const nineButton = document.querySelector('#nineButton');
const timesButton = document.querySelector('#timesButton');
const fourButton = document.querySelector('#fourButton');
const fiveButton = document.querySelector('#fiveButton');
const sixButton = document.querySelector('#sixButton');
const minusButton = document.querySelector('#minusButton');
const oneButton = document.querySelector('#oneButton');
const twoButton = document.querySelector('#twoButton');
const othreeButton = document.querySelector('#threeButton');
const addButton = document.querySelector('#addButton');
const zeroButton = document.querySelector('#zeroButton');
const decimalButton = document.querySelector('#decimalButton');
const equalsButton = document.querySelector('#equalsButton');

//Button Listeners
allClear.addEventListener('click', () => {
    total = ' ';
    numberOne = ' ';
    numberTwo = ' ';
    operatorDisplay = ' ';
    operator = ' ';
    start();
    problemDisplay.textContent = `${numberOne} ${operatorDisplay} ${numberTwo}`;
    solutionDisplay.textContent = `${total}`;
})
justClear.addEventListener('click', () => {
    total = ' ';
    numberOne = ' ';
    numberTwo = ' ';
    operatorDisplay = ' ';
    operator =' ';
    start();
    problemDisplay.textContent = `${numberOne} ${operatorDisplay} ${numberTwo}`;
    solutionDisplay.textContent = `${total}`;
})
remainderButton.addEventListener('click', () => {
    if (operator === ' ' && numberOne != ' '){
        operator = remainder;
        operatorDisplay = '%';
        start();
    }
})
divideButton.addEventListener('click', () => {
    if (operator === ' ' && numberOne != ' '){
        operator = divide;
        operatorDisplay = '/';
        start();
    }
})
sevenButton.addEventListener('click', () => {
    start();
    if (operator === ' '){
        numberOne += 7;
    } else if ((operator != ' ')){
        numberTwo += 7;
    } 
    start();
})
eightButton.addEventListener('click', () => {
    start();
    if (operator === ' '){
        numberOne += 8;
    } else if ((operator != ' ')){
        numberTwo += 8;
    } 
    start();
})
nineButton.addEventListener('click', () => {
    start();
    if (operator === ' '){
        numberOne += 9;
    } else if ((operator != ' ')){
        numberTwo += 9;
    } 
    start();
})
timesButton.addEventListener('click', () => {
    if (operator === ' ' && numberOne != ' '){
        operator = multiply;
        operatorDisplay = 'X';
        start();
    }
})
fourButton.addEventListener('click', () => {
    start();
    if (operator === ' '){
        numberOne += 4;
    } else if ((operator != ' ')){
        numberTwo += 4;
    } 
    start();
})
fiveButton.addEventListener('click', () => {
    start();
    if (operator === ' '){
        numberOne += 5;
    } else if ((operator != ' ')){
        numberTwo += 5;
    } 
    start();
})
sixButton.addEventListener('click', () => {
    start();
    if (operator === ' '){
        numberOne += 6;
    } else if ((operator != ' ')){
        numberTwo += 6;
    } 
    start();
})
minusButton.addEventListener('click', () => {
    if (operator === ' ' && numberOne != ' '){
        operator = subtract;
        operatorDisplay = '-';
        start();
    }
})
oneButton.addEventListener('click', () => {
    start();
    if (operator === ' '){
        numberOne += 1;
    } else if ((operator != ' ')){
        numberTwo += 1;
    } 
    start();
})

twoButton.addEventListener('click', () => {
    start();
    if (operator === ' '){
        numberOne += 2;
    } else if ((operator != ' ')){
        numberTwo += 2;
    } 
    start();
})

threeButton.addEventListener('click', () => {
    start();
    if (operator === ' '){
        numberOne += 3;
    } else if ((operator != ' ')){
        numberTwo += 3;
    } 
    start();
})

addButton.addEventListener('click', () => {
    if (operator === ' ' && numberOne != ' '){
        operator = add;
        operatorDisplay = '+';
        start();
    }
})
zeroButton.addEventListener('click', () => {
    start();
    if (operator === ' '){
        numberOne += 0;
    } else if ((operator != ' ')){
        numberTwo += 0;
    } 
    start();
})

decimalButton.addEventListener('click', () => {
    colorState = 'color';
})



equalsButton.addEventListener('click', () => {
    total = operate(operator, numberOne,numberTwo);
    start();
    total = ' ';
    numberOne = ' ';
    numberTwo = ' ';
    operatorDisplay = ' ';
    operator = ' ';
})


//Starter State
let total = ' ';
let numberOne = ' ';
let numberTwo = ' ';
let operatorDisplay = ' ';
let operator = ' ';
start();

//Functions
function start(){
    problemDisplay.textContent = `${numberOne} ${operatorDisplay} ${numberTwo}`;
    solutionDisplay.textContent = `${total}`;
    console.log(numberOne, operator, numberTwo);
}


function operate(operator, numberOne, numberTwo){
    let solution = 0;
    switch (operator){
        case add:
            solution = add(numberOne, numberTwo);
            break;
        case subtract:
            solution = subtract(numberOne, numberTwo);
            break;
        case multiply:
            solution = multiply(numberOne, numberTwo);
            break;
        case divide:
            solution = divide(numberOne, numberTwo);
            break;
        case remainder:
            solution = remainder(numberOne, numberTwo);
            break;
    }
    return solution;
}



//Math Functions
function add(numberOne, numberTwo){
    let a = parseInt(numberOne);
    let b = parseInt(numberTwo);
    return (a + b);
}

function subtract(numberOne, numberTwo){
    return (numberOne - numberTwo);
}

function multiply(numberOne, numberTwo){
    return (numberOne * numberTwo);
}

function divide(numberOne, numberTwo){
    return (numberOne/numberTwo);
}

function remainder(numberOne, numberTwo){
    return (numberOne % numberTwo);
}


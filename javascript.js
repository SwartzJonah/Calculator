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
const negativeButton = document.querySelector('#negativeButton');
const equalsButton = document.querySelector('#equalsButton');

//Button Listeners
allClear.addEventListener('click', () => {
    let numherHolder = [];
    let total = ' ';
    let numberOne = ' ';
    let numberTwo = ' ';
    let operatorDisplay = ` `;
    let operator = ``;
    problemDisplay.textContent = `${numberOne} ${operatorDisplay} ${numberTwo}`;
    solutionDisplay.textContent = `${total}`;
})
justClear.addEventListener('click', () => {
    let total = '';
    let numberOne = '';
    let numberTwo = '';
    let operatorDisplay = '';
    let operator ='';
    problemDisplay.textContent = `${numberOne} ${operatorDisplay} ${numberTwo}`;
    solutionDisplay.textContent = `${total}`;
})
remainderButton.addEventListener('click', () => {
    operator = remainder;
    operatorDisplay = '%';
})
divideButton.addEventListener('click', () => {
    operator = divide;
    operatorDisplay = '/';
})
sevenButton.addEventListener('click', () => {
    if (numberOne = ''){
        numberOne = 7;
    } else if (numberTwo = ''){
        numberTwo = 7;
    } 
    start();
})
eightButton.addEventListener('click', () => {
    if (numberOne = ''){
        numberOne = 8;
    } else if (numberTwo = ''){
        numberTwo = 8;
    }
    start();
})
nineButton.addEventListener('click', () => {
    colorState = 'color';
})
timesButton.addEventListener('click', () => {
    colorState = 'color';
})
fourButton.addEventListener('click', () => {
    colorState = 'color';
})
fiveButton.addEventListener('click', () => {
    colorState = 'color';
})
sixButton.addEventListener('click', () => {
    colorState = 'color';
})
minusButton.addEventListener('click', () => {
    colorState = 'color';
})
oneButton.addEventListener('click', () => {
    colorState = 'color';
})
twoButton.addEventListener('click', () => {
    colorState = 'color';
})
twoButton.addEventListener('click', () => {
    colorState = 'color';
})
threeButton.addEventListener('click', () => {
    colorState = 'color';
})
addButton.addEventListener('click', () => {
    colorState = 'color';
})
zeroButton.addEventListener('click', () => {
    colorState = 'color';
})
decimalButton.addEventListener('click', () => {
    colorState = 'color';
})
negativeButton.addEventListener('click', () => {
    colorState = 'color';
})
equalsButton.addEventListener('click', () => {
    total = operate(operator, numberOne,numberTwo);
})


//Starter State
let total = '';
let numberOne = '';
let numberTwo = '';
let operatorDisplay = '';
let operator = '';
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
    return (numberOne + numberTwo);
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


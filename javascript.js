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
//Starter State
let total = 0;
let numberOne = 0;
let numberTwo = 0;
let operator = `+`;
start();

//Functions
function start(){
    problemDisplay.textContent = `${numberOne} ${operator} ${numberTwo}`;
    solutionDisplay.textContent = `${total}`;
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
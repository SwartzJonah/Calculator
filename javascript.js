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

//function buttons
allClear.addEventListener('click', () => {
    tempTotal = ' ';
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
    tempTotal = ' ';
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
    if (operator === ' ' && numberOne != ' ' && tempTotal === ' '){
        operator = remainder;
        operatorDisplay = '%';
        start();
        // if there is a temp number and no number one add
    } else if (tempTotal != ' ' && numberOne === ' ') {
        numberOne = tempTotal;
        operator = remainder;
        operatorDisplay = '%';
        start();
        // if there is a temp and a number one use number one
    } else if (operator === ' ' && numberOne != ' '){
        operator = remainder;
        operatorDisplay = '%';
        start();
    }
    
});

divideButton.addEventListener('click', () => {
    if (operator === ' ' && numberOne != ' ' && tempTotal === ' '){
        operator = divide;
        operatorDisplay = '/';
        start();
        // if there is a temp number and no number one add
    } else if (tempTotal != ' ' && numberOne === ' ') {
        numberOne = tempTotal;
        operator = divide;
        operatorDisplay = '/';
        start();
        // if there is a temp and a number one use number one
    } else if (operator === ' ' && numberOne != ' '){
        operator = divide;
        operatorDisplay = '/';
        start();
    }
    
});

timesButton.addEventListener('click', () => {
    if (operator === ' ' && numberOne != ' ' && tempTotal === ' '){
        operator = multiply;
        operatorDisplay = 'X';
        start();
        // if there is a temp number and no number one add
    } else if (tempTotal != ' ' && numberOne === ' ') {
        numberOne = tempTotal;
        operator = multiply;
        operatorDisplay = 'X';
        start();
        // if there is a temp and a number one use number one
    } else if (operator === ' ' && numberOne != ' '){
        operator = multiply;
        operatorDisplay = 'X';
        start();
    } 
});

minusButton.addEventListener('click', () => {
    if (operator === ' ' && numberOne != ' ' && tempTotal === ' '){
        operator = subtract;
        operatorDisplay = '-';
        start();
        // if there is a temp number and no number one add
    } else if (tempTotal != ' ' && numberOne === ' ') {
        numberOne = tempTotal;
        operator = subtract;
        operatorDisplay = '-';
        start();
        // if there is a temp and a number one use number one
    } else if (operator === ' ' && numberOne != ' '){
        operator = subtract;
        operatorDisplay = '-';
        start();
    }
});

addButton.addEventListener('click', () => {
    //if there is a number one and no temp number add
    if (operator === ' ' && numberOne != ' ' && tempTotal === ' '){
        operator = add;
        operatorDisplay = '+';
        start();
        // if there is a temp number and no number one add
    } else if (tempTotal != ' ' && numberOne === ' ') {
        numberOne = tempTotal;
        operator = add;
        operatorDisplay = '+';
        start();
        // if there is a temp and a number one use number one
    } else if (operator === ' ' && numberOne != ' '){
        operator = add;
        operatorDisplay = '+';
        start();
    }
    
});

equalsButton.addEventListener('click', () => {
    if (numberOne != ' ' && numberTwo != ' ' && operator != ' '){
        total = operate(operator, numberOne,numberTwo);
        console.log (total);
        if (total === Infinity){
            total = "Don't Divide By 0 FOOL";
            start();
            tempTotal = ' ';
            total = ' ';
            numberOne = ' ';
            numberTwo = ' ';
            operatorDisplay = ' ';
            operator = ' ';
        } else {
        start();
        tempTotal = total;
        total = ' ';
        numberOne = ' ';
        numberTwo = ' ';
        operatorDisplay = ' ';
        operator = ' ';
    }
    }
});

//Number Buttons

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
    start();
    testOne = numberOne.includes('.');
    testTwo = numberTwo.includes('.');
    console.log(testOne);
    if (operator === ' ' && !testOne){
        numberOne += `.`;
    } else if ((operator != ' ') && !testTwo){
        numberTwo += `.`;
    } 
    start();
})

//key functionality

document.addEventListener('keydown', (event) => {
    console.log(event.key);
    if (event.key == 0){
        document.querySelector('#zeroButton').click();
    }
    if (event.key == 1){
        document.querySelector('#oneButton').click();
    }
    if (event.key == 2){
        document.querySelector('#twoButton').click();
    }
    if (event.key == 3){
        document.querySelector('#threeButton').click();
    }
    if (event.key == 4){
        document.querySelector('#fourButton').click();
    }
    if (event.key == 5){
        document.querySelector('#fiveButton').click();
    }
    if (event.key == 6){
        document.querySelector('#sixButton').click();
    }
    if (event.key == 7){
        document.querySelector('#sevenButton').click();
    }
    if (event.key == 8){
        document.querySelector('#eightButton').click();
    }
    if (event.key == 9){
        document.querySelector('#nineButton').click();
    }
    if (event.key == '%'){
        document.querySelector('#remainderButton').click();
    }
    if (event.key == '/'){
        document.querySelector('#divideButton').click();
    }
    if (event.key == '+'){
        document.querySelector('#addButton').click();
    }
    if (event.key == '-'){
        document.querySelector('#minusButton').click();
    }
    if (event.key == 'x'){
        document.querySelector('#timesButton').click();
    }
    if (event.key == '.'){
        document.querySelector('#decimalButton').click();
    }
    if (event.key == '='){
        document.querySelector('#equalsButton').click();
    }
    if (event.key == 'Enter'){
        document.querySelector('#equalsButton').click();
    }
})





//Starter State
let testOne = false;
let testTwo = false;
let total = ' ';
let numberOne = ' ';
let numberTwo = ' ';
let operatorDisplay = ' ';
let operator = ' ';
let tempTotal = ' ';
start();

//Functions
function start(){
    problemDisplay.textContent = `${numberOne} ${operatorDisplay} ${numberTwo}`;
    solutionDisplay.textContent = `${total}`;
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
    let a = parseFloat(numberOne);
    let b = parseFloat(numberTwo);
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


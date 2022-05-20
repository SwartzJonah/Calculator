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
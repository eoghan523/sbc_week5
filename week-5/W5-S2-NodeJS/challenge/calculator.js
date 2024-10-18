

import fs from 'fs';

//Add function declared//
function add(a, b) {
    return a + b;
    logCalculation(`${a} + ${b} = ${result}`);
}
//subtract function declared//
function subtract(a, b) {
    return a - b;
    logCalculation(`${a} - ${b} = ${result}`);
}

//Division function declared. If statement catches the error of dividing by 0. Else carrys out the division//
function divide(a, b) {
    if (b === 0) {
     throw Error("You can divide by 0");

    } else {  return a / b;
        logCalculation(`${a} / ${b} = ${result}`);

    }

}
//Multipy function declared//
function multiply(a, b) {
    return a * b;
    logCalculation(`${a} * ${b} = ${result}`);
}


function logCalculation(calculation) {
    fs.appendFile('calculations.txt', calculation + '\n', (err) => {
        if (err) throw err("Could not be stored.");
    });
}

//This allows for the functions defined above to be imported on other js scripts as a module. This is in line with "DRY" (Dont Repeat Yourself) principle.
export { add, subtract, multiply, divide };



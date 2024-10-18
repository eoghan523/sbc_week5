
//Imported calculator.js module in order to console.log the results below.
import {add, subtract, multiply, divide} from './calculator'

const results = document.getElementById('results');

console.log(add(18, 233));
console.log(add(279999, 301301));
console.log(subtract(8,2));
console.log(divide(18, 0));
console.log(divide(18, 2));
console.log(multiply(4, 6));
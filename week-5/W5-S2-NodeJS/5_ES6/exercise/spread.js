/* traditional way to merge arrays */
/*
// Using apply() to pass array elements as arguments
var numbers = [1, 2, 3];
var max = Math.max.apply(null, numbers);
console.log(max); // 3

// Using concat() to combine arrays
var arr1 = [1, 2];
var arr2 = [3, 4];
var combined = arr1.concat(arr2);
console.log(combined); // [1, 2, 3, 4]
*/
// Using spread operator for function arguments
const numbers = [1, 2, 3];
const max = Math.max(...numbers);
console.log(max); // 3

// Using spread operator to combine arrays
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4]

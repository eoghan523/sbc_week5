/* traditional
var sum = function (a, b) {
  return a + b;
};

var nums = [1, 2, 3, 4];
var squares = nums.map(function (n) {
  return n * n;
});
console.log(squares); // [1, 4, 9, 16]
*/

const sum = (a, b) => a + b; // Arrow function

const nums = [1, 2, 3, 4];
const squares = nums.map((n) => n * n); // Cleaner syntax for map
console.log(squares); // [1, 4, 9, 16]

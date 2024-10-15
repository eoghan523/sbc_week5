/* traditional
function greet(name) {
  var name = name || "Guest"; // Fallback if no argument is passed
  return "Hello, " + name;
}
console.log(greet()); // "Hello, Guest"
*/
const greet = (name = "Guest") => `Hello, ${name}`;
console.log(greet()); // "Hello, Guest"

/* traditional

var person = { firstName: "John", lastName: "Doe" };
var firstName = person.firstName;
var lastName = person.lastName;
console.log(firstName, lastName); // "John Doe"
*/
const person = {
  firstName: "John",
  lastName: "Doe",
};

const { firstName, lastName } = person; // Destructuring
console.log(firstName, lastName); // "John Doe"

/* You can also destructure arrays */
const students = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 21 },
  { name: "Charlie", age: 22 },
];

const [alice, bob, charlie] = students;
console.log(alice, bob, charlie); // { name: 'Alice', age: 20 } { name: 'Bob', age: 21 } { name: 'Charlie', age: 22 }

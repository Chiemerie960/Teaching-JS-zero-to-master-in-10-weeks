var firstName = "John"; // String
const age = 23; // Number
let isOld = false; //Boolean
const person = {
  surName: "John",
  lastName: "Doe",
  age: 23,
}; // Object
const aray = [1, 2, 3, 4, 5]; // Array

// console.log(typeof isOld);
isOld = 30;

// console.log( typeof isOld);

// alert("Tobe has a big head");
// let name = prompt("Enter your name");

// Quick challenge
// make the value of A and B change
let a = 20;
let b = 30;
// console.log(a,b)
// correction

let c = b;
b = a;
a = c;
// console.log(a,b)

// Arithemtic Operators

// let num1 = 90;
// let num2 = 40;
// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 % num2);

// comparison operators
// >,<,>=,<=,==,===,!=,!==

// let valueA = null;
// let valueB = undefined;
// console.log(valueA == valueB);

// console.log(valueA === valueB);
// console.log(valueA != valueB);
// console.log(valueA !== valueB);

// Logical Operators
// && AND operator
// || OR operator
// ! NOT operator

// console.log(true && true);
// console.log(true && false);
// console.log(false && false);
// console.log(true || true);
// console.log(true || false);
// console.log(false || false);
// console.log(!true);
// console.log(!false);

// Quick task before our next class
// 1. Use prompt() to ask the user to enter two numbers.
// 2. Convert the inputs to numbers using Number() or parseInt().
// 3. Use arithmetic operators to:
// Add the numbers
// Subtract one from the other
// Multiply them
// Divide the first by the second
// Get the remainder (%)
// 4. Display all results using console.log() or alert().
// You can still get your hands dirty and try string concatenation before our next class
// Ask for the users name and add it to each of the output

// correction
const userName = prompt("Enter your name");
const num1 = Number(prompt("Enter the first number"));
const num2 = Number(prompt("Enter the second number"));

console.log(
  `${userName} entered ${num1} and ${num2} and the sum is ${num1 + num2}`
);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

// Concatenation / Interpolation / template literals
const tobe = "Tobenna";
const department = [
  "computer science",
  "Electrical",
  "Mechanical",
  "Chemical",
  "mechatronics",
];
console.log(
  "my name is " +
    tobe +
    " and i am " +
    age +
    " years old student. And I'm in " +
    department[0] +
    " department."
);
console.log(
  `My name is ${tobe} and i am ${age} years old student. And I'm in ${department[0]} department.`
);

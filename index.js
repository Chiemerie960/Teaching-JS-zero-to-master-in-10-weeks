// var firstName = "John"; // String
// const age = 23; // Number
// let isOld = false; //Boolean
// const person = {
//   surName: "John",
//   lastName: "Doe",
//   age: 23,
// }; // Object
// const aray = [1, 2, 3, 4, 5]; // Array

// console.log(typeof isOld);
// isOld = 30;

// console.log( typeof isOld);

// alert("Tobe has a big head");
// let name = prompt("Enter your name");

// Quick challenge
// make the value of A and B change
// let a = 20;
// let b = 30;
// console.log(a,b)
// correction

// let c = b;
// b = a;
// a = c;
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
// const userName = prompt("Enter your name");
// const num1 = Number(prompt("Enter the first number"));
// const num2 = Number(prompt("Enter the second number"));

// console.log(
//   `${userName} entered ${num1} and ${num2} and the sum is ${num1 + num2}`
// );
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 % num2);

// // Concatenation / Interpolation / template literals
// const tobe = "Tobenna";
// const department = [
//   "computer science",
//   "Electrical",
//   "Mechanical",
//   "Chemical",
//   "mechatronics",
// ];
// console.log(
//   "my name is " +
//     tobe +
//     " and i am " +
//     age +
//     " years old student. And I'm in " +
//     department[0] +
//     " department."
// );
// console.log(
//   `My name is ${tobe} and i am ${age} years old student. And I'm in ${department[0]} department.`
// );

// conditional statements (if else) (switch)
// if(condition){}
// else if(){}
// else{}
// Truthy values - values that evaluate to true
// Falsy values - values that evaluate to false
// Truthy values - true, 234, "hello", {}, [], function(){}
// Falsy values - false, 0, "", undefined, null, NaN

// let age;
// console.log(typeof age);
// if (age) {
//   console.log("Age is a truthy value");
// } else if (age === undefined) {
//   console.log("how old are you");
// } else {
//   console.log("A falsy value");
// }
// let age = 30;
// switch (age) {
//   case 20:
//     console.log("You are 20 years old");
//     break;
//   case 30:
//     console.log("You are 30 years old");
//     break;
//   case 40:
//     console.log("You are 40 years old");
//     break;
//   default:
//     console.log("You are not 20, 30 or 40 years old");
//     break;
// }

// Quiz: using if else and switch statements
// 1. Write a program that asks the user to enter their age.
// 2. If the age is above or equal to 30 display "Why haven't you gotten married yet?".
// 3. If the age is above or equal to 20 display "Where is your lamborghini you brokie?".
// 4. If the age is below or equal to 10 display "Bobo go to school!!".
// 5. else display "You are either unborn or you're too old to be disturbing us".

// correction solution
// let age = Number(prompt("Enter your age"));
// if (age >= 30) {
//   console.log("Why haven't you gotten married yet?");
// } else if (age >= 20) {
//   console.log("Where is your lamborghini you brokie?");
// } else if (age <= 10) {
//   console.log("Bobo go to school!!");
// } else {
//   console.log("You are either unborn or you're too old to be disturbing us");
// }

// switch (age) {
//   case age >= 30:
//     console.log("Why haven't you gotten married yet?");
//     break;
//   case age >= 20:
//     console.log("Where is your lamborghini you brokie?");
//     break;
//   case age <= 10:
//     console.log("Bobo go to school!!");
//     break;
//   default:
//     console.log("You are either unborn or you're too old to be disturbing us");
//     break;
// }

// ternary operators
// condition ? true : false
// let age = 20;
// !(age >= 30)
//   ? console.log("Why haven't you gotten married yet?")
//   : console.log("You have no business having a child");

// ++ is used to make a variable increase by 1
// -- is used to make a variable decrease by 1
// -= 2 is used to make a variable decrease by 2
// += 2 is used to make a variable increase by 2

// loops

// For loop
// for(declaration, condition, increment/decrement){}
// for (let i = 0; i < 10; i++) {
//   console.log(i)
// }

// While loop

// let j = 10;
// while (j < 20) {
//   j++;
//   console.log(j);
// }

// Do while loop

// let j = 10;
// do {
//   console.log(j);
//   j++;
// } while (j < 20);

// For in loop
// const user = {
//   surName: "John",
//   lastName: "Doe",
//   age: 23,
// }; // Object
// for (let prop in user) {
//   console.log(user[prop], );
// }
// For of loop
//

// Quiz on loops
// Write a program that console.log() out a list of numbers from 1 - 100 inclusive.
// For every multiple of 3, console.log() "Fizz".
// For every multiple of 5, console.log() "Buzz".
// For numbers which are multiples of both 3 and 5, console.log() "FizzBuzz".

// correction
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }
//  Using While loop

// let i = 1;
// while (i <= 100) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
//   i++;
// }

// Using do while

// let i = 1;
// do {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
//   i++;
// } while (i <= 100);

// Arrays in javascript

// let array = [1, 2, 3, 4, 5, "Tobenna"]; // Array

// push - to add an element to an array

// array.push(6);
// console.log(array)

// pop - to remove an element from an array

// array.pop();
// console.log(array)

// unshift - to add an element to the beginning of an array

// array.unshift("Soma");
// console.log(array)

// shift

// array.shift();
// console.log(array)

// let names = ["Soma", "John", "Doe", "Tobenna", "Isaac", "76"];

// splice - to remove an element or groups of elements from an array

// names.splice(2, 5, "Emerie", "Josephine");
// console.log(names);

// // slice - to remove an element from an array with a specific index
// names.slice(0);

// // includes - to check if an element is in an array
// names.includes("Tobenna");

// filter - to filter an array
// const tobe = names.filter((name) => {
//   name === "tobenna";
// });
// console.log(tobe);

// //find - to find an element in an array
// names.find((name) => name === "Tobenna");

// forEach - to loop through an array
// names.forEach((name) => {
//   console.log(`for each ${name}`);
// });

// // map - to loop through an array
// names.map((name) => {
//   console.log(`map ${name}`);
// });

// toLowerCase - to convert a string to lowercase
// names.forEach((name) => {
//   console.log(name.toUpperCase());
// })
// // toUpperCase - to convert a string to uppercase
// names.toUpperCase();

// Sort
// let numbers = [2, 1, 7, 4, 5, 3, 6, 8, 10, 9];
// names.sort()
// numbers.sort((a, b) => {
//   return a - b
// });
// console.log(names)
// console.log(numbers)

// Using all I've taught since the beginning of this class
// Create an array with the following words:
// ["apple", "banana", "gourmand", "orange"]
// Ask the user to guess a word using prompt().
// (Make sure the guess is case-insensitive.)
// The user has 3 attempts to guess any one of the words in the array.
// If the user's guess matches a word in the array:
// Display: "You have guessed correctly!"
// End the game immediately.
// If the user's guess is not in the array:
// Display: "Incorrect, you have X attempts left."
// (Replace X with the remaining attempts.)
// If the user uses up all 3 attempts without a correct guess:
// Display: "Sorry, you've used all your attempts. Game over!"

// Using a for loop

// const words = ["apple", "banana", "gourmand", "orange"];
// let guessedCorrectly = false;

// for (let attempts = 3; attempts > 0; attempts--) {
//   let guess = prompt(`Guess a word (${attempts} attempts left):`).toLowerCase();

//   if (words.includes(guess)) {
//     alert("You have guessed correctly!");
//     guessedCorrectly = true;
//     break;
//   } else {
//     alert(`Incorrect, you have ${attempts - 1} attempts left.`);
//   }
// }

// if (!guessedCorrectly) {
//   alert("Sorry, you've used all your attempts. Game over!");
// }

// Using a while loop - Assignment

// correction

// const words = ["apple", "banana", "gourmand", "orange"];
// let guessedCorrectly = false;
// let attempts = 3;

// while (attempts > 0) {
//   let guess = prompt(`Guess a word (${attempts} attempts left):`).toLowerCase();

//   if (words.includes(guess)) {
//     alert("You have guessed correctly!");
//     guessedCorrectly = true;
//     break;
//   } else {
//     alert(`Incorrect, you have ${attempts - 1} attempts left.`);
//     attempts--;
//   }
// }

// if (!guessedCorrectly) {
//   alert("Sorry, you've used all your attempts. Game over!");
// }

// Functions, function declaration, parameters, arguments and return value

// What is a function?

// A function is a block of code that performs a specific task or set of tasks when it is called.

// Why use functions?

// Functions can be to avoid code duplication.
// Functions can help making the code easier to read and understand.
// Functions can help making the code easier to maintain.
// Functions can help making the code easier to test.
// Functions can help making the code easier to reuse.

// How to declare a function?

// function nameOfFunction() {
//   // code to be executed
// }
// nameOfFunction() - this is how you call a function

// what are parameters and arguments?

// Parameters are the variables that are passed to a function when it is called.
// Arguments are the values that are passed to a function when it is called.

// differences between parameters and arguments?

// Parameters are the variables that are declared inside a function while arguments are the values that are passed to a function when it is called.

// How to pass one parameter to a function?

// function nameOfFunction(parameter) {
//   // code to be executed
// }
// nameOfFunction("value") - this is how you call a function and pass a parameter

// function getAge(age) {
//   console.log(`You're ${age} years old`);
// }

// getAge(20);

// How to pass multiple parameters to a function?

// function nameOfFunction(parameter1, parameter2) {
//   // code to be executed
// }
// nameOfFunction("value1", "value2") - this is how you call a function and pass multiple parameters

// What is a return value?

// A return value is the value that is returned from a function when it is called.

// How to return a value from a function?

// function nameOfFunction() {
//   // code to be executed
//   return value;
// }
// nameOfFunction() - this is how you call a function and return a value

// function getAge(age) {
//   if (age < 0) {
//     return "Age cannot be negative";
//   }
//   return `You're ${age} years old`;
// }

// console.log(getAge(-1));

// function twoNums(a,b) {
//   return a + b;
// }

// console.log(twoNums(2,3));

// function nameOfFunction(parameter) {
//   // code to be executed
//   return value;
// }
// nameOfFunction("valueForParameter") - this is how you call a function and pass a parameter and return a value

// function nameOfFunction(parameter1, parameter2) {
//   // code to be executed
//   return value;
// }
// nameOfFunction("valueForParameter1", "valueForParameter2") - this is how you call a function and pass multiple parameters and return a value

// mini-challenge
// 1. Write a function that returns the products of 2 numbers.
// 2. Write a function bookInfo(title,author) that returns: "The book title by author".
// 3. Write a function that takes in 2 numbers and the operator (add or addition,sub or subtract,mul or multiply,div or divide)
//  and returns the result. Remember to pass the values in the function as an argument

//  Corrections
// challenge 1
// function productOfNumbers(a, b) {
//   return a * b;
// }
// productOfNumbers(34, 6);

// //  Challenge 2
// function bookInfo(title, author) {
//   return `The book ${title} was written by ${author}`;
// }
// console.log(bookInfo("Half of a yellow sun", "Chimamanda Adichie"));

// // challenge 3

// function miniCalculator(num1, num2, operation) {
//   if (operation === "add" || operation === "addition") {
//     return num1 + num2;
//   } else if (operation === "sub" || operation === "subtract") {
//     return num1 - num2;
//   } else if (operation === "mul" || operation === "multipy") {
//     return num1 * num2;
//   } else if (operation === "div" || operation === "division") {
//     if (num2 === 0) {
//       return "Zero can not divide a number mugu";
//     }
//     return num1 / num2;
//   } else {
//     return "Either you gave a wrong operation or you're dumb";
//   }
// }
// let num1 = parseInt(prompt("what is the first number?"));
// let num2 = parseInt(prompt("What is the second number?"));
// let operation = prompt(
//   "Which Operation?(add/addition, sub/subtract, mul/multiply, div/divide"
// ).toLowerCase();
// console.log(miniCalculator(num1, num2, operation));

// Function declaration / function expression

// A function declaration is a function that is or can be declared before it is called.
// A function expression is a function that is declared after it is called/  expressions allow you to assign a function to a variable.. this is a relatively new concept to javascript being added in ES6.

// Examples of both
// function greet(){
//   console.log("Hello, I'm a function declaration")
// }
// greet();
// const greetings = function(){
//   console.log("Hello to you, I'm a function expression")
// }
// greetings()

// difference between declaration and expressions
//  declarations can be hoisted (it can be called before being defined)
//  Expressions can't be hoisted (it can only be called after being defined)

// Quick test
//  Write a function expression to check if a number is odd.

// Arrow functions

// Arrow functions are a shorter syntax for writing function expressions in JavaScript, introduced in ES6. They are commonly used for callbacks (e.g., inside map, filter) and where lexical THIS binding is needed. However, they lack their own THIS, arguments, and cannot be used as constructors. When we get to OOP we'd discuss about the this keyword.

// Examples of arrow functions

// const add = (a, b) => a + b; // single line
// const subtract = (a, b) => a - b;
// const multiply = (a, b) => a * b;
// const divide = (a, b) => a / b;
// const greet = a => console.log(`Hello ${a}`);

// When you want to write an arrow funtion with multiple lines we use curly brackets like so

// const greet = () => {
//   console.log("Hello");
// };

// Difference between traditional function and arrow functions.

// Traditional functions have their own this keyword and arguments keyword.
// Arrow functions do not have their own this keyword and arguments keyword.

// Quick test
//  Write an arrow function to check if a number is even.
//  Write an arrow function that returns the max of 3 numbers.

// correction

// const isEven = num => num % 2 === 0;
// const maxOfThree = (a, b, c) => {
//   return a > b
//   ? (a > c ? a : c)
//   : (b > c ? b : c);
// };
// const maxOfThree = (a, b, c) => {
//   if (a >= b && a >= c) {
//     return a;
//   }
//   if (b >= a && b >= c) {
//     return b;
//   }
//   return c;
// };
// console.log(maxOfThree(2, 2, 1));
// Scope

//  Scope determines where variables and functions are accessible or the positions of variables in your code and functions.
//  Types:-
//   Global Scope: accessible everywhere.
//   Function Scope: variables declared inside functions.
//   Block Scope: let/const inside {} only accessible inside block

// Examples

// global scope
// const names = "Emerie"
// function getAge(age){
//   let height = 10;
//   console.log(height);
// }
// getAge(20);

// console.log(names);
// for(let i = 0; i < 10; i++){
//   console.log(i);
//   let height = 50;
//   console.log(height);
// }

// Sharp Assignment
//  Write an arrow function that returns the max of 8 numbers. ?(using ternary operators and no help of artificial intelligence)
// Read on the Math objects and how to use them.

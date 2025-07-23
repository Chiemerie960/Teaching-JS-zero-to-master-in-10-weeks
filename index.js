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

// names.splice(2, 5);

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

// Read up on array methods 